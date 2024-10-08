import { createSlice } from "@reduxjs/toolkit"

const initialState = ""

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    editFilter(state, action) {
      state = action.payload
      return state
    },
  },
})

export const { editFilter } = filterSlice.actions
export default filterSlice.reducer
