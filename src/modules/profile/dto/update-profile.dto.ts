import z from 'zod';

export const ProfileSchema = z
  .object({
    name: z.string().min(3).max(100),
    description: z.string(),
    age: z.int().positive(),
  })
  .required();

export type UpdateProfileDto = z.infer<typeof ProfileSchema>;
