export interface Note {
    title: string;
    content: string;
    tag: 'CYBER' | 'SYSTEM' | 'LOG' | 'CORE';
    updatedAt: string;
    id: string;
}

export interface AuthErrorState {
    password?: string;
    general?: string;
    email?: string;
}