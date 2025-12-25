import React from 'react';
import { Edit, Trash2, Plus } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

// Inline Edit Button - appears on hover when admin
export function EditButton({ onClick, position = 'top-right' }) {
  const { isAdmin } = useAdmin();
  if (!isAdmin) return null;

  const positions = {
    'top-right': 'top-2 right-2',
    'top-left': 'top-2 left-2',
    'bottom-right': 'bottom-2 right-2'
  };

  return (
    <button
      onClick={onClick}
      className={`absolute ${positions[position]} z-10 p-2 bg-blue-500 hover:bg-blue-400 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110`}
      title="Edit"
    >
      <Edit size={16} />
    </button>
  );
}

// Inline Delete Button
export function DeleteButton({ onClick, position = 'top-right' }) {
  const { isAdmin } = useAdmin();
  if (!isAdmin) return null;

  const positions = {
    'top-right': 'top-2 right-2',
    'top-left': 'top-2 left-2',
    'bottom-right': 'bottom-2 right-2'
  };

  return (
    <button
      onClick={onClick}
      className={`absolute ${positions[position]} z-10 p-2 bg-red-500 hover:bg-red-400 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110`}
      title="Delete"
    >
      <Trash2 size={16} />
    </button>
  );
}

// Add Button for sections
export function AddButton({ onClick, label = 'Add' }) {
  const { isAdmin } = useAdmin();
  if (!isAdmin) return null;

  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-lg flex items-center gap-2 shadow-lg transition-all hover:scale-105"
    >
      <Plus size={20} />
      {label}
    </button>
  );
}

// Combined Edit/Delete buttons for cards
export function CardAdminControls({ onEdit, onDelete }) {
  const { isAdmin } = useAdmin();
  if (!isAdmin) return null;

  return (
    <div className="absolute top-2 right-2 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button
        onClick={onEdit}
        className="p-2 bg-blue-500 hover:bg-blue-400 text-white rounded-lg shadow-lg transition-all hover:scale-110"
        title="Edit"
      >
        <Edit size={16} />
      </button>
      <button
        onClick={onDelete}
        className="p-2 bg-red-500 hover:bg-red-400 text-white rounded-lg shadow-lg transition-all hover:scale-110"
        title="Delete"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
