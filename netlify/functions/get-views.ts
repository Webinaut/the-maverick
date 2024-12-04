import type { Config, Context } from "@netlify/functions";
import { getViews } from "../../src/scripts/views";

export default async (req: Request, context: Context) => {
  if (req.method !== "GET") {
    return new Response("Method not allowed", { status: 405 });
  }

  const url = new URL(req.url);
  const slug = url.pathname.split("/").pop();

  if (!slug) {
    return new Response("Slug is required", { status: 400 });
  }

  try {
    const views = await getViews(slug);
    return new Response(JSON.stringify({ views }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Error getting views", { status: 500 });
  }
};

export const config: Config = {
  path: "/api/views/:slug",
};
