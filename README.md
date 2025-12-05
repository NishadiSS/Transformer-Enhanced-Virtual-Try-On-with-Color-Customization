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

---

## 🏗 System Architecture  
<img width="722" height="48" alt="image" src="https://github.com/user-attachments/assets/c87a3334-c73d-4e06-a1b6-088af134eec9" />



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
<img width="242" height="356" alt="image" src="https://github.com/user-attachments/assets/001b6c49-0274-4a90-ac76-7f6053d1ebd8" />



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

## 📊 Evaluation

### 🔢 Metrics
- **SSIM** – Structural Similarity Index
- **LPIPS** – Learned Perceptual Image Patch Similarity

### 🖼 Qualitative Evaluation
- **Texture fidelity**
- **Natural garment–body alignment**
- **Realistic lighting & shadow preservation**




