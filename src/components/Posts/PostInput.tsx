import { FaceSmileIcon } from "@heroicons/react/24/outline";

function PostInput() {
  return (
    <form className="flex items-center p-4">
      <FaceSmileIcon className="h-7" />
      <input
        className="border-none flex-1 focus:ring-0"
        type="text"
        placeholder="Write a comment"
      />
      <button className="text-blue-400 font-bold">Post</button>
    </form>
  );
}

export default PostInput;
