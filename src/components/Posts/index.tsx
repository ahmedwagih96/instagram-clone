import { PostType } from "@/typings";
import React from "react";
import Post from "./Post";

type Props = {};

function Posts({}: Props) {
  const posts: PostType[] = [
    {
      id: 1,
      userImage:
        "https://scontent.faly1-2.fna.fbcdn.net/v/t1.6435-1/123137029_10222035349891264_4858848412815763603_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHlfLS3-pEsCGykLCIzaWGJ2HJ-G-4AcRrYcn4b7gBxGi8YsDG8hp63dihNHGoezmE&_nc_ohc=wIpP77flELIAX9HVEjE&_nc_ht=scontent.faly1-2.fna&oh=00_AfCq91PfFR7mkmRLEvyNQnHZ9oYd7Xsykzmw_IP1sMQv-w&oe=64622DB6",
      img: "https://plus.unsplash.com/premium_photo-1673264933445-0112f3cdcb2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      caption: "Nice Picture",
      username: "Ahmed Alaa",
    },
    {
      id: 2,
      userImage:
        "https://scontent.faly1-2.fna.fbcdn.net/v/t1.6435-1/123137029_10222035349891264_4858848412815763603_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHlfLS3-pEsCGykLCIzaWGJ2HJ-G-4AcRrYcn4b7gBxGi8YsDG8hp63dihNHGoezmE&_nc_ohc=wIpP77flELIAX9HVEjE&_nc_ht=scontent.faly1-2.fna&oh=00_AfCq91PfFR7mkmRLEvyNQnHZ9oYd7Xsykzmw_IP1sMQv-w&oe=64622DB6",
      img: "https://plus.unsplash.com/premium_photo-1673264933445-0112f3cdcb2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      caption: "Nice Picture",
      username: "Ahmed Alaa",
    },
    {
      id: 3,
      userImage:
        "https://scontent.faly1-2.fna.fbcdn.net/v/t1.6435-1/123137029_10222035349891264_4858848412815763603_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHlfLS3-pEsCGykLCIzaWGJ2HJ-G-4AcRrYcn4b7gBxGi8YsDG8hp63dihNHGoezmE&_nc_ohc=wIpP77flELIAX9HVEjE&_nc_ht=scontent.faly1-2.fna&oh=00_AfCq91PfFR7mkmRLEvyNQnHZ9oYd7Xsykzmw_IP1sMQv-w&oe=64622DB6",
      img: "https://plus.unsplash.com/premium_photo-1673264933445-0112f3cdcb2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      caption: "Nice Picture",
      username: "Ahmed Alaa",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
