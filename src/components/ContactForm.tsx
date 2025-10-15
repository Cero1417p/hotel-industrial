"use client";

import { useRef, useEffect, useActionState } from "react";
import toast, { Toaster } from "react-hot-toast";
import SubmitButton from "@/ui/SubmitButton";
import Alert from "@/ui/Alert";
import { ContactActionState } from "@/lib/types";

interface ContactFormProps {
  contactAction: (prevState: ContactActionState, formData: FormData) => Promise<ContactActionState>;
}

export default function ContactForm({ contactAction }: ContactFormProps) {
  const [state, formAction] = useActionState(contactAction, { errors: {}, isSuccess: false });
  const resetBtnRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.isSuccess) {
      toast.success("Mensaje enviado correctamente");
      resetBtnRef.current?.click();
    } else if (state.errors?.critical) {
      toast.error(state.errors.critical);
    } else if (Object.keys(state.errors).length > 0) {
      toast.error("Invalid contact data");
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-5">
      {state.errors?.critical && <Alert type="danger">{state.errors.critical}</Alert>}

      <div>
        <input
          name="fullname"
          type="text"
          placeholder="Nombre completo"
          className="w-full p-3 text-lg border border-gray-300 shadow-sm focus:shadow-md outline-none transition"
        />
        {state.errors?.fullname && (
          <span className="text-red-600 text-sm inline-block mt-2 pl-1.5">{state.errors.fullname}</span>
        )}
      </div>

      <div>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-3 text-lg border border-gray-300 shadow-sm focus:shadow-md outline-none transition"
        />
        {state.errors?.email && (
          <span className="text-red-600 text-sm inline-block mt-2 pl-1.5">{state.errors.email}</span>
        )}
      </div>

      <div>
        <input
          name="phone"
          type="tel"
          placeholder="Celular"
          className="w-full p-3 text-lg border border-gray-300 shadow-sm focus:shadow-md outline-none transition"
        />
        {state.errors?.phone && (
          <span className="text-red-600 text-sm inline-block mt-2 pl-1.5">{state.errors.phone}</span>
        )}
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Mensaje"
          rows={5}
          className="w-full p-3 text-lg border border-gray-300 shadow-sm focus:shadow-md outline-none transition resize-vertical"
        ></textarea>
        {state.errors?.message && (
          <span className="text-red-600 text-sm inline-block mt-2 pl-1.5">{state.errors.message}</span>
        )}
      </div>

      <div>
        <SubmitButton type="submit">Enviar</SubmitButton>
        <button
          type="reset"
          ref={resetBtnRef}
          className="absolute -top-52 -left-52 w-0 h-0 overflow-hidden opacity-0"
        />
      </div>

      <Toaster position="top-center" />
    </form>
  );
}