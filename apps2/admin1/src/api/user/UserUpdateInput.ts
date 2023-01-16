import { PlanUpdateManyWithoutUsersInput } from "./PlanUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  plans?: PlanUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
