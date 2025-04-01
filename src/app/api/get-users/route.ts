import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

// API to get all users
export async function GET(request: Request) {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phoneNumber: true, // Ensure phoneNumber is included
      },
    });
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error); // Add logging for debugging
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
