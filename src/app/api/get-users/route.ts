import { prisma } from "@/prisma";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic"; 
// API to get all users
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phoneNumber: true, // Ensure phoneNumber is included
        createdAt: true, // Include createdAt for dynamic rendering
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
