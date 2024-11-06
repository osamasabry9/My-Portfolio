import { defineField, defineType } from "sanity";

export default defineType({
  name: "skills",
  type: "document",
  title: "Skills",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => [Rule.required().min(3).max(100)],
    }),
    defineField({
      name: "value",
      title: "Percentage",
      type: "number",
      validation: (Rule) => [
        Rule.required()
          .min(1)
          .error("Please enter a number between 1 and 100")
          .max(100)
          .error("Please enter a number between 1 and 100"),
      ],
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      initialValue: "Frontend",
      options: {
        list: [
          { title: "Frontend", value: "Frontend" },
          { title: "Backend", value: "Backend" },
          { title: "Mobile App", value: "Mobile App" },
          { title: "Tools", value: "Tools" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
