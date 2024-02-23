import {z} from "zod"

import {
    createTRPCRouter,
    protectedProcedure,
  } from "~/server/api/trpc";

  export const issueRouter = createTRPCRouter({
    create: protectedProcedure
    .input(z.object({name: z.string().min(1)}))
    .mutation(async ({ctx, input}) =>{
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return ctx.db.issue.create({
            data: {
                issue: input.name,
                createdBy: { connect : {id : ctx.session.user.id}},
            },
        })
    }),

    getLatest : protectedProcedure.query(({ctx}) =>{
        return ctx.db.issue.findFirst({
            orderBy: {createdAt: "desc"},
            where: { createdBy : {id: ctx.session.user.id}},
        });
    }),
  })