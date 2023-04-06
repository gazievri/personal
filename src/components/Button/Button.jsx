import './Button.sass';

export const Button = ({ title, action }) => {
  return <button className="button" onClick={action}>{title}</button>;
};
