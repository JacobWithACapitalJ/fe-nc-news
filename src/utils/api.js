import axios from "axios";

const baseURL = `https://jacobs-nc-news.herokuapp.com/api/`;
export const getArticles = async () => {
  const { data } = await axios.get(`${baseURL}articles`);
  console.log(data);
  return data;
};
