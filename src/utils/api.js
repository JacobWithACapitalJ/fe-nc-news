import axios from "axios";

const baseURL = `https://jacobs-nc-news.herokuapp.com/api/`;
export const getArticles = async (id, topic = null, filter = null) => {
  let url = "";
  if (id === undefined) {
    url = `${baseURL}articles`;
  } else if (topic !== null && filter == null) {
    url = `${baseURL}articles?topic=${topic.slice(1)}`;
  } else if (topic !== null && filter !== null) {
    url = `${baseURL}articles?topic=${topic.slice(1)}&sort_by=${filter}`;
  } else if (id !== undefined && topic === null && filter === null) {
    url = `${baseURL}articles/${id}`;
  } else if (topic === null && filter !== null) {
    url = `${baseURL}articles?sort_by=${filter}`;
  }
  console.log(url);
  const { data } = await axios.get(`${url}`);

  return data;
};

export const getTopics = async () => {
  const { data } = await axios.get(`${baseURL}topics`);

  return data;
};

export const getComments = async id => {
  const { data } = await axios.get(`${baseURL}articles/${id}/comments`);

  return data;
};

export const postComment = async (id, comment, token) => {
  const { author, body } = comment;

  const res = await axios
    .post(`${baseURL}articles/${id}/newcomment`, {
      // username: author,
      body,
      token
    })
    .then(res => {
      return res;
    })
    .catch(err => {
      return { Error: 401 };
    });

  return res;
};

export const authLogin = async (username, password) => {
  const res = await axios({
    method: "post",
    url: `${baseURL}login`,
    headers: { "Set-Cookie": ["type=token", "language=javascript"] },
    data: { username, password }
  }).catch(err => {
    alert("Error logging in please try again");
  });

  if (res.status === 200) {
    console.log("logged in");
    return res;
  } else {
    const error = new Error(res.error);
    throw error;
  }
};

export const incrementVote = async (inc_votes, id, section) => {
  const res = await axios.patch(`${baseURL}${section}/${id}`, {
    inc_votes
  });
};
