import { Project } from "@/types/interfaces";
import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProjectCart from "./ProjectCard";
import { urlFor } from "@/sanity/lib/image";
import Carousel from "./Carousel";
import InfoItem from "./infoItem";
import { Calendar, Eye, Github, LayoutDashboard } from "lucide-react";
import { buttonVariants } from "../ui/button";

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
  const imageFormat = urlFor(project.images[0]).url();

  return (
    <Dialog>
      {/* DialogTrigger  */}
      <DialogTrigger asChild>
        <ProjectCart imageUrl={imageFormat} title={project.title} />
      </DialogTrigger>
      {/* DialogContent includes title of the project and description */}
      <DialogContent className="p-0 sm:max-w-4xl lg:max-w-7xl">
        <DialogHeader className="bg-muted p-4 md:p-6">
          {/* title of the project */}
          <DialogTitle className="text-foreground capitalize text-xl font-semibold truncate">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        {/* description of the project */}
        <div className="grid lg:grid-cols-2 gap-4 p-4 max-h-[85vh] overflow-x-hidden overflow-y-auto">
          <Carousel images={project.images} />
          <div className="space-y-4 lg:space-y-6 p-2 lg:p-4 size-full ">
            <p className="text-sm">{project.description}</p>
            <hr />
            <article className="space-y-2 lg:space-y-3">
              <InfoItem icon={Calendar} label={"published"}>
                <p className="font-semibold">
                  {project.publishedAt.toLocaleString()}
                </p>
              </InfoItem>
              <InfoItem icon={LayoutDashboard} label={"layout"}>
                <p className="font-semibold">
                  {project.isResponsive ? "Responsive" : "Static"}
                </p>
              </InfoItem>
              <InfoItem icon={Calendar} label={"tags"}>
                <p className="flex items-center flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="border rounded-sm py-1 px-2 hover:bg-muted cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </p>
              </InfoItem>
            </article>
            <hr />
            <div className="flex items-center gap-2">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants()}
              >
                <Eye className="size-4" /> <span>View demo</span>
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "outline" })}
              >
                <Github className="size-4" /> <span>Source Code</span>
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectItem;
