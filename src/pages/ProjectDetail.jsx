import { Link, useParams } from "react-router-dom";
import { Github, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { projects } from "./Projects";

const ProjectDetail = () => {
  const { slug } = useParams();

  const projectIndex = projects.findIndex((project) => project.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <Layout>
        <div className="page-container text-center">
          <h2 className="manga-text text-4xl mb-4">MISSION NOT FOUND</h2>
          <Link to="/projects" className="text-manga-secondary font-bold">
            Back to Mission Archive
          </Link>
        </div>
      </Layout>
    );
  }

  const previousProject =
    projectIndex > 0 ? projects[projectIndex - 1] : projects[projects.length - 1];

  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : projects[0];

  return (
    <Layout>
      <div className="page-container max-w-5xl mx-auto">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 mb-8 text-manga-secondary font-bold hover:underline"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Mission Archive
        </Link>

        <div className="manga-panel p-6 md:p-10 bg-[#f5e7d3] dark:bg-[#4a372a] relative overflow-visible">
          <div className="absolute -top-3 -left-3 bg-manga-secondary text-white px-3 py-1 rotate-3 shadow-md">
            <span className="font-manga text-sm">
              CHAPTER {projectIndex + 1}
            </span>
          </div>

          <p className="text-manga-secondary font-bold mb-2">
            {project.category}
          </p>

          <h1 className="manga-text text-3xl md:text-5xl text-manga-primary dark:text-white mb-3">
            {project.title}
          </h1>

          <h2 className="text-xl font-semibold mb-6">{project.subtitle}</h2>

          <p className="text-foreground/90 leading-relaxed text-lg mb-8">
            {project.description}
          </p>

          <div className="mb-8">
            <h3 className="manga-text text-2xl mb-4">TOOLS USED</h3>
            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-secondary px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-[#3d2914] text-white rounded font-bold hover:bg-[#73482a] transition"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>

            {project.demoUrl && project.demoUrl !== "PASTE_DEMO_LINK_HERE" && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-manga-secondary text-white rounded font-bold hover:opacity-90 transition"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <Link
            to={`/projects/${previousProject.slug}`}
            className="manga-panel p-5 bg-[#f5e7d3] dark:bg-[#4a372a] hover:scale-[1.02] transition-transform"
          >
            <p className="text-sm opacity-70 mb-2">Previous Mission</p>
            <div className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-manga text-xl">
                {previousProject.title}
              </span>
            </div>
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="manga-panel p-5 bg-[#f5e7d3] dark:bg-[#4a372a] hover:scale-[1.02] transition-transform text-right"
          >
            <p className="text-sm opacity-70 mb-2">Next Mission</p>
            <div className="flex items-center justify-end gap-2">
              <span className="font-manga text-xl">{nextProject.title}</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;