import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";
import { issueRouter } from "./routers/issue";

export const appRouter = createTRPCRouter({
  post: postRouter,
  issue: issueRouter,
});

export type AppRouter = typeof appRouter;
