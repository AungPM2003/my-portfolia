import { type SchemaTypeDefinition } from "sanity";
import { author } from "./authorType";
import { blockContent } from "./blockContentType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author,blockContent],
};
