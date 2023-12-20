const TokenParser = () => {
  const tokenObject = JSON.parse(localStorage.getItem("user-token"));
  const getToken = () => {
    if (tokenObject && tokenObject.token) {
      return tokenObject.token;
    } else {
      return null;
    }
  };
  const getUserName = () => {
    if (tokenObject && tokenObject.username) {
      return tokenObject.username;
    } else {
      return null;
    }
  };
  return { getToken, getUserName };
};

export default TokenParser;
