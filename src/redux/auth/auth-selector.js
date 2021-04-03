const getIsAuthenticated = (state) => {
  return Boolean(state.auth.token);
};

const getUsername = (state) => {
  return state.auth.user.name;
};

const authSelectors = {
  getIsAuthenticated,
  getUsername,
};
export default authSelectors;
