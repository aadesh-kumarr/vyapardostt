import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

// API to get a single user by ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: (params.id) }, // Convert id to a number if it's numeric
      select: {
        id: true,
        name: true,
        email: true,
        phoneNumber: true, // Ensure phoneNumber is included
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching user:", error); // Add logging for debugging
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}
