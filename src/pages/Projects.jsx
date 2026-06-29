import React from "react";
import { Link } from "react-router-dom";
import { projectList } from "../assets/projectList";

const Projects = () => {
  const projectListReverted = [...projectList].reverse();

  const scrollToTop = () => {
    window.scrollTo(top);
  };

  return (
    <section className="w-full pt-10 lg:pt-20 pb-30 lg:px-20">
      <div className="w-full mb-15 lg:mb-20 flex justify-center">
        <h1 className="text-2xl">Featured Projects</h1>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projectListReverted.map((project) => (
          <Link
            to={`/project/${project.id}`}
            key={project.id}
            onClick={() => scrollToTop()}
          >
            <div className="flex flex-col gap-5 p-4 rounded-xl hover:border hover:border-zinc-600 hover:shadow-[3px_3px_12px] hover:shadow-zinc-400">
              <h2 className="text-2xl">{project.title}</h2>
              <p className="">{project.description.listPageDescription}</p>
              <div>
                <img src={project.imgSrc} alt={project.title} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
