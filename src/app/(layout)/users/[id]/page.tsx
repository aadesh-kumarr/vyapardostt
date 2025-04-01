"use client";

import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";

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

  const { data: user, isLoading, error } = useQuery({
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

  if (isLoading) return <p>Loading...</p>;
  if (error) {
    console.error("Error loading user:", error); // Log the error for debugging
    return <p>Error loading user.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phoneNumber}</p>
    </div>
  );
}
