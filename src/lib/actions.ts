import z from "zod";
import { contactSchema } from "./zodSchemas";
import { ContactActionState } from "./types";

// Tipos derivados del schema
type ContactFields = z.infer<typeof contactSchema>;


export async function contactAction(
    prevState: ContactActionState,
    formData: FormData) {
    "use server";
    const currentState = {
        errors: {},
        isSuccess: false,
    };

    const fullname = formData.get("fullname");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const validation = contactSchema.safeParse({
        fullname,
        email,
        phone,
        message,
    });

    if (!validation.success) {
        const errors: ContactActionState["errors"] = {};
        validation.error.issues.forEach((issue) => {
            const path = issue.path[0] as keyof ContactFields | undefined;
            if (path && typeof path === "string") {
                errors[path] = issue.message;
            }
        });
        return { ...currentState, errors };
    }

    try {
        //await createMessage({ fullname, email, phone, message });
    } catch (err) {
        if (err instanceof Error) {
            return {
                ...currentState,
                errors: { critical: err.message },
            };
        }
        return {
            ...currentState,
            errors: { critical: "Error desconocido" },
        };
    }

    return { ...currentState, isSuccess: true, errors: {} };
}