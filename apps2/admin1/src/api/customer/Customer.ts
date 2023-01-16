import { Plan } from "../plan/Plan";
import { User } from "../user/User";

export type Customer = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  plan: string | null;
  plans?: Array<Plan>;
  updatedAt: Date;
  users?: Array<User>;
};
