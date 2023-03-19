import React from "react";
import Card from "../card/Card";
import styles from "./CardList.module.scss";

function CardList({ allCards, toggleCreateOrEditCard, handleCertainCardData }) {
  return (
    <div className={styles.cardList__container}>
      {allCards.length > 0
        ? allCards.map((card) => (
            <Card
              card={card}
              key={card.id}
              toggleCreateOrEditCard={toggleCreateOrEditCard}
              handleCertainCardData={handleCertainCardData}
            />
          ))
        : null}
    </div>
  );
}

export default CardList;
