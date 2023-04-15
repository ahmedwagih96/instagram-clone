import { PostType } from "@/typings";
import PostHeader from "./PostHeader";
import PostButtons from "./PostButtons";
import PostInput from "./PostInput";
type Props = {
  post: PostType;
};

function Post({ post }: Props) {
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* POST HEADER */}
      <PostHeader post={post} />

      {/* POST IMAGE */}
      <img src={post.img} alt="post image" className="object-cover w-full" />

      {/* Post Buttons */}
      <PostButtons />

      {/* POST COMMENTS */}
      <p className="p-5 truncate">
        <span className="font-bold">{post.username}</span> {post.caption}
      </p>

      {/* POST INPUT */}
      <PostInput />
    </div>
  );
}

export default Post;
