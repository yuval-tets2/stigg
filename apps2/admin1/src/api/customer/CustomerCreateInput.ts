import { PlanCreateNestedManyWithoutCustomersInput } from "./PlanCreateNestedManyWithoutCustomersInput";
import { UserCreateNestedManyWithoutCustomersInput } from "./UserCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  plan?: string | null;
  plans?: PlanCreateNestedManyWithoutCustomersInput;
  users?: UserCreateNestedManyWithoutCustomersInput;
};
