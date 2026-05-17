interface LoadingScreenProps {
  isLoaded: boolean;
}

export default function LoadingScreen({ isLoaded }: LoadingScreenProps) {
  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-700 bg-[#0a0a0f] ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
    >
      <div className="relative">
        {/* Logo Animation */}
        <div className="text-display-hero text-6xl text-[#6c63ff] mb-8 animate-pulse nav-logo">SM</div>

        {/* Advanced Spinner */}
        <div className="absolute inset-x-0 -bottom-4 flex justify-center">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#6c63ff] animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 rounded-full bg-[#00d4aa] animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 rounded-full bg-[#6c63ff] animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>

      {/* Loading Progress Text */}
      <div className="mt-12 overflow-hidden w-48 h-0.5 bg-white/5 rounded-full relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6c63ff] to-[#00d4aa] origin-left animate-loading-bar"></div>
      </div>
      <p className="mt-4 text-label-mono text-xs text-tertiary/50 tracking-[0.2em] uppercase">Initializing Portfolio</p>
    </div>
  );
}