import { runQuery } from "@/utils/queryService";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

type User = {
  id: number;
  price: number | null;
  password: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  email: string;
};

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { email, password } = await req.json();

    const checkEmailQuery = `SELECT email FROM "Users" WHERE email='${email}';`;

    const isEmailValid = await runQuery(checkEmailQuery);

    if (isEmailValid.length == 0) {
      return new NextResponse(
        JSON.stringify({ error: "Бүртгэлгүй хэрэглэгч байна!" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const foundUserQuery = `SELECT * FROM "Users" WHERE email='${email}';`;

    const foundUser = await runQuery<User>(foundUserQuery);
    const isPasswordValid = bcrypt.compareSync(
      password,
      foundUser[0]?.password
    );

    if (!isPasswordValid) {
      return new NextResponse(
        JSON.stringify({ error: "Нууц үг буруу байна!" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const { password: _, ...userWithoutPassword } = foundUser[0];

    return new NextResponse(
      JSON.stringify({
        message: "Амжилттай нэвтэрлээ!",
        user: userWithoutPassword,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Алдаа гарлаа:", err);
    return new NextResponse(
      JSON.stringify({ error: "Серверийн алдаа гарлаа!" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
