<<<<<<< Updated upstream
import { type SchemaTypeDefinition } from 'sanity'
import { author } from './author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    author
  ],
}
=======
import { type SchemaTypeDefinition } from "sanity";
import { author } from "./authorType";
import { blockContent } from "./blockContentType";
import {catergory} from "./catergoryType";
import { article } from "./articleType";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author,blockContent,article,catergory],
};
>>>>>>> Stashed changes
