import type { APIRoute } from "astro";
import { incrementViews } from "../../../scripts/views";

export const POST: APIRoute = async ({ params }) => {
  const { slug } = params;

  if (!slug) {
    return new Response("Slug is required", { status: 400 });
  }

  try {
    const views = await incrementViews(slug);
    return new Response(JSON.stringify({ views }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response("Error tracking view", { status: 500 });
  }
};
