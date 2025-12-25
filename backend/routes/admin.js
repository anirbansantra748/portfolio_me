const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const auth = require('../middleware/auth');

// Models
const Project = require('../models/Project');
const Skill = require('../models/Skill');
const Experience = require('../models/Experience');
const Profile = require('../models/Profile');
const Achievement = require('../models/Achievement');

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Multer config (memory storage)
const upload = multer({ storage: multer.memoryStorage() });

// Auth middleware for all routes
router.use(auth);

// ============ IMAGE UPLOAD ============
router.post('/upload', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'No file uploaded' });
        }

        // Upload to Cloudinary
        const result = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: 'portfolio' },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
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
        res.status(500).json({ success: false, message: error.message });
    }
});

// ============ PROJECTS ============
router.post('/projects', async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(201).json({ success: true, data: project });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

router.put('/projects/:id', async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!project) {
            return res.status(404).json({ success: false, message: 'Project not found' });
        }
        res.json({ success: true, data: project });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

router.delete('/projects/:id', async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (!project) {
            return res.status(404).json({ success: false, message: 'Project not found' });
        }
        res.json({ success: true, message: 'Project deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

router.patch('/projects/reorder', async (req, res) => {
    try {
        const { projects } = req.body;
        const updatePromises = projects.map(({ id, order }) =>
            Project.findByIdAndUpdate(id, { order })
        );
        await Promise.all(updatePromises);
        res.json({ success: true, message: 'Projects reordered' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// ============ SKILLS ============
router.post('/skills', async (req, res) => {
    try {
        const skill = new Skill(req.body);
        await skill.save();
        res.status(201).json({ success: true, data: skill });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

router.put('/skills/:id', async (req, res) => {
    try {
        const skill = await Skill.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!skill) {
            return res.status(404).json({ success: false, message: 'Skill not found' });
        }
        res.json({ success: true, data: skill });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

router.delete('/skills/:id', async (req, res) => {
    try {
        const skill = await Skill.findByIdAndDelete(req.params.id);
        if (!skill) {
            return res.status(404).json({ success: false, message: 'Skill not found' });
        }
        res.json({ success: true, message: 'Skill deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// ============ EXPERIENCE ============
router.post('/experience', async (req, res) => {
    try {
        const experience = new Experience(req.body);
        await experience.save();
        res.status(201).json({ success: true, data: experience });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

router.put('/experience/:id', async (req, res) => {
    try {
        const experience = await Experience.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!experience) {
            return res.status(404).json({ success: false, message: 'Experience not found' });
        }
        res.json({ success: true, data: experience });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

router.delete('/experience/:id', async (req, res) => {
    try {
        const experience = await Experience.findByIdAndDelete(req.params.id);
        if (!experience) {
            return res.status(404).json({ success: false, message: 'Experience not found' });
        }
        res.json({ success: true, message: 'Experience deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// ============ PROFILE ============
router.put('/profile', async (req, res) => {
    try {
        let profile = await Profile.findOne();
        if (profile) {
            profile = await Profile.findByIdAndUpdate(
                profile._id,
                req.body,
                { new: true, runValidators: true }
            );
        } else {
            profile = new Profile(req.body);
            await profile.save();
        }
        res.json({ success: true, data: profile });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

// ============ ACHIEVEMENTS ============
router.post('/achievements', async (req, res) => {
    try {
        const achievement = new Achievement(req.body);
        await achievement.save();
        res.status(201).json({ success: true, data: achievement });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

router.put('/achievements/:id', async (req, res) => {
    try {
        const achievement = await Achievement.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!achievement) {
            return res.status(404).json({ success: false, message: 'Achievement not found' });
        }
        res.json({ success: true, data: achievement });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

router.delete('/achievements/:id', async (req, res) => {
    try {
        const achievement = await Achievement.findByIdAndDelete(req.params.id);
        if (!achievement) {
            return res.status(404).json({ success: false, message: 'Achievement not found' });
        }
        res.json({ success: true, message: 'Achievement deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;
