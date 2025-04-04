import { runQuery } from "@/utils/queryService";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { userId: string } }
): Promise<NextResponse> {
  const userId = context.params.userId;

  try {
    const getUser = `SELECT * FROM "Users" WHERE id=$1;`;
    const foundUser = await runQuery<any>(getUser, [userId]);

    if (foundUser.length === 0) {
      return new NextResponse(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify({ data: foundUser[0] }), {
      status: 200,
    });
  } catch (err) {
    console.error("Failed to run query:", err);
    return new NextResponse(JSON.stringify({ error: "Failed to run query" }), {
      status: 500,
    });
  }
}
