import * as z from 'zod';

export const formSchema = z.object({
  username: z.string().min(1, {
    message: 'Prompt is required',
  }),
});
