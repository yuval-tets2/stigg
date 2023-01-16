import { Plan } from "../plan/Plan";

export type Customer = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  plans?: Array<Plan>;
  updatedAt: Date;
};
