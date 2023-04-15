import Image from "next/image";

function Logo() {
  return (
    <div>
      <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy57NIobf2Tszx0d2mNr7UwWcsUI71jgsp-Q&usqp=CAU"
          layout="fill"
          className="object-contain"
          alt="Instagram Logo"
        />
      </div>
      <div className="h-10 w-10 relative lg:hidden cursor-pointer">
        <Image
          alt="Instagram Logo"
          src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
          layout="fill"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default Logo;
