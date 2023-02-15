import React, { createContext, useContext} from "react";
import  type {  NotificationsService } from "../../logger/machine";
import type {  SnackbarService } from "../../machines/snackbarMachine";

export type SnackbarContextType = SnackbarService// & {show: (payload: SnackbarContext) =>State<SnackbarContext>}
export const SnackbarProivderContext = createContext<SnackbarContextType>({} as SnackbarContextType);

 
export const useSnackbar=()=>useContext(SnackbarProivderContext);

export default SnackbarProivderContext.Consumer;