"use client";
import useFakeUsers from "@/hooks/useFakeUsers";
import { FakeUsersType } from "@/typings";
import Suggestion from "./Suggestion";

function Suggestions() {
  const suggestionUsers: FakeUsersType[] = useFakeUsers(7);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between mb-5 text-sm">
        <h3 className="font-bold text-gray-400">Suggestion for you</h3>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>
      {suggestionUsers.map((suggestion: FakeUsersType) => (
        <Suggestion key={suggestion.id} suggestion={suggestion} />
      ))}
    </div>
  );
}

export default Suggestions;
