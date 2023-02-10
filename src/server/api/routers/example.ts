import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  createReservation: publicProcedure
    .input(
      z.object({
        name: z.string(),
        phone: z.string(),
        people: z.number(),
        date: z.date(),
      })
    )
    .mutation(({ input, ctx }) => {
      ctx.prisma.reservation.create({
        data: {
          name: input.name,
          phone: input.phone,
          people: input.people,
          date: input.date,
        },
      });
    }),
});
