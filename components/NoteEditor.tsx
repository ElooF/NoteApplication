'use client';

import React from 'react';
import { Note } from '@/types';

interface NoteEditorProps {
  note: Note;
  onUpdate: (title: string, content: string) => void;
}

export default function NoteEditor({ note, onUpdate }: NoteEditorProps) {
  return (
    <div className="flex-1 flex flex-col h-full p-8">
      {/* Editor Header Inputs */}
      <div className="mb-6 border-b border-aether-border pb-4">
        <input
          type="text"
          value={note.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onUpdate(e.target.value, note.content)
          }
          placeholder="ENTRY TITLE..."
          className="w-full bg-transparent text-2xl font-bold font-mono text-white placeholder-gray-600 focus:outline-none"
        />
        <div className="mt-2 text-[10px] text-aether-primary/50 font-mono">
          NODE ID: {note.id} // LAST MODIFIED: {note.updatedAt}
        </div>
      </div>

      {/* Editor Body Textarea */}
      <div className="flex-1">
        <textarea
          value={note.content}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            onUpdate(note.title, e.target.value)
          }
          placeholder="WRITE QUANTUM DATA DATA HERE..."
          className="w-full h-full bg-transparent text-sm font-mono text-gray-200 placeholder-gray-700 focus:outline-none resize-none leading-relaxed"
        />
      </div>
    </div>
  );
}