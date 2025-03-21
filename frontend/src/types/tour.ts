export type Coordinates = [number, number];

export type StartLocation = {
  type: string;
  coordinates: Coordinates;
  address: string;
  description: string;
};

export type Location = {
  type: string;
  coordinates: Coordinates;
  description: string;
  day: number;
  _id: string;
  id: string;
};

export type Guide = {
  _id: string;
  name: string;
  email: string;
  photo: string;
  role: string;
};

export type ReviewUser = {
  _id: string;
  name: string;
  photo: string;
};

export type Review = {
  _id: string;
  review: string;
  rating: number;
  tour: string;
  user: ReviewUser;
  createdAt: string;
  __v: number;
  id: string;
};

export type Tour = {
  startLocation: StartLocation;
  ratingsQuantity: number;
  _id: string;
  name: string;
  duration: number;
  maxGroupSize: number;
  difficulty: string;
  ratingsAverage: number;
  ratingQuantity: number;
  price: number;
  summary: string;
  description: string;
  imageCover: string;
  images: string[];
  startDates: string[];
  secretTour: boolean;
  locations: Location[];
  guides: Guide[];
  __v: number;
  durationWeeks: number;
  reviews: Review[];
  id: string;
};

export type TourData = {
  data: {
    data: Tour;
  };
};
