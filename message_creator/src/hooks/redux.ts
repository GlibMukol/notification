import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const  useAppSelector: TypedUseSelectorHook<RootState> = useSelector;