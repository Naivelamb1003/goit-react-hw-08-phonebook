const getIsAuthenticated = (state) => {
  return state.auth.isAuthenticated;
};

const getUsername = (state) => {
  return state.auth.user.name;
};

const authSelectors = {
  getIsAuthenticated,
  getUsername,
};
export default authSelectors;
