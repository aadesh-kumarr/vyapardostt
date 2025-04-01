"use client";

import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
  ColumnDef,
} from "@tanstack/react-table";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { UserSkeleton } from "@/components/manual/skeletons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Usertype from "@/lib/types";
import { useState } from "react";

const queryClient = new QueryClient();

export default function Users() {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersList />
    </QueryClientProvider>
  );
}

function UsersList() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const {
    data: users = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["get-users"],
    queryFn: async () => {
      const res = await fetch("/api/get-users", { cache: "no-store" });
      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }
      return res.json();
    },
  });

  const filteredUsers = users.filter((user: Usertype) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    user.phoneNumber.toLowerCase().includes(search.toLowerCase())
  );

  const columnHelper = createColumnHelper<Usertype>();

  const columns: ColumnDef<Usertype, keyof Usertype>[] = [
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
    data: filteredUsers,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return <UserSkeleton />;
  if (error) return <Card>Error loading users.</Card>;

  return (
    <div className="w-full p-4">
      <div className="mb-4 flex items-center gap-4 max-w-4xl mx-auto">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      <Card className="max-w-4xl mx-auto">
        <Table className="w-full text-sm">
          <TableHeader className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="border p-2 text-left">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => router.push(`/users/${row.original.id}`)}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="border p-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
