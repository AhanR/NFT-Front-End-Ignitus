import {createSlice} from '@reduxjs/toolkit'

const catalouge = createSlice({
    name: "catalouge",
    initialState : [
        {
            id: "1",
            url: "https://source.unsplash.com/random",
            price: 10,
            desc: "An amazing product"
        },
        {
            id: "2",
            url: "https://source.unsplash.com/random",
            price: 12,
            desc: "An amazing product"
        }
    ],
    reducers: {
        removeFromCatalouge(state, action){
            for(let x in action.payload) {
                state = state.filter(y=>y.id!=x);
            }
        }
    }
})

export const { removeFromCatalouge } = catalouge.actions
export default catalouge.reducer