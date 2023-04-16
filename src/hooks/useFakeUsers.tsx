"use client";
import { useEffect, useState } from "react";
import minifaker from "minifaker";
import "minifaker/locales/en";
import { FakeUsersType } from "@/typings";

function useStoryUsers(numberOfStories: number) {
  const [fakeUsers, setFakeUsers] = useState<FakeUsersType[]>([]);
  useEffect(() => {
    const users = minifaker.array(numberOfStories, (i) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      jobTitle: minifaker.jobTitle(),
      id: i,
    }));
    setFakeUsers(users);
  }, []);
  return fakeUsers;
}

export default useStoryUsers;
