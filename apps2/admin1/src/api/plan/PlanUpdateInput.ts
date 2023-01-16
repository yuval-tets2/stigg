import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PlanUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
