import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  open: false,
  isConfirm: false,
  message: ''
}

const modalSlice = createSlice({
  name: 'modal',
  initialState: INITIAL_STATE,
  reducers: {
    toggleModal: (state) => {
      return {
        ...state,
        open: !state.open
      }
    },
    setIsConfirm: (state, action) => {
      return {
        ...state,
        isConfirm: action.payload
      }
    },
    setMessage: (state, action) => {
      return {
        ...state,
        message: action.payload
      }
    },
  }
})

export const {
  toggleModal, setIsConfirm, setMessage
} = modalSlice.actions;

export default modalSlice.reducer;