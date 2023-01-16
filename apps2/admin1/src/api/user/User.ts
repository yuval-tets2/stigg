import { Customer } from "../customer/Customer";
import { Plan } from "../plan/Plan";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  customer?: Customer | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  plab: string | null;
  plan: string | null;
  plans?: Array<Plan>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
