import { UserStatuses } from "./user";

export interface Message {
  id: string;
  name: string;
  message: string;
  timestamp: string;
  status: UserStatuses;
  avatar?: string | null;
}
