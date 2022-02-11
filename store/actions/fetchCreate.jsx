import axios from "axios";
import swal from "sweetalert";

export const fetchCreate = (title, content) => {
  const body = {
    title,
    content,
  };
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`https://limitless-forest-49003.herokuapp.com/posts`, body)
        .then(({ data }) => {
          console.log(data, "create");
          swal("SUCCESS", "Post has been uploaded!", "success", {
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

export const setCreate = (payload) => {
  return {
    type: "SET_CREATE_POSTS",
    payload,
  };
};
