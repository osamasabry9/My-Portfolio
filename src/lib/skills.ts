import { client } from "@/sanity/lib/client";
import { Skill, SkillsCategory } from "@/types/interfaces";

export async function getSkills(category: SkillsCategory) {
  const query = `
         *[_type=="skills" && category=="${category}"]{
         _id,label, category,value
         }
         `;
  const data = await client.fetch(query);
  return data as Skill[];
}
