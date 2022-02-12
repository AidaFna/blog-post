import axios from "axios";

export const fetchDetails = (id) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://limitless-forest-49003.herokuapp.com/posts/${id}`)
        .then(({ data }) => {
          console.log(data, "details");
          dispatch(setDetails(data));
          dispatch(setPublished(data.published_at));
          dispatch(setCreated(data.created_at));
          dispatch(setUpdated(data.updated_at));
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
export const setPublished = (payload) => {
  return {
    type: "SET_PUBLISHED_POSTS",
    payload,
  };
};

export const setCreated = (payload) => {
  return {
    type: "SET_CREATED_POSTS",
    payload,
  };
};

export const setUpdated = (payload) => {
  return {
    type: "SET_UPDATED_POSTS",
    payload,
  };
};
