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
      bankCard: [
        {
          _id: 12,
          country: "Mongolia",
          firstName: "Bat",
          lastName: "Dorj",
          cardNumber: "12341234",
          expiryDate: "20250423",
          userId: 12,
        },
      ],
    },
  ];
};
