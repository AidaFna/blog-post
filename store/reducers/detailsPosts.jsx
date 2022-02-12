const initialState = [];

export const detailsPosts = (state = initialState, action) => {
  if (action.type === "SET_DETAILS_POSTS") {
    if (action.payload) return action.payload;
  }
  return state;
};

export const published = (state = initialState, action) => {
  if (action.type === "SET_PUBLISHED_POSTS") {
    if (action.payload) return action.payload;
  }
  return state;
};
export const created = (state = initialState, action) => {
  if (action.type === "SET_CREATED_POSTS") {
    if (action.payload) return action.payload;
  }
  return state;
};
export const updated = (state = initialState, action) => {
  if (action.type === "SET_UPDATED_POSTS") {
    if (action.payload) return action.payload;
  }
  return state;
};
