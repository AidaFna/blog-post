import { combineReducers } from "redux";
import listPosts from "./listPosts";
import { detailsPosts, published, created, updated } from "./detailsPosts";
import createPosts from "./createPost";

const rootReducers = combineReducers({
  listPosts,
  detailsPosts,
  published,
  created,
  updated,
  createPosts,
});
export default rootReducers;
