import ShrinkingButton from '../ShrinkingButton';

export default function ShrinkingButtonExample() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center space-y-8">
        <p className="text-xl">Click the button to see it shrink:</p>
        <div className="flex justify-center">
          <ShrinkingButton>No I didn't</ShrinkingButton>
        </div>
      </div>
    </div>
  );
}
