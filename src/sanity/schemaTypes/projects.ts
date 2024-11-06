import { defineField, defineType } from "sanity";

export default defineType({
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => [
        Rule.required(),
        Rule.min(3).error("Title must be at least 3 characters long"),
        Rule.max(100).error("Title must be at most 100 characters long"),
      ],
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => [
        Rule.required(),
        Rule.min(3).error("Description must be at least 3 characters long"),
        Rule.max(1000).error(
          "Description must be at most 1000 characters long"
        ),
      ],
    }),

    defineField({
      name: "images",
      type: "array",
      title: "Images",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "demoLink",
      type: "url",
      title: "Demo Link",
    }),
    defineField({
      name: "githubLink",
      type: "url",
      title: "Github Repository Link",
    }),
    defineField({
      name: "publishedAt",
      type: "date",
      title: "Published At",
      validation: (Rule) =>
        Rule.min(new Date("2020-08-25").toDateString()).max(
          new Date().toDateString()
        ),
    }),
    defineField({
      name: "isResponsive",
      type: "boolean",
      title: "Is Responsive",
      initialValue: true,
    }),
  ],
});
