import { defineField } from "sanity";

export const codeContent = defineField({
  type: 'code',
  name: 'codeContent',
  title: 'Code with all options',
  options: {
    language: 'typescript',
    languageAlternatives: [
      {title: 'Typescript', value: 'typescript'},
      {title: 'Python', value: 'python'},
    ],
    withFilename: true,
    disableFullscreen: false,
  },
})