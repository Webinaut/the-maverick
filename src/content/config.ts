// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const articleCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      hero: image(),
      summary: z.string(),
      ranking: z.number(),
      tags: z.array(z.string()),
    }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  article: articleCollection,
};
