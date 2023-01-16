import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PlanWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
