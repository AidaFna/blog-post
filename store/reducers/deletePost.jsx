const initialState = [];

const deletePosts = (state = initialState, action) => {
  if (action.type === "DELETE_POSTS") {
    if (action.payload) return action.payload;
  }
  return state;
};

export default deletePosts;
