import { runQuery } from "@/utils/queryService";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

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

    const hashedPassword = await bcrypt.hash(password, 10);

    const checkPasswordQuery = `SELECT password FROM "Users" WHERE password='${hashedPassword}';`;

    const isPasswordValid = await runQuery(checkPasswordQuery);

    console.log(isPasswordValid);

    if (isPasswordValid.length == 0) {
      return new NextResponse(
        JSON.stringify({ error: "Нууц үг буруу байна!" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new NextResponse(
      JSON.stringify({
        message: "Амжилттай нэвтэрлээ!",
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Алдаа гарлаа:", err);
    return new NextResponse(
      JSON.stringify({ error: "Серверийн алдаа гарлаа!" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
