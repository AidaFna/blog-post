import axios from "axios";
import swal from "sweetalert";

export const fetchDelete = (id) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`https://limitless-forest-49003.herokuapp.com/posts/${id}`)
        .then(({ data }) => {
          console.log(data, "create");
          swal("SUCCESS", "Post has been removed!", "success", {
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

export const setDelete = (payload) => {
  return {
    type: "DELETE_POSTS",
    payload,
  };
};
