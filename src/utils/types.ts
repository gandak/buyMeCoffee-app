export type DonationType = {
  _id: number;
  amount: number;
  specialMessage: string;
  socialURLOrByMeCoffee: string;
  donorId: number;
  recipientId: number;
};

export type Profile = {
  _id: number;
  name: string;
  about: string;
  avatarImage: string;
  socialMediaURL: string;
  backgroundImage: string;
  userId: number;
};

export type BankCard = {
  _id: number;
  country: string;
  firstName: string;
  lastName: string;
  cardNumber: string;
  expiryDate: Date;
  userId: number;
};

export type UserType = {
  _id: number;
  email: string;
  password: string;
  username: string;
  receivedDonations: DonationType;
  profile: Profile;
  bankCard: BankCard;
};
