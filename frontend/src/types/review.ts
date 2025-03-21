export type Review = {
  _id: string;
  review: string;
  rating: number;
  tour: string; //ObjectId as string
  user: string; //ObjectId as string
  createdAt: Date;
  __v: number;
};
