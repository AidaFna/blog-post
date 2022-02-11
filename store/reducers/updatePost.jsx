const initialState = [];

const UpdatePosts = (state = initialState, action) => {
  if (action.type === "UPDATE_POSTS") {
    if (action.payload) return action.payload;
  }
  return state;
};

export default UpdatePosts;
