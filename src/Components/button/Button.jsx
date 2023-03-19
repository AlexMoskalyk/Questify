import React from 'react';
import Icon from '../icon/Icon';
import './Button.scss';

function Button({type,onClick,btnName,text ,icon}) {
  return (
    <button className={`${btnName}`} type={type} onClick={onClick}>
        {icon && <Icon name={icon} className={icon}/>}
        {text}
    </button>
  )
}

export default Button