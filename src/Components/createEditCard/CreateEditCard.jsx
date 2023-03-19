import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./CreateEditCard.module.scss";
import Popup from "../popup/Popup";
import {
  IMPORTANCE_CATEGORY,
  ACTIVITY_AREA,
  text,
} from "../../textVariables/textVariables";
import Icon from "../icon/Icon";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import { addCard, editCard, deleteCard } from "../../store/cardsSlice";

function CreateEditCard({ closeModal, mode, certainCard }) {
  const [difficultyPopupValue, setDifficultyPopupValue] = useState(
    mode === "edit" ? certainCard.difficulty : "Normal"
  );
  const [activityAreaPopupValue, setActivityAreaPopupValue] = useState(
    mode === "edit" ? certainCard.activityArea : "Work"
  );
  const [questText, setQuestText] = useState(
    mode === "edit" ? certainCard.text : ""
  );
  const dispatch = useDispatch();

  const handleInputValue = (e) => {
    const { value } = e.target;
    setQuestText(value);
  };

  const handleSubmit = () => {
    if (questText.trim() === "") {
      toast.error("Please, write quest!", {
        position: "top-right",
      });
      return;
    }

    if (mode === "create") {
      const cardDetails = {
        id: uuidv4(),
        difficulty: difficultyPopupValue,
        activityArea: activityAreaPopupValue,
        text: questText,
        complete: false,
      };
      dispatch(addCard(cardDetails));
      closeModal();
    } else {
      const cardDetails = {
        id: certainCard.id,
        difficulty: difficultyPopupValue,
        activityArea: activityAreaPopupValue,
        text: questText,
        complete: certainCard.complete,
      };
      dispatch(editCard(cardDetails));
      closeModal();
    }
  };

  const handleClearBtn = () => {
    if (mode === "edit") {
      dispatch(deleteCard(certainCard.id));
      closeModal();
    } else {
      closeModal();
    }
  };

  return (
    <div className={styles.createEditCard__container}>
      <div className={styles.createEditCard__topContainer}>
        <Popup
          options={IMPORTANCE_CATEGORY}
          type={"difficulty"}
          value={difficultyPopupValue}
          setValueInState={setDifficultyPopupValue}
        />
      </div>
      <div className={styles.createEditCard__middleContainer}>
        <h3 className={styles.createEditCard__middleContainer__title}>
          {text["createCard-title"]}
        </h3>
        <input
          className={styles.createEditCard__middleContainer__input}
          type="text"
          onChange={handleInputValue}
          value={questText}
        />
        <div className={styles.createEditCard__middleContainer}></div>
      </div>
      <div className={styles.createEditCard__botContainer}>
        <Popup
          options={ACTIVITY_AREA}
          type={"activityArea"}
          value={activityAreaPopupValue}
          setValueInState={setActivityAreaPopupValue}
        />
        <div className={styles.createEditCard__btnContainer}>
          <button
            type="button"
            onClick={handleClearBtn}
            className={styles.createEditCard__btnContainer__cancel}
          >
            <Icon name={"clear"} className={"clear"} />
          </button>
          {mode === "create" ? (
            <button
              type="button"
              className={styles.createEditCard__btnContainer__createBtn}
              onClick={handleSubmit}
            >
              {text["createBtn-title"]}
            </button>
          ) : (
            <button type={"button"} onClick={handleSubmit}>
              <Icon name={"done"} className={"done"} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateEditCard;
