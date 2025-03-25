import { users } from "./datas";

export const checkUsername = (username: string) => {
  const foundUser = users.find((user) => {
    if (user.username === username) return user;
  });
  console.log(foundUser);
  if (foundUser) {
    return true;
  } else return false;
};
