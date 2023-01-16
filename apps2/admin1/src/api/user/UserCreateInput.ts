import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PlanCreateNestedManyWithoutUsersInput } from "./PlanCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  plab?: string | null;
  plan?: string | null;
  plans?: PlanCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
