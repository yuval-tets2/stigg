import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlanListRelationFilter } from "../plan/PlanListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CustomerWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phone?: StringNullableFilter;
  plan?: StringNullableFilter;
  plans?: PlanListRelationFilter;
  users?: UserListRelationFilter;
};
