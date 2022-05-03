import { createSlice } from "@reduxjs/toolkit";

//create slice for quizzes
const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id, name, topicId, cardIds } = action.payload;
            state[id] = {
                id: id,
                name: name,
                topicId: topicId,
                cardIds: cardIds
            }
        }
    },

});

export default quizzesSlice.reducer;
export const { addQuiz } = quizzesSlice.actions;

const quizzesStateExample = {
    quizzes: {
        '123': {
            id: '123',
            name: 'quiz name',
            topicId: '456',
            cardIds: ['1', '2', '3']
        }
    }
};

const actionExample = {
    id: '123',
    name: 'quiz name',
    topicId: '456',
    cardIds: ['1', '2', '3']
};
