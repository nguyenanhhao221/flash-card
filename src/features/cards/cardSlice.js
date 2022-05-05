const { createSlice } = require("@reduxjs/toolkit");

const options = {
    name: 'cards',
    initialState: {
        cards: {

        }
    },
    reducers: {
        addCard: (state, action) => {
            const { id, front, back } = action.payload;
            state.cards[id] = {
                id: id,
                front: front,
                back: back
            }
        }
    }
};
//selector
export const selectCards = state => state.cards.cards;


const cardSlice = createSlice(options);
export default cardSlice.reducer;
export const { addCard } = cardSlice.actions;

