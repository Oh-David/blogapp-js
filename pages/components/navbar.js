import Link from "next/link";
import React from "react";
import "../../configureAmplify";

const Navbar = () => {
  // const [signedUser, setSignedUser] = useState(false);

  return (
    <nav className="flex justify-center pt-3 pb-3 space-x-4 boder-b bg-cyan-500 border-gray-300">
      {[
        ["Home", "/"],
        ["Create Post", "/create-post"],
        ["Profile", "/profile"],
      ].map(([title, url], index) => (
        <Link href={url} key={index}>
          <a className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slage-100 hover:text-slate-900">
            {title}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
