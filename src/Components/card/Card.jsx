import React from "react";
import Button from "../button/Button";
import "./Card.scss";
import { useDispatch } from 'react-redux';
import {text} from '../../textVariables/textVariables';
import {toggleComplete} from '../../store/cardsSlice';
import CompleteImg from '../../Images/complete-img.png';

function Card({ card,toggleCreateOrEditCard,handleCertainCardData }) {
  
  const dispatch = useDispatch();

  const handleEditBtn = () =>{
    handleCertainCardData(card);
    toggleCreateOrEditCard('edit');
  }

  const toggleCardComplete = ()=>{
    dispatch(toggleComplete(card.id))

  }


  return (
    <div className={"card__container"}>
      <div className={"card__top_wrapper"}>
        {card.complete === false ? 
        <>
          <div className="card__difficulty_wrapper">
          <div className={`card__dot ${card.difficulty.toLowerCase()}`} />
          <span className={"card__difficulty_text"}>{card.difficulty}</span>
        </div>
        <Button text={"completed"} btnName={"completed"} onClick={toggleCardComplete}/>
        </>
        :
        <>
          <div className={"card__complete_text"}>{text["completed-card-view-text"]}</div>
          <Button text={card.text} btnName={"toggleComplete"} onClick={toggleCardComplete}/>
        </>
        }
      </div>
      <div className={"card__middle_wrapper"}>
        {card.complete === false ? 
        <span className={"card__quest_text"}>{card.text}</span>
        :
        <img className={"card__completeImg"} src={CompleteImg} alt="Complete Img"/>
        }
      </div>
      <div className={"card__bot_wrapper"}>
        {card.complete === false ? 
        <>
        <div className={"card__activityArea_wrapper"}>
          <div className={`card__dot ${card.activityArea.toLowerCase()}`}/>
          <span className={"card__activityArea_text"}>{card.activityArea}</span>
        </div>
        <Button text={"edit"} btnName={"edit"} onClick={handleEditBtn}/>
        </>
        :
        null}
      </div>
    </div>
  );
}

export default Card;
