import { kv } from "@vercel/kv";

export async function GET() {
  const result = await kv.lrange("messages", 0, -1);
  return new Response(JSON.stringify(result));
}
