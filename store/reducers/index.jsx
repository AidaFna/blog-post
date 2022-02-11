import { combineReducers } from "redux";
import listPosts from "./listPosts";
import detailsPosts from "./detailsPosts";
import createPosts from "./createPost";

const rootReducers = combineReducers({
  listPosts,
  detailsPosts,
  createPosts,
});
export default rootReducers;
