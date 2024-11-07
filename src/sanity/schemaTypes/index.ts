import { type SchemaTypeDefinition } from "sanity";

import skills from "./skills";
import projects from "./projects";
import aboutMe from "./aboutMe";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skills, projects, aboutMe],
};
