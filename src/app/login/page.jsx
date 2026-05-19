"use client";

import { Button, Card, Input, Separator } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
export default function LoginPage() {
  const router=useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    const { data, error } = await authClient.signIn.email({
      email,
      password
    })
    // if (error) {
    //   toast.error(error.message || "Login failed");
    //   return;
    // }
    // toast.success("Login successful");
    router.push("/")


  }
  return (
    <section className="min-h-screen bg-[#f7f7fc] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md">

        {/* Card */}
        <Card className="shadow-2xl border border-gray-100 rounded-3xl">
          <div className="p-8 sm:p-10">

            {/* Heading */}
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a]">
                Welcome Back
              </h1>

              <p className="mt-3 text-gray-500 leading-7">
                Login to continue booking your perfect study room.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="mt-10 space-y-6">

              {/* Email */}
              <div>
                <Input
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  radius="lg"
                  size="lg"
                  isRequired
                  className="w-full"
                  classNames={{
                    inputWrapper:
                      "border-gray-200 hover:border-purple-500 focus-within:border-purple-500",
                  }}
                />
              </div>

              {/* Password */}
              <div>
                <Input
                  type="password"
                  label="Password"
                  name="password"
                  placeholder="Enter your password"
                  variant="bordered"
                  radius="lg"
                  size="lg"
                  isRequired
                  className="w-full"
                  classNames={{
                    inputWrapper:
                      "border-gray-200 hover:border-purple-500 focus-within:border-purple-500",
                  }}
                />
              </div>

              {/* Error Message Example
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
                Invalid email or password
              </div> */}

              {/* Login Button */}
              <Button
                type="submit"
                size="lg"
                radius="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold"
              >
                Login
              </Button>
            </form>

            {/* Divider */}
            <div className="my-8">
              <Separator className="my-4" />

              <div className="flex justify-center -mt-3">
                <span className="bg-white px-4 text-sm text-gray-500">
                  OR
                </span>
              </div>
            </div>

            {/* Google Login */}
            <Button
              size="lg"
              radius="lg"
              variant="bordered"
              className="w-full border-gray-200 font-semibold"
              startContent={<FcGoogle className="text-2xl" />}
            >
              Continue with Google
            </Button>

            {/* Register */}
            <p className="text-center text-gray-500 mt-8">
              Don&apos;t have an account?

              <Link
                href="/register"
                className="text-purple-600 font-semibold hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}