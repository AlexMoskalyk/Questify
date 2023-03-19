import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cards:[],
    isPending:false,
    isError:null,
}

const cardsSlice = createSlice({
    name:'cards',
    initialState,
    reducers: {
        getCards:(state,action)=>state.cards=action.payload,
        addCard(state,action){
            state.cards.push(action.payload);
        },
        deleteCard: (state,action)=> {
            const arrayAfterDelete = state.cards.filter((card)=>card.id !== action.payload)
            return {
                ...state,
                "cards":arrayAfterDelete
            }
        },
        editCard: (state,action)=>{
            const changedCard=state.cards.find(card=>card.id === action.payload.id);
            changedCard.text=action.payload.text;
            changedCard.difficulty=action.payload.difficulty;
            changedCard.activityArea=action.payload.activityArea;
        },
        toggleComplete: (state, action) => {
            const toggledCard = state.cards.find(card => card.id === action.payload);
            toggledCard.complete = !toggledCard.complete
        },
        isPending:(state,action)=>state.isPending = action.payload,
        isError:(state,action)=>state.isError=action.payload,
    }
})

export const {getCards, addCard, deleteCard, editCard,toggleComplete,isPending,isError}=cardsSlice.actions;
export default cardsSlice.reducer; 
