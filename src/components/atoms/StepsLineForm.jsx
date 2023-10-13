// eslint-disable-next-line react/prop-types
export function StepsLineForm({ step }) {

  const positions = {
    '1': '',
    '2': 'center',
    '3': 'right'
  };
  const className = positions[step];
  return (
    <div className={`form-stepsLine ${className}`}>
      <div className="form-stepsLine-step"></div>
    </div>
  );
}
