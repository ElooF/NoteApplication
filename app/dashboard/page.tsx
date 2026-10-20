'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import NoteCard from '@/components/NoteCard';
import NoteEditor from '@/components/NoteEditor';
import { Note } from '@/types';

// Mock Initial Notes
const INITIAL_NOTES: Note[] = [
  {
    id: '1',
    title: 'NEURAL LINK INTERFACE',
    content: 'Synchronization protocol established. High bandwidth data stream confirmed.',
    tag: 'CORE',
    updatedAt: '2026-10-20',
  },
  {
    id: '2',
    title: 'MATRIX SECURITY OVERRIDE',
    content: 'Ensure all subroutines are masked under emerald-400 encryption blocks.',
    tag: 'CYBER',
    updatedAt: '2026-10-19',
  },
  {
    id: '3',
    title: 'SYSTEM DIAGNOSTICS',
    content: 'CPU load optimal. Storage efficiency at 94.2%. Next review at 0200 HRS.',
    tag: 'LOG',
    updatedAt: '2026-10-18',
  },
];

export default function DashboardPage() {
  const [notes, setNotes] = useState<Note[]>(INITIAL_NOTES);
  const [selectedNote, setSelectedNote] = useState<Note | null>(INITIAL_NOTES[0]);

  // Create Note
  const handleCreateNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: 'NEW TERMINAL ENTRY',
      content: '',
      tag: 'SYSTEM',
      updatedAt: new Date().toISOString().split('T')[0],
    };
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote);
  };

  // Update Note
  const handleUpdateNote = (updatedTitle: string, updatedContent: string) => {
    if (!selectedNote) return;

    const updated = {
      ...selectedNote,
      title: updatedTitle,
      content: updatedContent,
      updatedAt: new Date().toISOString().split('T')[0],
    };

    setNotes(notes.map((n) => (n.id === selectedNote.id ? updated : n)));
    setSelectedNote(updated);
  };

  // Delete Note
  const handleDeleteNote = (id: string) => {
    const filtered = notes.filter((n) => n.id !== id);
    setNotes(filtered);
    if (selectedNote?.id === id) {
      setSelectedNote(filtered[0] || null);
    }
  };

  return (
    <div className="flex h-screen w-full bg-aether-bg text-gray-200 overflow-hidden bg-grid-pattern">
      {/* Sidebar Navigation */}
      <Sidebar onCreateNote={handleCreateNote} />

      {/* Notes Master-Detail Container */}
      <div className="flex-1 flex overflow-hidden">
        {/* Notes List Column */}
        <div className="w-80 border-r border-aether-border bg-aether-surface/60 flex flex-col">
          <div className="p-4 border-b border-aether-border flex justify-between items-center">
            <span className="text-xs font-mono text-aether-primary/80 uppercase tracking-widest">
              MEMORIES // ({notes.length})
            </span>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {notes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                isSelected={selectedNote?.id === note.id}
                onSelect={() => setSelectedNote(note)}
                onDelete={(e) => {
                  e.stopPropagation();
                  handleDeleteNote(note.id);
                }}
              />
            ))}
          </div>
        </div>

        {/* Note Content Editor Area */}
        <div className="flex-1 flex flex-col bg-aether-bg/80">
          {selectedNote ? (
            <NoteEditor note={selectedNote} onUpdate={handleUpdateNote} />
          ) : (
            <div className="flex-1 flex items-center justify-center text-aether-primary/30 font-mono text-sm">
              NO ACTIVE NODE SELECTED
            </div>
          )}
        </div>
      </div>
    </div>
  );
}