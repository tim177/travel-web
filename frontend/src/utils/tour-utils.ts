export const formatDate = (dateInput: Date | string): string => {
  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    console.error(`Invalid date: ${dateInput}`);
    return "Invalid Date";
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Format month and year only
export const formatMonthYear = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
};

// Calculate days left until a date
export const calculateDaysLeft = (dateString: string): number => {
  const date = new Date(dateString);
  const today = new Date();
  const diffTime = date.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

// Get difficulty color class
export const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty) {
    case "easy":
      return "bg-green-100 text-green-800 border-green-200";
    case "medium":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "hard":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

// Format price with commas
export const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Calculate end date based on start date and duration
export const calculateEndDate = (
  dateString: string,
  duration: number
): string => {
  const startDate = new Date(dateString);
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + duration - 1); // -1 because the first day is included
  return formatDate(endDate.toISOString());
};

// Get next available start date from now
export const getNextAvailableDate = (dates: string[]): string | null => {
  const today = new Date();
  const futureDates = dates
    .map((date) => new Date(date))
    .filter((date) => date > today);

  if (futureDates.length === 0) return null;

  return futureDates.sort((a, b) => a.getTime() - b.getTime())[0].toISOString();
};

// Format paragraph text with line breaks
export const formatParagraphs = (text: string): string[] => {
  return text.split("\n").filter((paragraph) => paragraph.trim() !== "");
};

// Calculate average rating from reviews
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const calculateAverageRating = (reviews: any[]): number => {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return sum / reviews.length;
};

// Get star rating display array (filled, half-filled, or empty stars)
export const getStarRating = (
  rating: number
): ("full" | "half" | "empty")[] => {
  const stars: ("full" | "half" | "empty")[] = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push("full");
  }

  // Add half star if needed
  if (hasHalfStar) {
    stars.push("half");
  }

  // Fill the rest with empty stars
  while (stars.length < 5) {
    stars.push("empty");
  }

  return stars;
};
