import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PlanUpdateManyWithoutUsersInput } from "./PlanUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  plab?: string | null;
  plan?: string | null;
  plans?: PlanUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
