import axios from 'axios';

export const request = async (url, options) => {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    console.error(error);
  }
}
