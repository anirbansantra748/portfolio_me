const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const Skill = require('../models/Skill');
const Experience = require('../models/Experience');
const Profile = require('../models/Profile');
const Achievement = require('../models/Achievement');

// Projects
router.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find().sort({ order: 1, createdAt: -1 });
        res.json({ success: true, data: projects });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

router.get('/projects/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ success: false, message: 'Project not found' });
        }
        res.json({ success: true, data: project });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Skills
router.get('/skills', async (req, res) => {
    try {
        const skills = await Skill.find().sort({ category: 1, order: 1 });
        res.json({ success: true, data: skills });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Experience
router.get('/experience', async (req, res) => {
    try {
        const experience = await Experience.find().sort({ order: 1, startDate: -1 });
        res.json({ success: true, data: experience });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Profile
router.get('/profile', async (req, res) => {
    try {
        const profile = await Profile.findOne();
        res.json({ success: true, data: profile || {} });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Achievements
router.get('/achievements', async (req, res) => {
    try {
        const achievements = await Achievement.find().sort({ order: 1, createdAt: -1 });
        res.json({ success: true, data: achievements });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;
