// It is lower case bc it is not a component

export const initialState = {
  // what is the data layer look like, it is an object, it has term and in term is data gonna live
  term: null,
};

export const actionTypes = {
  // when we wanna change data layer we have to dispatch the action,  set anything we enter the term in serach form
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

const reducer = (state, action) => {
  //state is a state of data layer, action is whatever we dispatching into the data layer
  console.log(action); // for debbugging purposes, whenever we do any action it will show what we dispatched

  switch (
    action.type // job of a reducer is to listen any types of action
  ) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        // if we do know what was action, return the new data layer
        ...state, //  return whatever the state currently looks like
        term: action.term, // change the term inside of data layer with whatever action term you dispatched
      };
    default:
      return state; // if we don't know what was the action, return state
  }
};

export default reducer;
