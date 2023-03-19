import React, { useState,useEffect, useCallback  } from "react";
import "./Popup.scss";
import Icon from "../icon/Icon";



function Popup({ value, options, type,setValueInState }) {
  const [showPopup, setShowPopup] = useState(false);


  const handlePopupVisibility = useCallback(() => {
    setShowPopup(!showPopup)
  }, [showPopup])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        handlePopupVisibility();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handlePopupVisibility]);

 
  const handleValueChange = e => {
    const {value} = e.target;
    setValueInState(value);
    handlePopupVisibility();
  }

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      handlePopupVisibility();
    }
  };
  

  return (
    <div className={"popup__container"}>
      <button className={"btn__container"} type="button" onClick={handlePopupVisibility}>
        <div className={`${value.toLowerCase()} dot`} />
        <span className={type === "activityArea" ? `optionText__bg-color__${value.toLowerCase()} btn__text` : " btn__text"}>{value}</span>
         <Icon className={"dropdown-arrow"} name={"dropdown-arrow"} />
      </button>

      {showPopup && (
        <div className={"popup_list"}>
          <div className={"backdrop"} onClick={handleBackdropClick}></div>
          <ul className={`${type}_container`}>
            {options.map((option) => (
              <li key={option} >
              <label className={`option_container`}>
                <input
                  type={"radio"}
                  name={type}
                  value={option}
                  onChange={handleValueChange} 
                />
                <div className={`${option.toLowerCase()} dot`} />
                <span className={type === "activityArea" ? `optionText__bg-color__${value.toLowerCase()}` :null }>{option}</span>
              </label>
                 </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Popup;
