"use client"

import React from 'react'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import {Spinner} from "@/components/ui/spinner";
import {LoginForm} from "@/components/LoginForm";

const SignInPage = () => {
    const {data , isPending , } = authClient.useSession();
    const router = useRouter();

    if(data?.session && data?.user){
        router.push("/")
    }

    if(isPending){
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <Spinner />
            </div>
        )
    }

    return (
        <LoginForm/>
    )
}
export default SignInPage
