import { fetchPosts, setPosts } from "./fetchPosts";
import { fetchDetails, setDetails, setContent, setTitle } from "./fetchDetails";
import { fetchCreate, setCreate } from "./fetchCreate";
import { fetchDelete, setDelete } from "./fetchDelete";
import { fetchUpdate, setUpdate } from "./fetchUpdate";

const allStore = {
  //GET POSTS
  fetchPosts,
  setPosts,
  // GET DETAILS
  fetchDetails,
  setDetails,
  setTitle,
  setContent,
  // POST POST
  fetchCreate,
  setCreate,
  // DELETE
  fetchDelete,
  setDelete,
  // UPDATE
  fetchUpdate,
  setUpdate,
};
export default allStore;
