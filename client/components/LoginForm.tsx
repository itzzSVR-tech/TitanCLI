"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Card, CardContent
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { GithubIcon } from "lucide-react";

const loginSchema = z.object({
    email: z.string().min(1, "Email is required").email("Email is invalid"),
    password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
    const router = useRouter();
    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const isPending = form.formState.isSubmitting;

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center justify-center space-y-4">
                <Image src="/login.svg" alt="Login" width={500} height={500} />
                <h1 className="text-6xl font-extrabold text-cyan-400">Welcome Back! to Titan CLI</h1>
                <p className="text-base font-medium text-zinc-400">Login to your account for allowing Device Flow</p>
            </div>
            <Card className='border-dashed border-2'>
                <CardContent>
                    <div className="grid gap-6">
                        <div className="flex flex-col gap-4">
                            <Button
                                variant={"outline"}
                                className="w-full h-full"
                                type="button"
                                onClick={()=>authClient.signIn.social({
                                    provider:"github",
                                    callbackURL:"http://localhost:3000"
                                })}
                            >
                                <GithubIcon className="size-4"/>
                                Continue With GitHub
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}