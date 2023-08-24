export type User = {
  name: string;
  avatar: string;
};

export type Review = {
  id: string;
  offerId: string;
  user: User;
  rating: number;
  text: string;
  time: string;
};
