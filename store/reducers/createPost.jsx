const initialState = [];

const createPosts = (state = initialState, action) => {
  if (action.type === "SET_CREATE_POSTS") {
    if (action.payload) return action.payload;
  }
  return state;
};

export default createPosts;
