import React from "react";

const Footer = () => {
  return (
    <section className="w-full h-[5vh] fixed bottom-0 bg-black border-t">
      <div className="w-full flex flex-row gap-5">
        <p>
          <a href="mailto:sojunglyy@gmail.com">Email</a>
        </p>
        <a href="https://github.com/sojunglyy" target="_blank">
          <p>Github</p>
        </a>
        <a href="https://www.instagram.com/sopppppppo/" target="_blank">
          <p>Instagram</p>
        </a>
        <a
          href="https://www.linkedin.com/in/sojung-lee-61a0b2246/"
          target="_blank"
        >
          <p>LinkedIn</p>
        </a>
      </div>
    </section>
  );
};

export default Footer;
