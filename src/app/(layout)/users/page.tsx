"use client";

import { useQuery } from "@tanstack/react-query";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
  ColumnDef,
} from "@tanstack/react-table";
import { Card } from "@/components/ui/card"; // Adjust the import path as needed
import Link from "next/link"; // Import Link for navigation

export default function UsersPage() {
  return <Users />;
}

function Users() {
  const { data: users = [], isLoading, error } = useQuery({
    queryKey: ["get-users"],
    queryFn: async () => {
      const res = await fetch("/api/get-users");
      if (!res.ok) {
        console.error("Failed to fetch users:", res.statusText); // Log error details
        throw new Error("Failed to fetch users");
      }
      const data = await res.json();
      console.log("Data received:", data); // Log the data for debugging
      return data; // Ensure the parsed JSON is returned
    },
  });

  interface User {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
  }

  const columnHelper = createColumnHelper<User>();

  const columns: ColumnDef<User, any>[] = [
    columnHelper.accessor("name", {
      header: () => "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
      header: () => "Email",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("phoneNumber", {
      header: () => "Phone",
      cell: (info) => info.getValue(),
    }),
  ];

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) {
    console.error("Error loading users:", error); // Log the error for debugging
    return <p>Error loading users.</p>;
  }

  return (
    <div>
      <Card className="p-4">
        <table className="border-collapse border border-gray-300 w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="border p-2">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="border p-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
                <td className="border p-2">
                  <Link href={`/users/${row.original.id}`}>
                    <div className="text-blue-500 underline">View</div>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
