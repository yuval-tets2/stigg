import { PlanUpdateManyWithoutCustomersInput } from "./PlanUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  plans?: PlanUpdateManyWithoutCustomersInput;
};
