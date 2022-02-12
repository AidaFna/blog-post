import axios from "axios";

export const fetchDetails = (id) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://limitless-forest-49003.herokuapp.com/posts/${id}`)
        .then(({ data }) => {
          console.log(data, "details");
          dispatch(setDetails(data));
          dispatch(setTitle(data.title));
          dispatch(setContent(data.content));
          resolve(data);
        })
        .catch((err) => {
          console.log(err, "err actions");
          reject(err);
        });
    });
  };
};

export const setDetails = (payload) => {
  return {
    type: "SET_DETAILS_POSTS",
    payload,
  };
};
export const setTitle = (payload) => {
  return {
    type: "SET_TITLE_POSTS",
    payload,
  };
};

export const setContent = (payload) => {
  return {
    type: "SET_CONTENT_POSTS",
    payload,
  };
};
