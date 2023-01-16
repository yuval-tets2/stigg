import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type PlanUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  name?: string | null;
};
