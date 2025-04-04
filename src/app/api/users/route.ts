import { runQuery } from "@/utils/queryService";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const getAllUser = `SELECT * FROM "Users" INNER JOIN "BankCards" ON "Users"."id" = "BankCards"."userId";`;
    const allUsers = await runQuery<any>(getAllUser);

    if (allUsers.length === 0) {
      return new NextResponse(JSON.stringify({ error: "No users found" }), {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(allUsers), {
      status: 200,
    });
  } catch (err) {
    console.error("Failed to run query:", err);
    return new NextResponse(JSON.stringify({ error: "Failed to run query" }), {
      status: 500,
    });
  }
}
