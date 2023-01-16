import { Plan } from "../plan/Plan";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  plans?: Array<Plan>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
