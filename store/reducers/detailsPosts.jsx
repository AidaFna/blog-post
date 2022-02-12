const initialState = [];

export const detailsPosts = (state = initialState, action) => {
  if (action.type === "SET_DETAILS_POSTS") {
    if (action.payload) return action.payload;
  }
  return state;
};

export const titlePosts = (state = initialState, action) => {
  if (action.type === "SET_TITLE_POSTS") {
    if (action.payload) return action.payload;
  }
  return state;
};
export const contentPosts = (state = initialState, action) => {
  if (action.type === "SET_TITLE_POSTS") {
    if (action.payload) return action.payload;
  }
  return state;
};
