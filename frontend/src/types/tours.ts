export type Coordinates = [number, number];

export type StartLocation = {
  type: "Point";
  coordinate: Coordinates;
  address: string;
  description: string;
};

export type Location = {
  type: "Point";
  coordinate: Coordinates;
  description: string;
  day: number;
  _id: string;
};

export type Guide = string; // Assuming it’s a reference (ObjectId as string)

export type Tour = {
  _id: string;
  name: string;
  duration: number;
  maxGroupSize: number;
  difficulty: "easy" | "medium" | "hard";
  ratingsAverage: number;
  ratingQuality: number;
  price: number;
  summary: string;
  description: string;
  imageCover: string;
  images: string[];
  createdAt: Date;
  startDates: Date[];
  secretTour: boolean;
  startLocation: StartLocation;
  location: Location[];
  guides: Guide[];
  __v: number;
};
