import { users } from "./datas";

export const checkUsername = (username: string) => {
  const foundUser = users.find((user) => {
    if (user.username === username) return user;
  });
  if (!foundUser) {
    return false;
  } else return true;
};
