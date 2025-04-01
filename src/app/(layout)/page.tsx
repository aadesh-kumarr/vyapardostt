import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MdGroups2 } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { HomeSkeleton } from "@/components/manual/skeletons";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const isLoading = false; // Replace with actual loading state

  return (
    <main className=" bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto p-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            User Management System
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            A modern solution for managing user data
          </p>
          <Separator className="max-w-md mx-auto mb-8" />
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center  mx-auto">
          {isLoading ? (
            <HomeSkeleton />
          ) : (
            <>
              <Card className="transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
                <Link href="/users" className="block">
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
                    <Button variant="outline" className="mt-4 w-full">
                      View Users
                    </Button>
                  </CardContent>
                </Link>
              </Card>

              <Card className="transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
                <Link href="/add-user" className="block">
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
                    <Button variant="outline" className="mt-4 w-full">
                      Add User
                    </Button>
                  </CardContent>
                </Link>
              </Card>
            </>
          )}
        </div>


      </div>
    </main>
  );
}
