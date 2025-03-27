import { UserType } from "@/utils/types";

export const getUsers = async (): Promise<UserType[]> => {
  return [
    {
      _id: 1,
      email: "gandak0930@gmail.com",
      password: "1234",
      username: "gandak",
      receivedDonations: [
        {
          _id: 1,
          amount: 5,
          specialMessage: "Demjdeg shuu",
          socialURLOrByMeCoffee: "Guest",
          donorId: 2,
          recipientId: 1,
        },
      ],
      profile: {
        _id: 1,
        name: "Ganzorig Gombo",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        avatarImage: "https://github.com/shadcn.png",
        socialMediaURL: "https://www.facebook.com/gandak0930",
        backgroundImage:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        successMessage: "Thank you for your support!",
        userId: 1,
      },
      bankCard: [
        {
          _id: 12,
          country: "Mongolia",
          firstName: "Bat",
          lastName: "Dorj",
          cardNumber: "12341234",
          expiryDate: "20250423",
          userId: 1,
        },
      ],
    },
    {
      _id: 2,
      email: "bold@gmail.com",
      password: "1234",
      username: "bold",
      receivedDonations: [
        {
          _id: 1,
          amount: 10,
          specialMessage: "Mundag daa",
          socialURLOrByMeCoffee: "Guest",
          donorId: 1,
          recipientId: 2,
        },
      ],
      profile: {
        _id: 2,
        name: "Bold Dorj",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        avatarImage: "https://github.com/shadcn.png",
        socialMediaURL: "https://www.facebook.com/bolddorj",
        backgroundImage:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        successMessage: "Thank you!",
        userId: 1,
      },
      bankCard: [
        {
          _id: 6,
          country: "Mongolia",
          firstName: "Bold",
          lastName: "Amgalan",
          cardNumber: "12341234",
          expiryDate: "20250529",
          userId: 3,
        },
      ],
    },
    {
      _id: 3,
      email: "chimegee@gmail.com",
      password: "1234",
      username: "Chimegee",
      receivedDonations: [
        {
          _id: 1,
          amount: 2,
          specialMessage: "Huurhun shuu",
          socialURLOrByMeCoffee: "Guest",
          donorId: 4,
          recipientId: 3,
        },
      ],
      profile: {
        _id: 3,
        name: "Chimeg Tseren",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        avatarImage: "https://github.com/shadcn.png",
        socialMediaURL: "https://www.facebook.com/chimeg",
        backgroundImage:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        successMessage: "Thanks for your support!",
        userId: 1,
      },
      bankCard: [
        {
          _id: 8,
          country: "Mongolia",
          firstName: "Munkh",
          lastName: "Gerel",
          cardNumber: "12341234",
          expiryDate: "20250529",
          userId: 2,
        },
      ],
    },
  ];
};
