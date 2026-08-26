import { defineField, defineType } from "sanity";

export const author = defineType({
  title: "Author",
  name: "author",
  type: "document",
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
    }),
    defineField({
      title: "Author Image",
      name: "authorImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          title: "Alternative Text",
          name: "alternativeText",
          type: "string",
          validation: (rule) =>
            rule.custom((value, context) => {
              const parent = context?.parent as { asset?: { _ref?: string } };
              return !value && parent?.asset?._ref
                ? "Alternative text is required when an image is present"
                : true;
            }),
        }),
      ],
    }),
    defineField({
      title: "Bio",
      name: "bio",
      type: "text",
    }),
  ],
});
