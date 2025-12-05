# 🧥 Transformer-Enhanced Virtual Try-On with Color Customization  
**CS/2019/040 — Nishadi Sasanthika**

## 📌 Overview  
This project presents a **two-stage deep learning Virtual Try-On (VTON) pipeline** that generates **high-fidelity try-on images** and enables **texture-preserving garment color customization**.

It combines:
- **Geometric Matching Module (GMM)** for non-rigid garment warping  
- **Transformer-Enhanced U-Net GAN** for photorealistic synthesis  
- **HSV-based color customization**  
- **Full-stack web interface (Flask + React)**

This system addresses two major issues in VTON research:  
✔ Preserving fine-grained garment details  
✔ Enabling meaningful real-time interactivity  

---

## 🚀 Features

### 🧩 1. Two-Stage Virtual Try-On Pipeline  
#### **Stage 1: Geometric Matching Module (GMM)**
- TPS-based CNN warping  
- Predicts 6-parameter affine transform  
- Aligns garments to user pose accurately  

#### **Stage 2: Transformer-Enhanced Generator**
- U-Net + Transformer bottleneck  
- Global + local feature modeling  
- Enhanced texture retention via VGG Style Loss  

---

### 🎨 2. Texture-Preserving Color Customization  
- HSV-based transformation  
- Only hue shifted → texture, shadows, highlights preserved  
- Real-time recoloring support  

---

### 📏 3. Rule-Based Size Recommendation  
- Inputs: chest, waist, hips  
- Based on standardized size chart  
- Outputs best-fit size (S / M / L / XL)

---

## 🌐 4. Full-Stack Application  
**Backend:** Flask, PyTorch  
**Frontend:** React.js, Tailwind CSS  
**Communication:** REST API (JSON + multipart uploads)

---

## 📂 Dataset – HD-VITON  
Includes:
- Person images  
- Cloth & cloth-mask  
- Semantic parsing maps  
- DensePose UV maps  
- OpenPose skeletal keypoints  
- Agnostic-v3 person representations

  <img width="600" height="431" alt="image" src="https://github.com/user-attachments/assets/6274b0eb-c77d-42a2-bf6a-a28fee08f719" />


---

## 🏗 System Architecture  
<img width="686" height="592" alt="image" src="https://github.com/user-attachments/assets/38cc9435-1915-4dbf-b73e-eafd15e5280e" />


---

## 🛠 Technologies Used  
### **Deep Learning**
- PyTorch  
- GAN (PatchGAN discriminator)  
- Transformer layers  
- VGG-based perceptual & style loss  

### **Backend**
- Flask  
- Python  

### **Frontend**
- React  
- Tailwind CSS  

---

## 📁 Project Structure (Sample)
<img width="393" height="508" alt="image" src="https://github.com/user-attachments/assets/23f41a3c-3265-41a4-9b89-fab96b2cf853" />




---


## ▶️ How to Run

### **Backend**
```bash
cd backend
pip install -r requirements.txt
python app.py
```

### **Frontend**
```bash
cd frontend
npm install
npm run dev
```

---
## 🖼️ Screenshots

### 🔹 Home Page UI
<img width="742" height="401" alt="image" src="https://github.com/user-attachments/assets/aedd67ea-05a6-4f78-b114-240123a7fe6c" />

### 🔹 Try-On Result
<img width="721" height="423" alt="image" src="https://github.com/user-attachments/assets/bfbf012f-ae14-469d-a4ef-daefa62060c3" />

### 🔹 Size Recommendation
<img width="702" height="416" alt="image" src="https://github.com/user-attachments/assets/a150aa3b-c2c3-4acf-8c0e-1182b564ddfa" />


---
## 📊 Evaluation

### 🔢 Metrics
- **SSIM** – Structural Similarity Index
- **LPIPS** – Learned Perceptual Image Patch Similarity

### 🖼 Qualitative Evaluation
- **Texture fidelity**
- **Natural garment–body alignment**
- **Realistic lighting & shadow preservation**

## 📘 Research Thesis

Full thesis PDF: CS_2019_040 — Transformer-Enhanced Virtual Try-On with Color Customization
(https://drive.google.com/file/d/1fEAEmu5lCBdhz2u9D9PbisEcGdja2khW/view?usp=sharing)

## 👩‍💻 Author

- P.M.N. Sasanthika
- CS/2019/040
- University of Kelaniya

## 📜 License

This project is released under the MIT License.


