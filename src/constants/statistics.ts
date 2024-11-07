import { getProjects } from "@/lib/projects";
import { Statistic } from "@/types/interfaces";

export async function getStatistics() {
  const projects = await getProjects();
  const totalProjects = projects.length;
  const statistics: Statistic[] = [
    {
      label: "Years experience",
      value: new Date().getFullYear() - 2021,
    },
    {
      label: "Completed projects",
      value: totalProjects,
    },
  ];

  return { statistics };
}
