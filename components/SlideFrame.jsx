// SlideFrame provides the global background layer — grid, noise, ambient lighting
export default function SlideFrame({ children, isPresenting }) {
  return (
    <div
      className="relative w-full h-full bg-[#05070A] grid-bg overflow-hidden"
      style={isPresenting ? { position: 'fixed', inset: 0, background: '#05070A' } : undefined}
    >
      {/* Radial ambient glow — top left */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 800,
          height: 800,
          top: -200,
          left: -200,
          background: 'radial-gradient(circle, rgba(47,128,255,0.07) 0%, transparent 70%)',
        }}
      />
      {/* Radial ambient glow — bottom right */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          bottom: -150,
          right: -100,
          background: 'radial-gradient(circle, rgba(0,229,255,0.05) 0%, transparent 70%)',
        }}
      />
      {/* Subtle top border line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(47,128,255,0.4) 50%, transparent 100%)',
        }}
      />
      {children}
    </div>
  )
}
