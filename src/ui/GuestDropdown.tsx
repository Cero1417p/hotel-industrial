"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface User {
  name: string;
  image?: string;
}

interface GuestDropdownProps {
  user: User;
  signOutAction: () => void;
}

export default function GuestDropdown({ user, signOutAction }: GuestDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const closeDropdown = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest(".avatar-container")) return;
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", closeDropdown);
    return () => window.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div className="avatar-container flex items-center relative cursor-pointer" onClick={toggleDropdown}>
      <img
        src={
          user.image
            ? user.image
            : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=161616&color=F1F1F1`
        }
        alt={`${user.name} avatar`}
        className="w-10 h-10 rounded-full mr-2.5"
      />
      <span className="cursor-pointer">
        <FontAwesomeIcon icon={faCaretDown} />
      </span>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-300 shadow-md rounded z-10">
          <Link
            href="/account/history"
            className="block px-4 py-2.5 text-gray-900 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            History
          </Link>
          <Link
            href="/account/profile"
            className="block px-4 py-2.5 text-gray-900 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Profile
          </Link>
          <form action={signOutAction}>
            <button
              type="submit"
              className="w-full text-left px-4 py-2.5 text-gray-900 hover:text-red-600 hover:bg-gray-100 transition-colors"
            >
              Logout
            </button>
          </form>
        </div>
      )}
    </div>
  );
}