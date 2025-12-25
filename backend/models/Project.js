const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String

        , required: true
    },
    category: { type: String, required: true },
    year: { type: String, default: '2024' },
    description: { type: String, required: true },
    stats: [String],
    stack: [String],
    image: { type: String, default: '/placeholder.png' },
    links: {
        live: String,
        github: String
    },
    status: { type: String, enum: ['Live', 'Development', 'Archived'], default: 'Live' },
    order: { type: Number, default: 0 },
    featured: { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);
