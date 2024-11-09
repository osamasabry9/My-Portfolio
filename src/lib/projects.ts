import { client } from "@/sanity/lib/client";
import { Project } from "@/types/interfaces";

export async function getProjects() {
  const query = `
       *[_type == "projects"] | order(publishedAt desc) {
    _id,
    title,
    description,
    images,
    tags,
    demoLink,
    githubLink,
    publishedAt,
    isResponsive
  }
      `;

  const data = await client.fetch(query);
  return data as Project[];
}
