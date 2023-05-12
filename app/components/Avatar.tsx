"use client";
import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <Image
      height="30"
      width="30"
      alt="Avatar"
      src="/images/placeholder.jpg"
      className="rounded-full"
    ></Image>
  );
};

export default Avatar;
