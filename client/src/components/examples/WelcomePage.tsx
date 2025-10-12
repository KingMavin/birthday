import WelcomePage from '../../pages/WelcomePage';

export default function WelcomePageExample() {
  return <WelcomePage onContinue={() => console.log('Continue clicked')} />;
}
