const initState = {};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_FIRSTNAME":
      return { ...state, firstname: action.firstname };
    case "CHANGE_LASTNAME":
      return { ...state, lastname: action.lastname };
    case "CHANGE_EMAIL":
      return { ...state, email: action.email };
    case "CHANGE_USER_ID":
      return { ...state, userId: action.userId };
    default:
      return state;
  }
};

export default userReducer;
