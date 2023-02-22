import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const reservationRouter = createTRPCRouter({
  // hello: publicProcedure
  //   .input(z.object({ text: z.string() }))
  //   .query(({ input }) => {
  //     return {
  //       greeting: `Hello ${input.text}`,
  //     };
  //   }),
  createReservation: publicProcedure
    .input(
      z.object({
        name: z.string(),
        phone: z.string(),
        people: z.number(),
        date: z.date(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return ctx.prisma.reservation.create({
        data: {
          name: input.name,
          phone: input.phone,
          people: input.people,
          date: input.date,
        },
      });
    }),
});
