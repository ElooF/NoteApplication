'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface SidebarProps {
  onCreateNote: () => void;
}

export default function Sidebar({ onCreateNote }: SidebarProps) {
  const router = useRouter();

  // Bonus 2: Logout function returns to login screen
  const handleLogout = () => {
    router.push('/');
  };

  return (
    <aside className="w-64 border-r border-aether-border bg-aether-surface/90 flex flex-col justify-between p-4 glass-panel">
      <div>
        {/* Branding */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white neon-text tracking-wide">
            AETHER <span className="text-aether-bright">//</span>
          </h2>
          <p className="text-[10px] text-aether-primary/60 font-mono tracking-widest uppercase">
            TERMINAL v4.0
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={onCreateNote}
          className="w-full bg-aether-card hover:bg-aether-border text-aether-bright border border-aether-primary/40 rounded-lg p-3 text-xs font-mono font-semibold tracking-wider flex items-center justify-center space-x-2 transition-all hover:shadow-matrix-glow"
        >
          <span>+ NEW ENTRY</span>
        </button>
      </div>

      {/* Bonus 2: Logout Button */}
      <div className="border-t border-aether-border pt-4">
        <button
          onClick={handleLogout}
          className="w-full text-left text-xs font-mono text-red-400/80 hover:text-red-300 hover:bg-red-950/30 p-2.5 rounded-lg border border-transparent hover:border-red-900/50 transition-all flex items-center justify-between"
        >
          <span>DISCONNECT</span>
          <span>✕</span>
        </button>
      </div>
    </aside>
  );
}