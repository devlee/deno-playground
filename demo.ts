import { serve } from "https://deno.land/std@v0.50.0/http/server.ts";

const PORT = 8080;
const s = serve({ port: PORT });

console.log(` Listening on <http://localhost>:${PORT}/`);

for await (const req of s) {
  console.log(req.headers)
  req.respond({ body: "Hello Deno\nBye Node" });
}