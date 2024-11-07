import { client } from "@/sanity/lib/client";
import { AboutMe } from "@/types/interfaces";

export async function getAboutMe() {
  const query = `*[_type == "aboutMe"][0]{
            _id,
            jobTitle,
            summary
          }`;
  const data = await client.fetch(query);
  return data as AboutMe;
}
