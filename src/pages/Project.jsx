import React from "react";
import { Link, useParams } from "react-router-dom";
import { projectList } from "../assets/projectList";
import { PiListMagnifyingGlass } from "react-icons/pi";
import { RiExternalLinkLine } from "react-icons/ri";

const Project = () => {
  const { id } = useParams();
  const thisProject = projectList.find((p) => p.id === id);

  return (
    <section className="w-full pb-40">
      <article className="w-full pt-10 lg:pt-20 px-2 lg:px-20">
        <Link to={"/"} className="flex flex-row gap-2">
          <PiListMagnifyingGlass size={24} />
          <span>View All Projects</span>
        </Link>

        <div className="w-full flex flex-col items-center mt-15 lg:mt-10">
          <span className="">Project</span>
          <h1 className="text-4xl mt-2">{thisProject.title}</h1>
          <div className="w-full my-15 object-contain">
            <img src={thisProject.imgSrc} alt="" className="max-w-full" />
          </div>

          <a href={thisProject.deploymentLink} target="_blank">
            <button className="w-34 h-9 rounded-lg text-black bg-white cursor-pointer hover:bg-transparent hover:text-white hover:border hover:border-zinc-300">
              Deployment{" "}
              <RiExternalLinkLine
                className="inline -translate-y-0.5"
                size={18}
              />
            </button>
          </a>
        </div>

        <div className="w-full lg:w-[80%] mx-auto my-20">
          <p className="text-lg my-15">
            {thisProject.description.projectPageDescription}
          </p>

          <div>
            <p>Year: {thisProject.year}</p>
            <p>Features: {thisProject.features}</p>
            <p>Libraries & Frameworks: {thisProject.librariesAndFrameworks}</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Project;
