import { UseFormRegister, FieldValues } from "react-hook-form";

export interface FormInput {
  inputId: string;
  register: UseFormRegister<any>;
}

export interface Buddy {
  id: number,
  name: string,
  status: BuddyStatus;
}

export enum BuddyStatus {
  ONLINE = "ONLINE",
  AWAY = "AWAY",
  OFFLINE = "OFFLINE"
}

export interface Buddies {
  buddies: Buddy[],
}