"use client";
import { FakeUsersType } from "@/typings";
import useFakeUsers from "@/hooks/useFakeUsers";
import Story from "./Story";
function Stories() {
  const storyUsers: FakeUsersType[] = useFakeUsers(20);
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-lg scrollbar-none max-w-6xl mx-auto">
      {storyUsers.map((story) => (
        <Story key={story.id} story={story} />
      ))}
    </div>
  );
}

export default Stories;
