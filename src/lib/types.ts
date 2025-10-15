export interface ActionState<T extends Record<string, unknown>> {
  errors: T & { critical?: string };
  isSuccess: boolean;
}

// Tipos específicos
export type ContactActionState = ActionState<{
  fullname?: string;
  email?: string;
  phone?: string;
  message?: string;
}>;

export type LoginActionState = ActionState<{
  email?: string;
  password?: string;
}>;