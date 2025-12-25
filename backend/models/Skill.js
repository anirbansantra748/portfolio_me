const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true }, // Backend, Frontend, DevOps, etc.
    level: { type: String, enum: ['Beginner', 'Intermediate', 'Expert'], default: 'Intermediate' },
    yearsOfExperience: { type: Number, default: 1 },
    order: { type: Number, default: 0 }
}, {
    timestamps: true
});

module.exports = mongoose.model('Skill', skillSchema);
