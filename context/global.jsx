import * as React from "react";

export let ContextOne = React.createContext();

export let initialState = {
    load: true,
};

export let reducer = (state, action) => {
    switch (action.type) {
        case "reset":
            return initialState;
        case "stop-load":
            return { ...state, load: false };
        case "start-load":
            return { ...state, load: true };
    }
};

export function ContextOneProvider(props) {
    let [state, dispatch] = React.useReducer(reducer, initialState);
    let value = { state, dispatch };
    return (
        <ContextOne.Provider value={value}>{props.children}</ContextOne.Provider>
    );
}

export let ContextOneConsumer = ContextOne.Consumer;

const Info = () => {
    return "this file found to controller general state"
}
export default Info;