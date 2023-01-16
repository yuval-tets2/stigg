import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PlanCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
