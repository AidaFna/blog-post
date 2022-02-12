import axios from "axios";
import swal from "sweetalert";

export const fetchUpdate = (title, content, id) => {
  const body = {
    title,
    content,
  };
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .put(`https://limitless-forest-49003.herokuapp.com/posts/${id}`, body)
        .then(({ data }) => {
          console.log(data, "create");
          swal("SUCCESS", "Post has been updated!", "success", {
            button: "Got it!",
          });
          resolve(data);
        })
        .catch((err) => {
          console.log(err, "err actions");
          reject(err);
        });
    });
  };
};

export const setUpdate = (payload) => {
  return {
    type: "UPDATE_POSTS",
    payload,
  };
};
