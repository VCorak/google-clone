import React, { createContext, useContext, useReducer } from "react";

//Preparing the data layer
export const StateContext = createContext();

//High order component, state context & children (in this case child is "App" component from index.js)
// InitialState means what that data layer looks like when app is loaded
//Reducer listens to changes maded in data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//This is a hook which allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);
