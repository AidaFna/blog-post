const initialState = [];

const detailsPosts = (state = initialState, action) => {
  if (action.type === "SET_DETAILS_POSTS") {
    if (action.payload) return action.payload;
  }
  return state;
};

export default detailsPosts;
