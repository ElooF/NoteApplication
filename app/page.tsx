import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-4 bg-grid-pattern overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-aether-bright/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-aether-dim/20 rounded-full blur-[90px] pointer-events-none" />

      {/* Cyber Grid Border Framing */}
      <div className="absolute top-6 left-6 text-[10px] text-aether-primary/40 tracking-widest font-mono select-none">
        ADV101-IMPERIAL [EXERCISE 4.0]
      </div>
      <div className="absolute bottom-6 right-6 text-[10px] text-aether-primary/40 tracking-widest font-mono select-none">
        SETH <span className="text-aether-bright">||</span> APP
      </div>

      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </main>
  );
}