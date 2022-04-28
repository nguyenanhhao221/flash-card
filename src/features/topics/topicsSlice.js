import { createSlice } from "@reduxjs/toolkit"

//create slice for topics
const options = {
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon,
                quizIds: []
            }
        },
    },
};
const topicsSlice = createSlice(options);
export default topicsSlice.reducer;
export const { addTopic } = topicsSlice.actions;
//selector for topics inside the state
export const selectTopics = state => state.topics.topics;