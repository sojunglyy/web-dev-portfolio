import React from "react";

const Footer = () => {
  return (
    <section className="w-full h-[5vh] fixed bottom-0 bg-black border-t">
      <div className="w-full flex flex-row gap-5">
        <p>Email</p>
        <a href="">
          <p>Github</p>
        </a>
        <a href="">
          <p>Instagram</p>
        </a>
        <a href="">
          <p>LinkedIn</p>
        </a>
      </div>
    </section>
  );
};

export default Footer;
