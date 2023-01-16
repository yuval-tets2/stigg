import { PlanCreateNestedManyWithoutUsersInput } from "./PlanCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  plans?: PlanCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
