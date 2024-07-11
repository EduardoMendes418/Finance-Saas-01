import Image from "next/image";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export default function PageSignIn() {
  return (
    <div className="min-h-screen grid grid-cols-1 ">
      <div className="h-full  bg-gradient-to-b from-blue-950 to-orange-500 lg:flex flex-col items-center justify-center px-4">
        <div className=" flex flex-col items-center justify-center lg:flex-row mt-24">
          <Image src="/logo.svg" height={100} width={100} alt="Logo" />
          <h1 className="font-semibold text-white text-4xl ml-2.5 mt-4">Finance</h1>
        </div>
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-4xl text-[#FFFF]">Welcome Back!</h1>
          <p className="text-base text-[#f9f9fa]">
            Log in or Create account to get back to your dashboard!
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
    </div>
  );
}
