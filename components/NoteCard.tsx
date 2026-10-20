'use client';

import React from 'react';
import { Note } from '@/types';

interface NoteCardProps {
  note: Note;
  isSelected: boolean;
  onSelect: () => void;
  onDelete: (e: React.MouseEvent) => void;
}

export default function NoteCard({
  note,
  isSelected,
  onSelect,
  onDelete,
}: NoteCardProps) {
  return (
    <div
      onClick={onSelect}
      className={`p-3.5 rounded-xl border transition-all cursor-pointer relative group ${
        isSelected
          ? 'bg-aether-card border-aether-bright/80 shadow-matrix-glow'
          : 'bg-aether-surface/40 border-aether-border hover:border-aether-primary/50'
      }`}
    >
      <div className="flex justify-between items-start mb-1.5">
        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-aether-dim/40 text-aether-bright border border-aether-primary/30">
          {note.tag}
        </span>
        <button
          onClick={onDelete}
          className="text-xs text-gray-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity px-1"
          title="Delete Note"
        >
          ✕
        </button>
      </div>

      <h3 className="text-xs font-bold text-white truncate font-mono mb-1">
        {note.title || 'UNTITLED NODE'}
      </h3>
      <p className="text-[11px] text-gray-400 line-clamp-2 font-mono">
        {note.content || 'Empty entry...'}
      </p>

      <div className="mt-2 text-[9px] text-aether-primary/40 font-mono">
        {note.updatedAt}
      </div>
    </div>
  );
}