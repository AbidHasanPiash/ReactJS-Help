import React, { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  return (
    <nav>
      <button
          className="md:hidden flex flex-col h-6 w-12 justify-center items-center group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${hamburgerLine} ${
              isOpen
                ? "rotate-45 translate-y-1.5 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${hamburgerLine} ${
              isOpen
                ? "-rotate-45 -translate-y-1.5 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
        </button>
    </nav>
  );
}
