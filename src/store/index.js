import {configureStore, createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice(
    {
        name: 'counter',
        initialState: {counter:0},
        reducers: {
            incrementa(state, action) {
                const val = action.by ? action.by : 1;
                state.counter+=val;
            },
            decrementa(state){
                state.counter--;
            }
        }
    }
);

//export default counterSlice;
export const counterActions =  counterSlice.actions;

export const store = configureStore({
    reducer: { counterKey: counterSlice.reducer }
});

export const store1 = configureStore({
    reducer: { counterKey: counterSlice.reducer }
});

/*
const counterReducer = (state= {counter:0}, action) => {

    let counter = state.counter;

    if(action.type === "incrementaBy"){
        counter+=action.by;
    }

    if(action.type === "incrementa"){
        const val = action.by ? action.by : 1;
        counter+=val;
    }

    if(action.type === "decrementa"){
        counter--;
    }

    return {
        counter
    }
}
*/
//export const counterStore = createStore(counterReducer);

