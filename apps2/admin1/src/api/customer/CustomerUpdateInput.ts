import { PlanUpdateManyWithoutCustomersInput } from "./PlanUpdateManyWithoutCustomersInput";
import { UserUpdateManyWithoutCustomersInput } from "./UserUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  plan?: string | null;
  plans?: PlanUpdateManyWithoutCustomersInput;
  users?: UserUpdateManyWithoutCustomersInput;
};
