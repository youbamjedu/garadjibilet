import { Hono } from "npm:hono@4";
import { cors } from "npm:hono@4/cors";

const app = new Hono();

// CORS
app.use("*", cors());

// Health endpoints
app.get("/make-server-829bfee8/health", (c) => c.json({ status: "ok" }));
app.get("/health", (c) => c.json({ status: "ok" }));

Deno.serve(app.fetch);