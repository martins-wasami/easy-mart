import { createStore, type StateSchema } from "@/app/store";
import type {ReducersMapObject} from "@reduxjs/toolkit";
import type { ReactNode } from "react";
import { Provider } from "react-redux";

interface StoreProviderProps {
    children : ReactNode;
      initialState?: StateSchema;
    // asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {children, initialState} = props
    const store = createStore(initialState)

    return <Provider store={store}>
     {children}
    </Provider>
}