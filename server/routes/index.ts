import { initTRPC } from '@trpc/server';
import { usersRouter } from './users';

const trpc = initTRPC.create();

export const appRouter = trpc.mergeRouters(usersRouter);
export type AppRouter = typeof appRouter;

export const caller = appRouter.createCaller({});
