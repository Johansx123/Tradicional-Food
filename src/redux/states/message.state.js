import { createSlice } from "@reduxjs/toolkit"

export const MessageTypes = {
    success: 'success',
    error: 'error',
  }

export const MessageEmptyState = {
    message: '',
    type: MessageTypes.success
}
export const messageSlice = createSlice( {
    name: 'message',
    initialState: MessageEmptyState,
    reducers: {
        setMessage: (state, action) => action.payload
    }
})
export const { setMessage } = messageSlice.actions