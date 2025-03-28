import { checkUser } from "_backend/services/checkUser";
import { getUsers } from "_backend/services/getUsers";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const userId = url.searchParams.get("userId");

  // If userId is provided, return a specific user
  if (userId) {
    console.log("userId:", userId);
    const users = await getUsers();
    const foundUser = users.find((user) => user._id === Number(userId));

    if (!foundUser) {
      return new Response(
        JSON.stringify({ message: "Хэрэглэгч олдсонгүй", error: true }),
        {
          status: 404,
        }
      );
    }
    return new Response(JSON.stringify({ data: foundUser }));
  }

  // If no userId is provided, return all users
  const users = await getUsers();
  return new Response(JSON.stringify({ data: users }));
}

export async function POST(req: Request) {
  const body = await req.json();
  return await checkUser({
    username: body.email,
    password: body.password,
  });
}
