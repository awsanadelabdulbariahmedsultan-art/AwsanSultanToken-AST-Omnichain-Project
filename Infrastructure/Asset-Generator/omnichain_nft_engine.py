# =============================================================================================
# 📜 INTELLECTUAL PROPERTY & SOFTWARE OWNERSHIP RIGHTS
# ---------------------------------------------------------------------------------------------
# Project: Awsan Sultan Art (ASA) - Persistent Generation System
# Founder: Eng. Awsan Adel Abdulbari Ahmed Sultan (ID: 01010305468)
# Country: YEMEN | Phone: +967 777852433 | Wallet: RABBY (Official Verified)
# ---------------------------------------------------------------------------------------------
# # 🔗 OFFICIAL REPOSITORY NETWORK:
# 1. https://github.com/awsanadelabdulbariahmedsultan-art/Awsan-Sultan-Crypto-Ecosystem-project
# 2. https://github.com/awsanadelabdulbariahmedsultan-art/Awsan-Adel-Sultan-Supporting-
# 3. https://github.com/awsanadelabdulbariahmedsultan-art/AwsanSultanToken-AST-Omnichain-Project
# ---------------------------------------------------------------------------------------------
# Copyright (c) 2026. All Rights Reserved. Intellectual Property of Eng. Awsan Sultan.
# =============================================================================================

import os
import json
import random
from PIL import Image, ImageDraw
from google.colab import drive

# 1. ربط Google Drive (تأمين الأصول العابرة للسلاسل)
drive.mount('/content/drive')

# 2. مسارات الإنتاج في الدرايف
DRIVE_BASE_PATH = "/content/drive/MyDrive/Colab Notebooks/Awsan Sultan Token & NFT/build"
IMAGES_PATH = os.path.join(DRIVE_BASE_PATH, "images")
METADATA_PATH = os.path.join(DRIVE_BASE_PATH, "metadata")

if not os.path.exists(IMAGES_PATH): os.makedirs(IMAGES_PATH)
if not os.path.exists(METADATA_PATH): os.makedirs(METADATA_PATH)

# 3. إعدادات المشروع (Omnichain Standard)
PROJECT_NAME = "Awsan Sultan Art (ASA)"
TOTAL_IMAGES = 45000 
IMG_SIZE = (800, 800)

def generate_metadata(edition):
    return {
        "name": f"{PROJECT_NAME} #{edition}",
        "description": "Official IP of Eng. Awsan Sultan. Omnichain Interoperable Asset.",
        "external_url": "https://://github.com",
        "image": f"ipfs://PLACEHOLDER/{edition}.webp",
        "edition": edition,
        "attributes": [
            {"trait_type": "Creator", "value": "Eng. Awsan Sultan"},
            {"trait_type": "Minting_Wallet", "value": "Rabby_Verified"},
            {"trait_type": "Standard", "value": "Omnichain-Ready"},
            {"trait_type": "IP_Record", "value": "01010305468"}
        ]
    }

def generate_geometry(draw, edition):
    # استخدام ألوان تعكس الطابع التكنولوجي المتطور
    bg_color = (random.randint(5, 15), random.randint(5, 15), random.randint(25, 45))
    draw.rectangle([0, 0, 800, 800], fill=bg_color)
    for _ in range(15):
        color = (random.randint(180, 255), random.randint(180, 255), random.randint(220, 255))
        x = sorted([random.randint(30, 770), random.randint(30, 770)])
        y = sorted([random.randint(30, 770), random.randint(30, 770)])
        draw.ellipse([x[0], y[0], x[1], y[1]], outline=color, width=1)
    draw.text((380, 760), "© 2026 Eng. Awsan Sultan - Omnichain Project", fill=(255, 255, 255, 50))

# 4. بدء الإنتاج التراكمي
print(f"🚀 بدء تشغيل محرك الإنتاج من مستودع Omnichain (Rabby Wallet Ready)...")

for i in range(1, TOTAL_IMAGES + 1):
    image_file = f"{IMAGES_PATH}/{i}.webp"
    if os.path.exists(image_file): continue 
        
    try:
        img = Image.new("RGB", IMG_SIZE)
        draw = ImageDraw.Draw(img)
        generate_geometry(draw, i)
        
        img.save(image_file, "WEBP", quality=70)
        with open(f"{METADATA_PATH}/{i}.json", 'w') as f:
            json.dump(generate_metadata(i), f)
        
        if i % 100 == 0:
            print(f"✅ تم تأمين {i} قطعة فنية في بنية الـ Omnichain...")
    except Exception as e:
        print(f"⚠️ خطأ تقني: {e}")

print("🎊 اكتمل الإنتاج! الكود الآن يمثل النواة الفنية لمستودع Omnichain الخاص بك.")
