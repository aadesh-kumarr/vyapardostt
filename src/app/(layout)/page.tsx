import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MdGroups2 } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { HomeSkeleton } from "@/components/manual/skeletons";
export default function Home() {
  const isLoading = false; // Replace with actual loading state

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
          {isLoading ? (
            <HomeSkeleton />
          ) : (
            <>
              <Card>
                <Link href="/users">
                  <CardHeader>
                    <div className="text-blue-500 mb-4">
                      <MdGroups2 className="w-8 h-8" />
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
                      <IoIosAddCircleOutline className="w-8 h-8" />
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
            </>
          )}
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
