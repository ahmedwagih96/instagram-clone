import { HomeIcon } from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
type Props = {};

function HeaderIcons({}: Props) {
  return (
    <div className="flex gap-4 items-center">
      <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
      <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
      <img src="https://scontent.faly1-2.fna.fbcdn.net/v/t1.6435-1/123137029_10222035349891264_4858848412815763603_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHlfLS3-pEsCGykLCIzaWGJ2HJ-G-4AcRrYcn4b7gBxGi8YsDG8hp63dihNHGoezmE&_nc_ohc=wIpP77flELIAX9HVEjE&_nc_ht=scontent.faly1-2.fna&oh=00_AfCq91PfFR7mkmRLEvyNQnHZ9oYd7Xsykzmw_IP1sMQv-w&oe=64622DB6" alt="user-profile" className="cursor-pointer h-10 rounded-full "/>
    </div>
  );
}

export default HeaderIcons;
