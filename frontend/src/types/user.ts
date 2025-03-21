export type User = {
  _id: string; //ObjectId as string
  name: string;
  email: string;
  photo: string;
  role: "admin" | "user" | "lead-guide" | "guide";
  password: string;
  active: boolean;
  __v: number;
};
