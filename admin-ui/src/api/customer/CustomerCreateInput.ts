import { PlanCreateNestedManyWithoutCustomersInput } from "./PlanCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  plans?: PlanCreateNestedManyWithoutCustomersInput;
};
