const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    date: { type: String },
    description: { type: String },
    skills: [String],
    type: { type: String, enum: ['Achievement', 'Certification', 'Award'], default: 'Achievement' },
    image: { type: String },
    color: { type: String, default: 'gold' },
    order: { type: Number, default: 0 }
}, {
    timestamps: true
});

module.exports = mongoose.model('Achievement', achievementSchema);
