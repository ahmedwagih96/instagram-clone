import React from "react";

type Props = {};

function MiniProfile({}: Props) {
  return (
    <div className="flex items-center justify-between mt-[14px] ml-[10px]">
      <img
        src="https://scontent.faly1-2.fna.fbcdn.net/v/t1.6435-1/123137029_10222035349891264_4858848412815763603_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHlfLS3-pEsCGykLCIzaWGJ2HJ-G-4AcRrYcn4b7gBxGi8YsDG8hp63dihNHGoezmE&_nc_ohc=wIpP77flELIAX9HVEjE&_nc_ht=scontent.faly1-2.fna&oh=00_AfCq91PfFR7mkmRLEvyNQnHZ9oYd7Xsykzmw_IP1sMQv-w&oe=64622DB6"
        alt="user-profile"
        className="cursor-pointer h-16 border p-[2px] rounded-full "
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">Ahmed Alaa</h2>
        <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  );
}

export default MiniProfile;
