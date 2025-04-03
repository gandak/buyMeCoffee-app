import { runQuery } from "@/utils/queryService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest, // This parameter is required
  { params }: { params: { userId: string } }
): Promise<NextResponse> {
  const { userId } = params;

  if (!userId) {
    try {
      const getAllUser = `SELECT * FROM "Users"`;

      const allUser = await runQuery(getAllUser);

      if (allUser.length <= 0) {
        return new NextResponse(JSON.stringify({ error: "user not found" }), {
          status: 404,
        });
      }

      return new NextResponse(JSON.stringify({ data: allUser }), {
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

  try {
    const getUser = `SELECT * FROM "Users" WHERE id=$1;`;

    const foundUser = await runQuery(getUser, [userId]);

    if (foundUser.length <= 0) {
      return new NextResponse(JSON.stringify({ error: "user not found" }), {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify({ foundUser: foundUser[0] }), {
      status: 200,
    });
  } catch (err) {
    console.error("Failed to run query:", err);
    return new NextResponse(JSON.stringify({ error: "Failed to run query" }), {
      status: 500,
    });
  }
}
