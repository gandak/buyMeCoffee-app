export type DonationType = {
  reduce(
    arg0: (acc: number, donation: DonationType) => number,
    arg1: number
  ): unknown;
  _id: number;
  name: string;
  amount: number;
  donorImage: string;
  specialMessage: string;
  socialURLOrByMeCoffee: string;
  donorId: number;
  recipientId: number;
  createdAt: Date;
  updatedAt: Date;
};

export type Profile = {
  _id: number;
  name: string;
  about: string;
  avatarImage: string;
  socialMediaURL: string;
  backgroundImage: string;
  userId: number;
  successMessage: string;
  coverImg: string;
};

export type BankCard = {
  _id: number;
  country: string;
  firstName: string;
  lastName: string;
  cardNumber: string;
  expiryDate: string;
  userId: number;
};

export type UserType = {
  _id: number;
  email: string;
  password: string;
  username: string;
  receivedDonations: DonationType[] | null;
  profile: Profile;
  bankCard: BankCard[];
};
