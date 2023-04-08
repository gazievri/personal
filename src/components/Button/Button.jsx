import { NavLink } from 'react-router-dom';
import './Button.sass';

export const Button = ({ title }) => {
  return <NavLink className="button" to='/contact'>{title}</NavLink>;
};
