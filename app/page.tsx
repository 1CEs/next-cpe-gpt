"use client"

import { signIn } from "next-auth/react";
import { Alert, Button } from "@nextui-org/react";
import { ArcticonsOpenaiChatgpt, FlatColorIconsGoogle } from "./components/icon";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Logo from "./components/logo";

export default function Home() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const handleSignIn = async () => {
    try {
      await signIn("google", { redirectTo: "/guard" })
    } catch (error) {
      setError(error as string)
    }

  }
  return (
    <div className="flex justify-center items-center h-full">
      <form
        className="flex flex-col justify-center items-center gap-y-6"
        onSubmit={(e) => {
          e.preventDefault()
          handleSignIn()
        }}
      >
        <Logo />
        {
          error && <Alert color="danger" tile={"Error"} description={error} />
        }
        <div className="flex justify-center items-center gap-x-3">
          <Button
            size="lg"
            className="bg-white font-medium"
            type="submit"
            startContent={<FlatColorIconsGoogle />}>
            Sign-in with Google
          </Button>
          <Image src='https://www.surin.rmuti.ac.th/th/th63/ShowePic/RMUTI2.png' width={60} height={60} alt="RMUTI Logo" />
        </div>

        <p className="text-white/50 flex items-center"><span className="text-danger"></span>We accept only RMUTI education email.</p>
      </form>
    </div>
  )
}
