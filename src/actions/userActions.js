export const changeFirstname = (firstname) => {
  return {
    type: "CHANGE_FIRSTNAME",
    firstname: firstname,
  };
};

export const changeLastname = (lastname) => {
  return {
    type: "CHANGE_LASTNAME",
    lastname: lastname,
  };
};

export const changeEmail = (email) => {
  return {
    type: "CHANGE_EMAIL",
    email: email,
  };
};

export const changeUserId = (userId) => {
  return {
    type: "CHANGE_USER_ID",
    userId: userId,
  };
};
