import z from "zod";

export const profileSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  college: z.string().min(2, "College name is required"),
  cgpa: z.coerce
    .number()
    .min(0, "CGPA must be at least 0")
    .max(10, "CGPA cannot be more than 10"),
});
