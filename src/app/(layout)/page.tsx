import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            User Management System
          </h1>
          <p className="text-xl text-gray-600">
            A modern solution for managing user data
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card>
            <Link href="/users">
              <CardHeader>
                <div className="text-blue-500 mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <CardTitle>View Users</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Browse and manage all users in the system
                </CardDescription>
              </CardContent>
            </Link>
          </Card>

          <Card>
            <Link href="/add-user">
              <CardHeader>
                <div className="text-green-500 mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <CardTitle>Add New User</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Create a new user with detailed information
                </CardDescription>
              </CardContent>
            </Link>
          </Card>


        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Built with Next.js, MongoDB Atlas, and modern web technologies
          </p>
        </div>
      </div>
    </main>
  );
}
