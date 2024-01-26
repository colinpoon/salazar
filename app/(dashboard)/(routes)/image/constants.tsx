import * as z from 'zod';

export const formSchema = z.object({
  username: z.string().min(1, {
    message: 'Image prompt is required',
  }),
  //  two options available
  // how many images && resolution
  amount: z.string().min(1),
  resolution: z.string().min(1),
});

// create an array of options for users

export const amountOptions = [
  {
    value: '1',
    label: '1 Image',
  },
  {
    value: '2',
    label: '2 Image',
  },
  {
    value: '4',
    label: '4 Image',
  },
];

export const resolutionOptions = [
  {
    value: '256x256',
    label: '256 x 256',
  },
  {
    value: '512x512',
    label: '512 x 512',
  },
  {
    value: '1024x1024',
    label: '1024 x 1024',
  },
];
