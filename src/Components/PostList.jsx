import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/post-list-store";

export default function PostList() {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.map((post) => (
        <Post post={post} key={post.userId}></Post>
      ))}
    </>
  );
}
