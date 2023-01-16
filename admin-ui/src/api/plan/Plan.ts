import { Customer } from "../customer/Customer";

export type Plan = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
