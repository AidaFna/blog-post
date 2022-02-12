import { combineReducers } from "redux";
import listPosts from "./listPosts";
import { detailsPosts, titlePosts, contentPosts } from "./detailsPosts";
import createPosts from "./createPost";

const rootReducers = combineReducers({
  listPosts,
  detailsPosts,
  titlePosts,
  contentPosts,
  createPosts,
});
export default rootReducers;
