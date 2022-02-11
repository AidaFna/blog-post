import axios from "axios";

export const fetchPosts = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://limitless-forest-49003.herokuapp.com/posts")
        .then(({ data }) => {
          // console.log(data, "actions");
          dispatch(setPosts(data));

          resolve(data);
        })
        .catch((err) => {
          console.log(err, "err actions");
          reject(err);
        });
    });
  };
};

export const setPosts = (payload) => {
  return {
    type: "SET_LIST_POSTS",
    payload,
  };
};
