import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mt-8 w-full bg-gray-500  px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 rounded-t-2xl">
        <div className="flex flex-col text-white">
          <p>Featured Blogs</p>
          <p>Most viewed</p>
          <p>Readers Choice</p>
        </div>

        <div className="flex flex-col text-white">
          <p>Forum</p>
          <p>Support</p>
          <p>Recent Posts</p>
        </div>

        <div className="flex flex-col text-white">
          <p>Privacy Policy</p>
          <p>About Us</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
      <hr />
      <p className="py-2 pb-6 text-center text-white bg-gray-500 text-sm">
        All <b>©</b> rights reserved @<strong>Aj-AY Feed 2023</strong>
      </p>
    </>
  );
};

export default Footer;
