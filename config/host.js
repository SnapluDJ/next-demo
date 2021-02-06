const isDev = process.env.NODE_ENV !== "production";

export const host = isDev ? "http://localhost:3000" : "http://127.0.0.1:3000";
