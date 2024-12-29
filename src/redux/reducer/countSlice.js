import {createSlice, configureStore} from '@reduxjs/toolkit'
const couterSlice=createSlice({
    name:'counter',
    initialState: {value: 0},
    reducers: {
        incremented: state => {
          state.value += 1
        },
        decremented: state => {
          state.value -= 1
        }
      },
})
//createSlice automatically creates "action creators" for us.
// Action creators are simply object factories that dispatch specific actions, for consistency. 
//Instead of calling something like store.dispatch({ type: 'counter/incremented', payload: 1 }), 
//we can simply call dispatch(increment) thanks to RTK.
const store=configureStore({reducer:counterSlice.reducer})