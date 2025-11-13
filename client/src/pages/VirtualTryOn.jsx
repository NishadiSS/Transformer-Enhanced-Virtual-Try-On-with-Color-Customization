import { useState, useRef, useCallback } from 'react'; // *** useCallback නැවත import කරගන්න ***
import { useDropzone } from 'react-dropzone';
import { HexColorPicker } from 'react-colorful';
import axios from 'axios';
import { PhotoIcon, SwatchIcon, UserIcon } from '@heroicons/react/24/outline';

// Import your cloth images
import cloth1 from '../assets/cloth_1.jpg';
import cloth2 from '../assets/cloth_2.jpg';
import cloth3 from '../assets/cloth_3.jpg';
import cloth4 from '../assets/cloth_4.jpg';

const VirtualTryOn = () => {
  const [userImage, setUserImage] = useState(null);
  const [userImageFile, setUserImageFile] = useState(null); // To hold the actual file
  const [selectedCloth, setSelectedCloth] = useState(null);
  const [color, setColor] = useState('#ffffff');
  const [resultImage, setResultImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const colorPickerRef = useRef(null);

  const clothItems = [
    { id: 1, name: 'cloth_1',  image: cloth1 },
    { id: 2, name: 'cloth_2', image: cloth2 },
    { id: 3, name: 'cloth_3', image: cloth3 },
    { id: 4, name: 'cloth_4', image: cloth4 },
  ];

  // *** FIX: Wrap onDrop in useCallback with the correct dependency ***
  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      // Revoke the old URL to prevent memory leaks before creating a new one
      if (userImage) {
        URL.revokeObjectURL(userImage);
      }
      setUserImageFile(file); // Store the file object for upload
      setUserImage(URL.createObjectURL(file)); // Set the new preview URL
      setError('');
    }
  }, [userImage]); // Dependency array ensures the function has the latest `userImage` state

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {'image/*': []},
    maxFiles: 1,
    onDrop, // Pass the stable useCallback function
  });

  const handleTryOn = async () => {
    if (!userImageFile || !selectedCloth) {
        setError('Please upload a photo and select a clothing item.');
        return;
    }

    setLoading(true);
    setResultImage(null);
    setError('');

    try {
      const formData = new FormData();
      // We don't need to fetch the blob again, we already have the file object
      formData.append('user_image', userImageFile, 'user.jpg');
      formData.append('cloth_id', selectedCloth.id);
      formData.append('color', color);

      const response = await axios.post('http://localhost:5000/api/virtual-try-on', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      
      if (response.data && response.data.result_image) {
        setResultImage(`data:image/jpeg;base64,${response.data.result_image}`);
      } else {
        setError('Server did not return a valid image.');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.error || 'An unexpected error occurred.';
      setError(`Failed to generate try-on. ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  const toggleColorPicker = () => {
    colorPickerRef.current.classList.toggle('hidden');
  };

  return (
    <div className="space-y-8 py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 min-h-screen">
      <h2 className="text-4xl font-extrabold text-slate-800 text-center">Virtual Try-On</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* User Image Upload */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-slate-700 mb-4">1. Upload Your Photo</h3>
          <div {...getRootProps()} className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-purple-500 transition-colors duration-200 min-h-[200px] flex flex-col items-center justify-center ${isDragActive ? 'border-purple-600 bg-purple-50' : 'border-slate-300'}`}>
            <input {...getInputProps()} />
            {userImage ? (
              <img src={userImage} alt="User" className="max-w-full max-h-72 object-contain mx-auto rounded-md" />
            ) : (
              <div className="text-slate-500">
                <PhotoIcon className="mx-auto h-12 w-12 text-slate-400" />
                <p className="mt-2 text-sm">
                  {isDragActive ? "Drop the file here..." : "Drag & drop or click to select"}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Cloth Selection */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-slate-700 mb-4">2. Select Clothing & Color</h3>
          <div className="grid grid-cols-2 gap-4">
            {clothItems.map(item => (
              <div 
                key={item.id}
                className={`border rounded-lg p-2 cursor-pointer transition-all duration-200 ${selectedCloth?.id === item.id ? 'ring-2 ring-purple-500 shadow-xl' : 'hover:shadow-md border-slate-200'}`}
                onClick={() => setSelectedCloth(item)}
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-32 object-contain rounded"
                />
              </div>
            ))}
          </div>
          <div className="mt-6">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md shadow-sm text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
              onClick={toggleColorPicker}
              disabled={!selectedCloth}
            >
              <SwatchIcon className="-ml-1 mr-2 h-5 w-5" />
              Change Color
            </button>
            <div ref={colorPickerRef} className="hidden mt-4 transition-all">
              <HexColorPicker color={color} onChange={setColor} />
              <p className="mt-2 text-sm text-slate-600">Selected: <strong style={{ color: color }}>{color}</strong></p>
            </div>
          </div>
        </div>

        {/* Creative Result Preview */}
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col">
          <h3 className="text-xl font-bold text-slate-700 mb-4">3. See the Result</h3>
          <div className="border-2 border-dashed border-slate-300 rounded-lg flex-grow flex items-center justify-center p-2 bg-slate-50/50 overflow-hidden">
            {loading ? (
              <div className="text-center text-slate-500 p-4">
                <UserIcon className="h-24 w-24 mx-auto text-slate-300 animate-pulse" />
                <p className="mt-4 font-semibold">Generating your new look...</p>
              </div>
            ) : resultImage ? (
              <img key={resultImage} src={resultImage} alt="Try-On Result" className="max-w-full max-h-full object-contain mx-auto animate-fade-in-scale" />
            ) : (
              <div className="text-center text-slate-400 p-4">
                <UserIcon className="h-24 w-24 mx-auto text-slate-300" />
                <p className="mt-2 text-sm">Your virtual try-on<br/>will appear here</p>
              </div>
            )}
          </div>
          {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
          <div className="mt-6">
            <button
              type="button"
              className="w-full inline-flex justify-center items-center px-4 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:bg-purple-300 disabled:cursor-not-allowed"
              onClick={handleTryOn}
              disabled={!userImageFile || !selectedCloth || loading}
            >
              {loading ? "Please Wait..." : "Try It On"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTryOn;