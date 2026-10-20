'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthErrorState } from '@/types';

export default function LoginForm() {
  const router = useRouter();

  // Form State
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errors, setErrors] = useState<AuthErrorState>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);

  // Form Validation & Event Handling
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    let validationErrors: AuthErrorState = {};

    // 1. Email check: Not empty & ends with @gmail.com
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      validationErrors.email = 'Terminal Key ID (Email) cannot be empty.';
    } else if (!trimmedEmail.toLowerCase().endsWith('@gmail.com')) {
      validationErrors.email = 'Access Restricted: Email must end with @gmail.com';
    }

    // 2. Password check: More than 6 characters
    if (!password) {
      validationErrors.password = 'Encryption Passcode is required.';
    } else if (password.length <= 6) {
      validationErrors.password = 'Passcode strength insufficient (Must exceed 6 characters).';
    }

    // Check if errors exist
    if (Object.keys(validationErrors).length > 0) {
      validationErrors.general = 'ACCESS DENIED: Authentication protocol failure.';
      setErrors(validationErrors);
      return;
    }

    // Success State & Navigation
    setIsLoading(true);
    setTimeout(() => {
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <div className="glass-panel p-8 rounded-2xl shadow-matrix-glow border border-aether-border relative overflow-hidden transition-all duration-300 hover:border-aether-primary/40">
      {/* Visual Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-aether-bright to-transparent animate-pulse" />
      <div className="absolute top-2 right-3 text-[9px] text-aether-bright/60 font-mono">
        NODE_AUTH
      </div>

      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white neon-text mb-1">
            SETH <span className="text-aether-bright">||</span> APP
        </h1>
        <p className="text-xs text-aether-primary/70 tracking-wider uppercase">
            LOGIN NI SETHYBOY
        </p>
      </div>

      {/* Auth Form */}
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Email Field */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-aether-primary/80 mb-2 font-mono">
            Terminal Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            placeholder="user@gmail.com"
            className={`w-full bg-aether-surface/90 text-sm font-mono text-white placeholder-gray-600 px-4 py-3 rounded-lg border focus:outline-none transition-all ${
              errors.email 
                ? 'border-red-500/80 focus:border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]' 
                : 'border-aether-border focus:border-aether-bright focus:shadow-matrix-glow'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-[11px] text-red-400 font-mono tracking-tight">
              &gt; {errors.email}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-aether-primary/80 mb-2 font-mono">
            Security Passcode
          </label>
          <input
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            placeholder="••••••••••••"
            className={`w-full bg-aether-surface/90 text-sm font-mono text-white placeholder-gray-600 px-4 py-3 rounded-lg border focus:outline-none transition-all ${
              errors.password 
                ? 'border-red-500/80 focus:border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]' 
                : 'border-aether-border focus:border-aether-bright focus:shadow-matrix-glow'
            }`}
          />
          {errors.password && (
            <p className="mt-1 text-[11px] text-red-400 font-mono tracking-tight">
              &gt; {errors.password}
            </p>
          )}
        </div>

        {/* Action Button */}
        <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-aether-primary hover:bg-aether-bright text-black font-bold uppercase tracking-wider py-3.5 px-4 rounded-lg transition-all duration-200 transform active:scale-[0.98] shadow-matrix-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isLoading ? (
            <span className="inline-block animate-pulse">DECRYPTING PROTOCOL...</span>
          ) : (
            <span>INITIALIZE SESSION</span>
          )}
        </button>

        {/* Bonus 1: Bottom Error Message */}
        {errors.general && (
          <div className="p-3 rounded-lg bg-red-950/40 border border-red-800/60 text-center animate-shake">
            <p className="text-xs text-red-400 font-mono font-medium">
              ⚠️ {errors.general}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}