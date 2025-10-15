import { z } from "zod";

export const contactSchema = z.object({
  fullname: z
    .string()
    .min(1, "Nombre es requerido") // ← Esto cubre el "required"
    .min(3, "Name must be at least 3 characters")
    .max(64, "Name cannot exceed 64 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\+?[0-9]{1,4}?[-.\s]?(\(?\d{1,3}?\)?[-.\s]?){1,4}\d{1,4}$/, {
      message: "Invalid phone number",
    }),
  message: z
    .string()
    .min(1, "Message is required")
    //.min(20, "Message must contain at least 20 characters")
    .max(500, "Message cannot exceed 500 characters"),
});