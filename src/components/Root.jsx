import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import { projectList } from "../assets/projectList";

export const Root = () => {
  const projectListReverted = [...projectList].reverse();

  return (
    <main className="w-full p-5 text-zinc-300 bg-black">
      <section className="w-full flex flex-col lg:flex-row gap-10 lg:justify-between border-b-1 pb-3">
        <div className="w-full lg:w-1/2">
          <div className="w-full">
            <Link to="/">
              <h1 className="font-heading text-4xl mb-2">SOJUNG LEE</h1>
            </Link>
          </div>
          <p>Web Development Documentation</p>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="w-full">
            Sojung Lee is a graphic designer and web developer from South Korea,
            currently based in the Netherlands. Working with digital materials,
            she creates web, videos, images, text, and something in between.
          </p>
        </div>
      </section>

      <section className="w-full flex flex-row gap-4 lg:gap-8">
        {/* side thumbnails */}
        <div className="w-24 flex-none py-4 pr-3 border-r flex flex-col gap-5">
          {projectListReverted.map((project) => (
            <Link to={`/project/${project.id}`} className="hover:opacity-50">
              <div key={project.id} className="max-w-full object-contain">
                <img
                  src={project.imgSrc}
                  alt={`thumbnail of ${project.title}`}
                  className="max-w-full"
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="flex-1">
          <Outlet />
        </div>
      </section>

      <Footer />
    </main>
  );
};
