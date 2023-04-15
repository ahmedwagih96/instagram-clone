"use client";
import { useEffect, useState } from "react";
import minifaker from "minifaker";
import "minifaker/locales/en";
import { StoryType } from "@/typings";

function useStoryUsers() {
  const [storyUsers, setStoryUsers] = useState<StoryType[]>([]);
  useEffect(() => {
    const fakeUsers = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setStoryUsers(fakeUsers);
  }, []);
  return storyUsers;
}

export default useStoryUsers;
