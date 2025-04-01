import { Card,CardHeader,CardContent } from "../ui/card"
import { Skeleton } from "../ui/skeleton"
export function UserSkeleton() {
    return (
        <div>
        <Card className="p-4">
          <table className="border-collapse border border-gray-300 w-full">
            <thead>
              <tr>
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Phone</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index}>
                  <td className="border p-2">
                    <Skeleton className="h-4 w-full" />
                  </td>
                  <td className="border p-2">
                    <Skeleton className="h-4 w-full" />
                  </td>
                  <td className="border p-2">
                    <Skeleton className="h-4 w-full" />
                  </td>
                  <td className="border p-2">
                    <Skeleton className="h-4 w-full" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    )
}

export function HomeSkeleton(){
    return(
        <>
        <Card>
          <CardHeader>
            <Skeleton className="w-8 h-8 mb-4" />
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Skeleton className="w-8 h-8 mb-4" />
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
      </>
    )
}

export function UserDetailSkeleton() {
    return (
        <div className="p-4">
        <Card>
          <CardHeader>
            <CardHeader>User Details</CardHeader>
          </CardHeader>
          <CardContent className="space-y-4 flex flex-col">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/4" />
          </CardContent>
        </Card>
      </div>
    )
}