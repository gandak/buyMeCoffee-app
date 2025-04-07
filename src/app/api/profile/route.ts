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
      userId,
    } = await req.json();

    if (successMessage) {
      const updateUserSuccessMessageQuery = `
      UPDATE "Profile" SET "successMessage" = $1
      WHERE "userId" = $2
      RETURNING *`;

      const userProfile = await runQuery(updateUserSuccessMessageQuery, [
        successMessage,
        userId,
      ]);

      return new NextResponse(
        JSON.stringify({
          message: "Хэрэглэгчийн нэмэлт мэдээллийг амжилттай шинэчиллээ!",
          profile: userProfile,
        }),
        { status: 201, headers: { "Content-Type": "application/json" } }
      );
    }

    if (backgroundImage) {
      const updateUserSuccessMessageQuery = `
      UPDATE "Profile" SET "backgroundImage" = $1
      WHERE "userId" = $2
      RETURNING *`;

      const userProfile = await runQuery(updateUserSuccessMessageQuery, [
        backgroundImage,
        userId,
      ]);

      return new NextResponse(
        JSON.stringify({
          message: "Хэрэглэгчийн нэмэлт мэдээллийг амжилттай шинэчиллээ!",
          profile: userProfile,
        }),
        { status: 201, headers: { "Content-Type": "application/json" } }
      );
    }

    const updateUserProfileQuery = `
      INSERT INTO "Profile" ("name", "about", "avatarImage", "socialMediaURL", "backgroundImage", "userId")
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *`;

    const userProfile = await runQuery(updateUserProfileQuery, [
      name,
      about,
      avatarImage,
      socialMediaURL,
      backgroundImage,
      userId,
    ]);

    console.log(userProfile);

    return new NextResponse(
      JSON.stringify({
        message: "Хэрэглэгчийн нэмэлт мэдээллийг амжилттай нэмлээ!",
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

export async function PATCH(req: Request): Promise<NextResponse> {
  try {
    const { name, about, socialMediaURL, userId } = await req.json();

    const updateUserProfileQuery = `
      UPDATE "Profile" SET "name" = $1, "about" = $2, "socialMediaURL" = $3
      WHERE "userId" = $4
      RETURNING *`;

    const updatedUserProfile = await runQuery(updateUserProfileQuery, [
      name,
      about,
      socialMediaURL,
      userId,
    ]);

    console.log(updatedUserProfile);

    return new NextResponse(
      JSON.stringify({
        message: "Хэрэглэгчийн нэмэлт мэдээллийг амжилттай нэмлээ!",
        profile: updatedUserProfile,
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
