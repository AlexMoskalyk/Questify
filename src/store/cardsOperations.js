import axios from 'axios';
import {getCards, addCard, deleteCard, editCard,toggleComplete,isPending,isError} from './cardsSlice';

const BASE_URL="in future release";

const fetchCardsOperation = ()=> async dispatch =>{
    dispatch(isPending(true));
    try {
        const response = await axios.get(`${BASE_URL}cards.json`);
        dispatch(getCards(response.data));
    } catch (error) {
        dispatch(isError(error.message));
    }
    dispatch(isPending(false));
}

const addCardOperation = card =>async dispatch=>{
    dispatch(isPending(true));
    try {
     await axios.post(`${BASE_URL}cards.json`, card);
     dispatch(addCard(card));
    } catch (error) {
        dispatch(isError(error.message));
    }
    dispatch(isPending(false));
}

const deleteCardOperation = cardId => async dispatch => {
    dispatch(isPending(true));
    try {
       await axios.delete(`${BASE_URL}cards/${cardId}.json`);
       dispatch(deleteCard(cardId));
    } catch (error) {
     dispatch(isError(error.message));
    }
    dispatch(isPending(false));
}

const editCardOperation = (cardId, card) => async dispatch => {
    dispatch(isPending(true));

    try {
        const response = await axios.patch(`${BASE_URL}cards/${cardId}.json`, card);
        dispatch(editCard(response.data))
    } catch (error) {
        
    }

    dispatch(isPending(false));
}


 
export {fetchCardsOperation,addCardOperation,deleteCardOperation,editCardOperation};
