import sprite from '../../Images/sprite.svg';
import'./Icon.scss';

const Icon = ({ className, name, color, size }) => (
  <svg className={`${className}`}>
    <use xlinkHref={`${sprite}#${name}`} id={name} />
  </svg>
);

export default Icon