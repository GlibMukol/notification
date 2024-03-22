import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { EMessageType } from "../../consts";


type EMessageKey = keyof typeof EMessageType;

export type TMessage = {
    value: string;
    type: typeof EMessageType[EMessageKey];
    date: number;
}

export interface IMessageList{
    messages: Array<TMessage>
}

const initialState: IMessageList = {
    messages: []
};


export const messagesSlice = createSlice({
    name: 'messageList', 
    initialState,
    reducers: {
        setMessage: (state, action: PayloadAction<TMessage>) => {
            state.messages.push(action.payload)
        } 
    }
});

export const { setMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
   