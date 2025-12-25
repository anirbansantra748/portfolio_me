const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    tagline: { type: String },
    bio: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    location: { type: String },
    socialLinks: {
        github: String,
        linkedin: String,
        leetcode: String,
        twitter: String
    },
    resumeUrl: { type: String }
}, {
    timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);
