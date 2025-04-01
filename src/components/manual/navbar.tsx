"use client"
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Navbar() {
  const currentPath = usePathname();

  return (
    <div className="">
      <nav className="bg-gray-800 text-white p-4 flex justify-between flex-col text-center">
        <h1 className="text-lg font-bold mx-auto ">
          User Management For VyaparDost
        </h1>
      </nav>
      <Breadcrumb className="p-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className={currentPath === "/" ? "font-bold text-blue-500" : ""}
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/users"
              className={currentPath.includes("/users") ? "font-bold text-blue-500" : ""}
            >
              User
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
