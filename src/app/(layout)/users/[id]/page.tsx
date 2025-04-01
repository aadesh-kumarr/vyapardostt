"use client";

import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { UserDetailSkeleton } from "@/components/manual/skeletons";
export default function UserDetailPageWrapper() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <UserDetailPage />
    </QueryClientProvider>
  );
}

function UserDetailPage() {
  const { id } = useParams(); // Get the id from the route parameters

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["get-user", id],
    queryFn: async () => {
      const res = await fetch(`/api/get-user/${id}`);
      if (!res.ok) {
        console.error("Failed to fetch user:", res.statusText); // Log error details
        throw new Error("Failed to fetch user");
      }
      return res.json();
    },
    enabled: !!id, // Only fetch when `id` is available
  });

  if (isLoading) {
    return <UserDetailSkeleton />;
  }

  if (error) {
    console.error("Error loading user:", error); // Log the error for debugging
    return <p>Error loading user.</p>;
  }

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardHeader>User Details</CardHeader>
        </CardHeader>
        <CardContent className="space-y-4 flex flex-col">
          <strong>Name:</strong> {user.name}
          <strong>Email:</strong> {user.email}
          <strong>Phone:</strong> {user.phoneNumber}
        </CardContent>
      </Card>
    </div>
  );
}
