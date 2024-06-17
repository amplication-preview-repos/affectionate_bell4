import { Pairing } from "../pairing/Pairing";
import { User } from "../user/User";

export type Mentee = {
  createdAt: Date;
  id: string;
  pairings?: Array<Pairing>;
  updatedAt: Date;
  user?: User | null;
};
