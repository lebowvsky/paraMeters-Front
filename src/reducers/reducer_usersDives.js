const initState = {};

const userDivesReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_DIVE":
      return {...action.payload};
    default:
      return state;
  }
};

export default userDivesReducer;
