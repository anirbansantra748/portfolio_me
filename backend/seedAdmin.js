const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('./models/Admin');

dotenv.config();

async function createAdmin() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ MongoDB connected');

        // Check if admin already exists
        const existingAdmin = await Admin.findOne({ email: 'anirbansantra748@gmail.com' });

        if (existingAdmin) {
            console.log('⚠️  Admin already exists');
            process.exit(0);
        }

        // Create admin
        const admin = new Admin({
            email: 'anirbansantra748@gmail.com',
            password: process.env.ADMIN_PASSWORD || 'admin123'  // Change this!
        });

        await admin.save();
        console.log('✅ Admin created successfully!');
        console.log(`Email: ${admin.email}`);
        console.log('Password: Check .env file');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
}

createAdmin();
