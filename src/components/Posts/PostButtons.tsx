import {
    HeartIcon,
    ChatBubbleLeftIcon,
    BookmarkIcon,
  } from "@heroicons/react/24/outline";

function PostButtons() {
  return (
    <div className="flex justify-between px-4 pt-4">
    <div className="flex space-x-4">
      <HeartIcon className="btn" />
      <ChatBubbleLeftIcon className="btn" />
    </div>
    <BookmarkIcon className="btn"/>
  </div>
  )
}

export default PostButtons