import { createSlice } from "@reduxjs/toolkit"

const initialState = ""

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    changeNotification(state, action) {
      state = action.payload
      return state
    },
    deleteNotification(state){
      state = ''
      return state
    }
  },
})

export const { changeNotification, deleteNotification } = notificationSlice.actions

export const setNotification = (content, time) => {
  return async (dispatch) => {
    dispatch(changeNotification(content))
    setTimeout(() => {
      dispatch(deleteNotification())
    }, time)
  }
}

export default notificationSlice.reducer
