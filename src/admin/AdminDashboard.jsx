import React, { useState, useEffect } from 'react';
import { publicAPI, projectsAPI, uploadImage } from '../services/api';
import { Plus, Trash2, Edit, Upload, X } from 'lucide-react';

export default function AdminDashboard({ onLogout }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    year: '2025',
    description: '',
    stats: ['', '', ''],
    stack: [''],
    image: '',
    links: { live: '', github: '' },
    status: 'Live',
    order: 0
  });

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const response = await publicAPI.getProjects();
      setProjects(response.data.data || []);
    } catch (error) {
      console.error('Error loading projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const result = await uploadImage(file);
      setFormData({ ...formData, image: result.url });
      alert('Image uploaded successfully!');
    } catch (error) {
      alert('Image upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clean up empty values
    const cleanData = {
      ...formData,
      stats: formData.stats.filter(s => s.trim()),
      stack: formData.stack.filter(s => s.trim())
    };

    try {
      if (editingProject) {
        await projectsAPI.update(editingProject._id, cleanData);
      } else {
        await projectsAPI.create(cleanData);
      }
      
      loadProjects();
      resetForm();
      alert(editingProject ? 'Project updated!' : 'Project created!');
    } catch (error) {
      alert('Error saving project');
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this project?')) return;
    
    try {
      await projectsAPI.delete(id);
      loadProjects();
      alert('Project deleted!');
    } catch (error) {
      alert('Error deleting project');
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      ...project,
      stats: [...project.stats, '', '', ''].slice(0, 3),
      stack: [...project.stack, '']
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingProject(null);
    setFormData({
      title: '',
      category: '',
      year: '2025',
      description: '',
      stats: ['', '', ''],
      stack: [''],
      image: '',
      links: { live: '', github: '' },
      status: 'Live',
      order: 0
    });
  };

  const updateArrayField = (field, index, value) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData({ ...formData, [field]: newArray });
  };

  const addArrayField = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ''] });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-[#111] border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">Portfolio CMS</h1>
            <p className="text-sm text-gray-400">Manage your portfolio content</p>
          </div>
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 text-red-400 rounded-lg transition-all"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Projects Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Projects ({projects.length})</h2>
            <button
              onClick={() => setShowForm(!showForm)}
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-lg flex items-center gap-2 transition-all"
            >
              {showForm ? <X size={20} /> : <Plus size={20} />}
              {showForm ? 'Cancel' : 'Add Project'}
            </button>
          </div>

          {/* Add/Edit Form */}
          {showForm && (
            <form onSubmit={handleSubmit} className="bg-[#111] border border-gray-800 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">
                {editingProject ? 'Edit Project' : 'New Project'}
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Title *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Category *</label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white"
                    placeholder="e.g. AI Platform • 2025"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="text-sm text-gray-400 mb-2 block">Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white h-24"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="text-sm text-gray-400 mb-2 block">Stats (3)</label>
                {formData.stats.map((stat, i) => (
                  <input
                    key={i}
                    type="text"
                    value={stat}
                    onChange={(e) => updateArrayField('stats', i, e.target.value)}
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white mb-2"
                    placeholder={`Stat ${i+1}`}
                  />
                ))}
              </div>

              <div className="mb-4">
                <label className="text-sm text-gray-400 mb-2 block">Tech Stack</label>
                {formData.stack.map((tech, i) => (
                  <input
                    key={i}
                    type="text"
                    value={tech}
                    onChange={(e) => updateArrayField('stack', i, e.target.value)}
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white mb-2"
                    placeholder="Technology"
                  />
                ))}
                <button
                  type="button"
                  onClick={() => addArrayField('stack')}
                  className="text-emerald-400 text-sm hover:text-emerald-300"
                >
                  + Add More
                </button>
              </div>

              <div className="mb-4">
                <label className="text-sm text-gray-400 mb-2 block">Image</label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    className="flex-1 bg-black border border-gray-700 rounded-lg px-4 py-2 text-white"
                    placeholder="Image URL or upload below"
                  />
                  <label className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 text-blue-400 rounded-lg cursor-pointer hover:bg-blue-500/30 transition-all flex items-center gap-2">
                    <Upload size={16} />
                    {uploading ? 'Uploading...' : 'Upload'}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      disabled={uploading}
                    />
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Live Demo URL</label>
                  <input
                    type="url"
                    value={formData.links.live}
                    onChange={(e) => setFormData({...formData, links: {...formData.links, live: e.target.value}})}
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">GitHub URL</label>
                  <input
                    type="url"
                    value={formData.links.github}
                    onChange={(e) => setFormData({...formData, links: {...formData.links, github: e.target.value}})}
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-lg transition-all"
                >
                  {editingProject ? 'Update Project' : 'Create Project'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {/* Projects List */}
          {loading ? (
            <div className="text-center text-gray-400 py-12">Loading projects...</div>
          ) : projects.length === 0 ? (
            <div className="text-center text-gray-400 py-12">No projects yet. Add your first project!</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project._id} className="bg-[#111] border border-gray-800 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all">
                  {project.image && (
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  )}
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      <span className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">{project.category}</p>
                    <p className="text-sm text-gray-400 line-clamp-2 mb-4">{project.description}</p>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(project)}
                        className="flex-1 px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/50 text-blue-400 rounded-lg flex items-center justify-center gap-2 transition-all"
                      >
                        <Edit size={16} />
                        <span className="text-sm">Edit</span>
                      </button>
                      <button
                        onClick={() => handleDelete(project._id)}
                        className="flex-1 px-3 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 text-red-400 rounded-lg flex items-center justify-center gap-2 transition-all"
                      >
                        <Trash2 size={16} />
                        <span className="text-sm">Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
