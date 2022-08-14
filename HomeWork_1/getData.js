import axios from "axios";

const getUsers = (userId) => {
  return new Promise(async (res, rej) => {
    const { data: user } = await axios(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    res(user);
  });
};

const getPosts = (userId) => {
  return new Promise(async (res, rej) => {
    const { data: post } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    res(post);
  });
};

const getData = async (userId) => {
    try {
        const users = await getUsers(userId);
        const posts = await getPosts(userId);

        users.posts=posts;
        return users;

      } catch (e) {
        console.log(e);
      }
};

export default getData;
