import { FakeUsersType } from "@/typings";

type Props = {
  story: FakeUsersType;
};

function Story({ story }: Props) {
  return (
    <div>
      <img
        src={story.img}
        alt=""
        className="h-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out"
      />
      <p className="text-xs w-14 truncate">{story.username}</p>
    </div>
  );
}

export default Story;
