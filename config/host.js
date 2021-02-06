const isDev = process.env.NODE_ENV !== "production";

export const host = isDev ? "http://localhost:4000" : "http://localhost:3000";
