import { type SchemaTypeDefinition } from "sanity";
import { author } from "./authorType";
import { blockContent } from "./blockContentType";
import {catergory} from "./catergoryType";
import { article } from "./articleType";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author,blockContent,article,catergory],
};

