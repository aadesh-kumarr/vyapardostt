import { prisma } from "@/prisma";
import { NextResponse } from "next/server";
import { User } from "@/lib/validations/form";

export async function POST(request: Request) {
  try {
    const data: User = await request.json(); // Parse the incoming request body
    console.log("Received data:", data); // Log the received data

    // Use Prisma to create a new user in the database
    const createdUser = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
      },
    });

    return NextResponse.json({ message: "User added successfully", user: createdUser });
  } catch (error) {
    console.error("Error adding user:", error);
    return NextResponse.json({ error: "Failed to add user" }, { status: 500 });
  }
}

