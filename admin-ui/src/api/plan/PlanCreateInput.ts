import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type PlanCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  name?: string | null;
};
