import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  workflowData: [],
};

const setWorkflow = (state, action) => {
  return {
    ...state,
    workflowData: [...state.workflowData, action.payload],
  };
}
// export const fetchToDoListFromSlice = createAsyncThunk(
//     "todo/fetchList",
//     async (name, { rejectWithValue }) => {
//       try {
//         console.log('name...... ', name)
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
//     (data) => data.json()
//     )
//         return res;
//       } catch (err) {
//         return rejectWithValue([], err);
//       }
//     }
//   );

const workflowReducer = createSlice({
    name: 'workflow',
    initialState: initialState,
    reducers: {
      registerSetWorkflow(state, action) {
        return setWorkflow(state, action)
      }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(fetchToDoListFromSlice.fulfilled, (state, action) => {
    //           state.todoList.push(action.payload[0].title)
    //     })
    // }
  })

export default workflowReducer.reducer
export const { registerSetWorkflow } = workflowReducer.actions
