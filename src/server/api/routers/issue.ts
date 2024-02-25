import {z} from "zod"

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
  } from "~/server/api/trpc";

  export const issueRouter = createTRPCRouter({
    create: protectedProcedure
    .input(z.object({name: z.string().min(1)}))
    .mutation(async ({ctx, input}) =>{
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        return ctx.db.issue.create({
            data:{
                issue: input.name,
                createdBy: { connect : {id: ctx.session.user.id}},
            },
        })
    }),

    getLatest : protectedProcedure.query(({ctx}) =>{
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        return ctx.db.issue.findFirst({
            orderBy: {createdAt: "desc"},
            where: { createdBy : {id: ctx.session.user.id}},
        });
    }),
  })