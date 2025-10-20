import DodgingButton from '../DodgingButton';

export default function DodgingButtonExample() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center space-y-8">
        <p className="text-xl">Try to hover or click the button below:</p>
        <div className="flex justify-center">
          <DodgingButton>No, I don't</DodgingButton>
        </div>
      </div>
    </div>
  );
}
