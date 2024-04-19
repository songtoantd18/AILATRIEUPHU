import axios from "axios";

const handleLogin = async (username, password, url) => {
  try {
    const response = await axios.get(url);
    const userData = response.data;
    const matchedUser = userData.find(
      (user) => user.user === username && user.password === password
    );
    if (matchedUser) {
      return matchedUser.id;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

export default handleLogin;
