const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    company: { type: String, required: true },
    role: { type: String, required: true },
    type: { type: String, enum: ['Full-time', 'Part-time', 'Internship', 'Contract'], default: 'Full-time' },
    startDate: { type: String, required: true },
    endDate: { type: String },  // null if current
    description: { type: String },
    achievements: [String],
    order: { type: Number, default: 0 },
    current: { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('Experience', experienceSchema);
