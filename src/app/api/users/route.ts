import { checkUser } from "_backend/services/checkUser";
import { getUsers } from "_backend/services/getUsers";

export async function GET() {
  const users = await getUsers();

  return new Response(JSON.stringify({ data: users }));
}

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  return await checkUser({
    username: body.email,
    password: body.password,
  });
}
