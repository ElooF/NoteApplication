import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AETHER // QUANTUM NOTE MATRIX',
  description: 'Futuristic Minimalist Knowledge Terminal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-aether-bg text-gray-200 antialiased selection:bg-aether-primary selection:text-black">
        {children}
      </body>
    </html>
  );
}