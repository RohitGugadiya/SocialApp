import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};

export const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (currPostList, action) => {
  return currPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to mumbai",
    body: "hi friends i am going on vacation",
    reactions: 1,
    userId: "user-1",
    tags: ["Vacation", "Mumbai"],
  },
  {
    id: "8",
    title: "New role",
    body: "Starting new position as software developer at microsoft",
    reactions: 6,
    userId: "user-2",
    tags: ["Microsoft", "New-Role"],
  },
];

export default PostListProvider;
