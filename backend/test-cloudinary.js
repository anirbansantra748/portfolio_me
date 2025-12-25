// Test Cloudinary Upload
const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const upload = multer({ storage: multer.memoryStorage() });

const app = express();

app.post('/test-upload', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        console.log('Uploading to Cloudinary...');

        const result = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: 'portfolio' },
                (error, result) => {
                    if (error) {
                        console.error('Cloudinary error:', error);
                        reject(error);
                    } else {
                        console.log('Upload success:', result.secure_url);
                        resolve(result);
                    }
                }
            );
            uploadStream.end(req.file.buffer);
        });

        res.json({
            success: true,
            url: result.secure_url,
            publicId: result.public_id
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(3001, () => {
    console.log('Test server on port 3001');
    console.log('Test with: curl -F "image=@path/to/image.jpg" http://localhost:3001/test-upload');
});
