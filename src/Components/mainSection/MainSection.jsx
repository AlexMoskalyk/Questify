import React, { useState } from "react";
import Button from "../button/Button";
import CardList from "../cardList/CardList";
import CreateEditCard from "../createEditCard/CreateEditCard";
import Modal from "../modal/Modal";
import styles from "./MainSections.module.scss";
import { getAllCards } from "../../store/cardsSelectors";
import { useSelector } from "react-redux";

function MainSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createOrEditCard, setCreateOrEditCard] = useState("");
  const [certainCard, setCertainCard] = useState("");
  const allCards = useSelector(getAllCards);

  const toggleCreateOrEditCard = (value) => {
    setCreateOrEditCard(value);
    toggleModal();
  };

  const handleCertainCardData = (data) => {
    setCertainCard(data);
  };

  const toggleModal = () => setIsModalOpen((state) => !state);

  return (
    <div className={styles.mainSection__container}>
      <CardList
        allCards={allCards}
        toggleCreateOrEditCard={toggleCreateOrEditCard}
        toggleModal={toggleModal}
        handleCertainCardData={handleCertainCardData}
      />
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <CreateEditCard
            closeModal={toggleModal}
            mode={createOrEditCard}
            certainCard={certainCard}
          />
        </Modal>
      )}
      <Button
        onClick={() => toggleCreateOrEditCard("create")}
        type={"button"}
        btnName={"add"}
        icon={"plus"}
      />
    </div>
  );
}

export default MainSection;
