import { Separator } from "../ui/separator"
export default function Footer(){
    return(
        <div className="pb-5 text-center  w-full">
        <Separator className="max-w-md mx-auto mb-6" />
        <p className="text-gray-600">
          Built with Next.js, MongoDB Atlas, and modern web technologies
        </p>
      </div>
    )
}