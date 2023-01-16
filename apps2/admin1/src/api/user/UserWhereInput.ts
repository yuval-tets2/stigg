import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlanListRelationFilter } from "../plan/PlanListRelationFilter";

export type UserWhereInput = {
  customer?: CustomerWhereUniqueInput;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  plab?: StringNullableFilter;
  plan?: StringNullableFilter;
  plans?: PlanListRelationFilter;
  username?: StringFilter;
};
