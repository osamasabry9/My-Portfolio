import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutMe",
  type: "document",
  title: "About Me",
  fields: [
    defineField({
      name: "jobTitle",
      title: "Title",
      type: "string",
      validation: (Rule) => [
        Rule.required(),
        Rule.min(3).error("Title must be at least 3 characters long"),
        Rule.max(100).error("Title must be at most 100 characters long"),
      ],
    }),

    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      validation: (Rule) => [
        Rule.required(),
        Rule.min(3).error("Description must be at least 3 characters long"),
        Rule.max(1000).error(
          "Description must be at most 1000 characters long"
        ),
      ],
    }),
  ],
});
