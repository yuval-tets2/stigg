import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PlanWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
