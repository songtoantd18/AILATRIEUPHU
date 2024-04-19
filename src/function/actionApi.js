import axios from "axios";

async function apiRequest(url, data) {
  if (data === null) {
    return await getApi(url);
  } else {
    return await postApi(url, data);
  }
}

async function getApi(url) {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw error;
  }
}

async function postApi(url, data) {
  try {
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    throw error;
  }
}

export { getApi, postApi };
