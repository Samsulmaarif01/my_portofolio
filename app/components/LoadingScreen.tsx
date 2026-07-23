interface LoadingScreenProps {
  isLoaded: boolean;
}

export default function LoadingScreen({ isLoaded }: LoadingScreenProps) {
  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-700 bg-[var(--bg)] ${
        isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Logo Animation */}
        <div className="font-sora font-bold text-6xl text-[var(--fg)] mb-8 animate-pulse tracking-tight">
          SM<span className="text-[var(--accent)]">.</span>
        </div>

        {/* Advanced Spinner */}
        <div className="flex gap-2 mb-8">
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-2)] animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Loading Progress Text */}
        <div className="overflow-hidden w-48 h-1 rounded-full relative bg-[var(--bg-2)] border border-[var(--border-strong)]">
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] origin-left animate-loading-bar w-full"></div>
        </div>
        <p className="mt-6 font-mono text-xs tracking-widest uppercase text-[var(--muted)]">
          Initializing Portfolio
        </p>
      </div>
    </div>
  );
}