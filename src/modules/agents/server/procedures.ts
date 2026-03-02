import { db } from "@/db/model";
import { agents } from "@/db/schema";
import {
  createTRPCRouter,
  protectedProcedure,
} from "@/trpc/init";
import { agentInsertSchema } from "../schema";
import { eq } from "drizzle-orm";
import {z} from "zod";

export const agentsRouter = createTRPCRouter({
  //TODO: change the baseProcedure to protectedProcedure
  getOne: protectedProcedure.input(z.object( {id: z.string()} )).query(async ({ input }) => {
    const [existingAgent] = await db
      .select()
      .from(agents)
      .where(eq(agents.id, input.id));

    return existingAgent;
  }),
  //TODO: change the baseProcedure to protectedProcedure
  getMany: protectedProcedure.query(async () => {
    const data = await db
      .select()
      .from(agents);

    return data;
  }),
  create: protectedProcedure
    .input(agentInsertSchema)
    .mutation(async ({ ctx, input }) => {
      const [createdAgent] = await db
        .insert(agents)
        .values({
          ...input,
          userId: ctx.auth.session.userId,
        })
        .returning();

      return createdAgent;
    }),
});
