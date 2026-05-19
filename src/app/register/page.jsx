"use client";

import Link from "next/link";
import { useState } from "react";

import { authClient } from "@/lib/auth-client";

import { FcGoogle } from "react-icons/fc";

import {
    Button,
    Card,
    Input,
    Separator,
} from "@heroui/react";

export default function RegisterPage() {

    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    // Handle Register
    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.photo.value;
        const password = form.password.value;
        setError("");

        // Password Validation
        if (password.length < 6) {
            return setError(
                "Password must be at least 6 characters long."
            );
        }

        if (!/[A-Z]/.test(password)) {
            return setError(
                "Password must contain at least one uppercase letter."
            );
        }

        if (!/[a-z]/.test(password)) {
            return setError(
                "Password must contain at least one lowercase letter."
            );
        }

        try {

            setLoading(true);

            const { data, error } =
                await authClient.signUp.email(
                    {
                        name,
                        email,
                        password,
                        image,
                    }
                );

            // Better Auth Error
            if (error) {
                setError(error.message);

                return;
            }

            console.log(data);

            // Success
            alert("Registration Successful!");

            // Reset Form
            form.reset();

        } catch (err) {

            console.log(err);

            setError("Something went wrong.");

        } finally {

            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen bg-[#f7f7fc] flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-md">

                {/* Card */}
                <Card className="shadow-2xl border border-gray-100 rounded-3xl">

                    <div className="p-8 sm:p-10">

                        {/* Heading */}
                        <div className="text-center">

                            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a]">
                                Please Register !
                            </h1>

                            <p className="mt-3 text-gray-500 leading-7">
                                Register and start booking your perfect study room.
                            </p>
                        </div>

                        {/* Form */}
                        <form
                            onSubmit={handleRegister}
                            className="mt-10 space-y-6"
                        >

                            {/* Name */}
                            <Input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                variant="bordered"
                                radius="lg"
                                size="lg"
                                isRequired
                                className="w-full"
                                classNames={{
                                    base: "w-full",
                                    mainWrapper: "w-full",
                                    inputWrapper:
                                        "w-full h-14 border border-gray-200 hover:border-purple-500 focus-within:border-purple-500",
                                }}
                            />

                            {/* Email */}
                            <Input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                variant="bordered"
                                radius="lg"
                                size="lg"
                                isRequired
                                className="w-full"
                                classNames={{
                                    base: "w-full",
                                    mainWrapper: "w-full",
                                    inputWrapper:
                                        "w-full h-14 border border-gray-200 hover:border-purple-500 focus-within:border-purple-500",
                                }}
                            />

                            {/* Photo URL */}
                            <Input
                                type="text"
                                name="photo"
                                placeholder="Enter photo URL"
                                variant="bordered"
                                radius="lg"
                                size="lg"
                                isRequired
                                className="w-full"
                                classNames={{
                                    base: "w-full",
                                    mainWrapper: "w-full",
                                    inputWrapper:
                                        "w-full h-14 border border-gray-200 hover:border-purple-500 focus-within:border-purple-500",
                                }}
                            />

                            {/* Password */}
                            <Input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                variant="bordered"
                                radius="lg"
                                size="lg"
                                isRequired
                                className="w-full"
                                classNames={{
                                    base: "w-full",
                                    mainWrapper: "w-full",
                                    inputWrapper:
                                        "w-full h-14 border border-gray-200 hover:border-purple-500 focus-within:border-purple-500",
                                }}
                            />

                            {/* Password Requirements */}
                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm text-gray-600 leading-7">

                                <p>Password must contain:</p>

                                <ul className="list-disc ml-5 mt-2">
                                    <li>At least 6 characters</li>
                                    <li>At least one uppercase letter</li>
                                    <li>At least one lowercase letter</li>
                                </ul>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
                                    {error}
                                </div>
                            )}

                            {/* Register Button */}
                            <Button
                                type="submit"
                                size="lg"
                                radius="lg"
                                isLoading={loading}
                                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold h-14"
                            >
                                Register
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

                        {/* Google Register */}
                        <Button
                            size="lg"
                            radius="lg"
                            variant="bordered"
                            className="w-full border-gray-200 font-semibold h-14"
                            startContent={
                                <FcGoogle className="text-2xl" />
                            }
                        >
                            Continue with Google
                        </Button>

                        {/* Login Link */}
                        <p className="text-center text-gray-500 mt-8">
                            Already have an account?{" "}

                            <Link
                                href="/login"
                                className="text-purple-600 font-semibold hover:underline"
                            >
                                Login
                            </Link>
                        </p>

                    </div>
                </Card>
            </div>
        </section>
    );
}