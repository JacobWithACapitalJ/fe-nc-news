import axios from "axios";

const baseURL = `https://jacobs-nc-news.herokuapp.com/api/`;
export const getArticles = async (id, topic = null) => {
  let url = "";
  if (id === undefined) {
    url = `${baseURL}articles`;
  } else if (topic !== null) {
    url = `${baseURL}articles?topic=${topic.slice(1)}`;
  } else if (id !== undefined && topic === null) {
    url = `${baseURL}articles/${id}`;
  }
  const { data } = await axios.get(`${url}`);

  return data;
};

export const getTopics = async () => {
  const { data } = await axios.get(`${baseURL}topics`);
  console.log(data);
  return data;
};

export const getComments = async id => {
  const { data } = await axios.get(`${baseURL}articles/${id}/comments`);
  console.log(data);
  return data;
};
