import QuestionPage from '../../pages/QuestionPage';

export default function QuestionPageExample() {
  return <QuestionPage onYes={() => console.log('Yes clicked')} />;
}
