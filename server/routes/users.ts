import { trpc } from '../utils/trpc';
import z from 'zod';

const usersInput = z.object({
  limit: z.number(),
});

const fetchUsers = async () => {
  return (await fetch('https://jsonplaceholder.typicode.com/users').then(
    (res) => res.json(),
  )) as Promise<IUser>;
};

export const usersRouter = trpc.router({
  getUsers: trpc.procedure.input(usersInput).query(async ({ input }) => {
    const result = await fetchUsers();
    return result;
  }),
});
