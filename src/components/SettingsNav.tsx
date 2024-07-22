"use client";
import ChangePasswordSVG from "@/svg-icons/ChangePasswordSVG";
import EmailPrefrencesSVG from "@/svg-icons/EmailPrefrencesSVG";
import LockIcon from "@/svg-icons/LockIcon";
import ProfileSVG from "@/svg-icons/ProfileSVG";
import { SwatchIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SettingsNav = (
  {isProfileSettings = true}: {isProfileSettings?: boolean}
) => {
  const pathname = usePathname();
  const navLinks = isProfileSettings ? [
    {
      href: "/settings/profile/general",
      text: "Profile",
      icon: <ProfileSVG />,
    },
    {
      href: "/settings/profile/password",
      text: "Change Password",
      icon: <ChangePasswordSVG />,
    },
    {
      href: "/allLogs",
      text: "Email Prefrences",
      icon: <EmailPrefrencesSVG />,
    },

  ] : [
    {
      href: "/settings/team/tags",
      text: "Tags",
      icon: <LockIcon />,
    },
    {
      href: "/settings/team/categories",
      text: "Categories",
      icon: <SwatchIcon className="w-6 h-6" />,
    },
  ];
  return (
    <aside className="px-2 py-6 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
      <nav className="space-y-1">
        {navLinks.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <div
              key={item.text}
            >
              <Link
                href={item.href}
                className={`${
                  isActive ? "bg-gray-200" : ""
                } text-gray-900 hover:bg-gray-200 rounded px-3 py-2 flex items-center text-sm font-medium`}
              >
                <div className="py-[2px]">{item.icon}</div>
                <span className="truncate ml-2">{item.text}</span>
              </Link>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default SettingsNav;
