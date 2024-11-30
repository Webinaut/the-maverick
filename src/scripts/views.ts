import { getStore } from "@netlify/blobs";

const store = getStore("post-views");

export async function incrementViews(slug: string): Promise<number> {
  const key = `views-${slug}`;

  try {
    const currentViews = (await store.get(key)) || "0";
    const newViews = parseInt(currentViews.toString()) + 1;
    await store.set(key, newViews.toString());
    return newViews;
  } catch (error) {
    console.error("Error tracking views:", error);
    return 0;
  }
}

export async function getViews(slug: string): Promise<number> {
  const key = `views-${slug}`;
  try {
    const views = (await store.get(key)) || "0";
    return parseInt(views.toString());
  } catch (error) {
    console.error("Error getting views:", error);
    return 0;
  }
}