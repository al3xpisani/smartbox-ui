import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  workflowData: [],
  activeIdWorkflow: {
    id: '',
    name: ''
  }
};

const setWorkflow = (state, action) => {
  return {
    ...state,
    workflowData: [...state.workflowData, action.payload],
  };
}
const deleteWorkflow = (state, action) => {
  const updatedRecords = state.workflowData.map((items) => {
    const filteredData = items.data.data.filter(
      (innerRecords) => innerRecords.id !== action.payload.data.data[0][0].deletedItem.id
    );
    return { data: { data: filteredData } };
  });

  return {
    ...state,
    workflowData: updatedRecords,
  };
};
const loadWorkflow = (state, action) => {
  return {
    ...state,
    activeIdWorkflow: {id: action.payload.data.data[0].id, name: action.payload.data.data[0].name}
  }
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
      },
      deleteSetWorkflow(state, action) {
        return deleteWorkflow(state, action)
      },
      loadActiveWorkflow(state, action) {
        return loadWorkflow(state, action)
      }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(fetchToDoListFromSlice.fulfilled, (state, action) => {
    //           state.todoList.push(action.payload[0].title)
    //     })
    // }
  })

export default workflowReducer.reducer
export const { registerSetWorkflow, deleteSetWorkflow, loadActiveWorkflow } = workflowReducer.actions
