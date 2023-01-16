import { Customer } from "../customer/Customer";
import { User } from "../user/User";

export type Plan = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};
