const initialState = [];

const listPosts = (state = initialState, action) => {
  if (action.type == "SET_LIST_POSTS") {
    if (Array.isArray(action.payload)) return action.payload;
  }
  return state;
};

export default listPosts;
