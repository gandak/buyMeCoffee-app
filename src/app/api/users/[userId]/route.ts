import { runQuery } from "@/utils/queryService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params?: { userId?: string } } // Ensure params can be optional
): Promise<NextResponse> {
  const userId = context.params?.userId; // Safely access userId

  if (!userId) {
    try {
      const getAllUser = `SELECT * FROM "Users"`;
      const allUsers = await runQuery(getAllUser);

      if (allUsers.length === 0) {
        return new NextResponse(JSON.stringify({ error: "No users found" }), {
          status: 404,
        });
      }

      return new NextResponse(JSON.stringify({ data: allUsers }), {
        status: 200,
      });
    } catch (err) {
      console.error("Failed to run query:", err);
      return new NextResponse(
        JSON.stringify({ error: "Failed to run query" }),
        {
          status: 500,
        }
      );
    }
  }

  // Fetch user by ID
  try {
    const getUser = `SELECT * FROM "Users" WHERE id=$1;`;
    const foundUser = await runQuery(getUser, [userId]);

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
