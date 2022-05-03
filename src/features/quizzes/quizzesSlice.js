import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdForTopic } from "../topics/topicsSlice";
//create slice for quizzes
const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id, name, topicId, cardIds } = action.payload;
            state.quizzes[id] = {
                id: id,
                name: name,
                topicId: topicId,
                cardIds: cardIds
            }
        }
    },

});
//run when create new Quiz, after that we get the quiz'id and run addQuizIdForTopic which mean it will take the quiz id and add it to the topics slice
export const addQuizForTopicId = quiz => {
    const { topicId, id } = quiz;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuizIdForTopic({ topicId: topicId, quizId: id }))
    }
}
export default quizzesSlice.reducer;
export const { addQuiz } = quizzesSlice.actions;

//selector
export const selectQuizzes = state => state.quizzes.quizzes;

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
