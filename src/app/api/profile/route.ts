import { runQuery } from "@/utils/queryService";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const {
      name,
      about,
      avatarImage,
      socialMediaURL,
      backgroundImage,
      successMessage,
    } = await req.json();

    // const checkUserQuery = `SELECT * FROM "Profile" WHERE id='${userId}';`;

    // const user = await runQuery(checkUserQuery);

    // if (!user.length) {
    //   return new NextResponse(
    //     JSON.stringify({ error: "Хэрэглэгч олдсонгүй" }),
    //     {
    //       status: 404,
    //       headers: { "Content-Type": "application/json" },
    //     }
    //   );
    // }

    const createUserProfileQuery = `
        INSERT INTO "Profiles" (name, about, avatarimage, socialmediaurl, backgroundimage)
        VALUES ($1, $2, $3, $4, $5);
      `;

    const userProfile = await runQuery(createUserProfileQuery, [
      name,
      about,
      avatarImage,
      socialMediaURL,
      backgroundImage,
    ]);

    console.log(userProfile);

    return new NextResponse(
      JSON.stringify({
        message: "Амжилттай хэрэглэгч нэмэгдлээ!",
        profile: userProfile,
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
