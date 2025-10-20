import FloatingHearts from '../FloatingHearts';

export default function FloatingHeartsExample() {
  return (
    <div className="relative h-screen bg-background">
      <FloatingHearts />
      <div className="relative z-10 flex items-center justify-center h-full">
        <p className="text-2xl">Hearts floating in the background</p>
      </div>
    </div>
  );
}
