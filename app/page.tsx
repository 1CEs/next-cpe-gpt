"use client"

import { signIn } from "next-auth/react";
import { Alert, Button } from "@nextui-org/react";
import { ArcticonsOpenaiChatgpt, FlatColorIconsGoogle } from "./components/icon";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
        <div className="flex gap-x-3 text-white text-6xl items-center font-thin">
          <span>CPE</span>
          <ArcticonsOpenaiChatgpt className="animate-pulse" color="#fff" width={150} height={150} />
          <span>GPT</span>
        </div>
        {
          error && <Alert color="danger" tile={"Error"} description={error} />
        }
        <Button className="bg-white font-bold" type="submit" startContent={<FlatColorIconsGoogle />}>Sign-in with Google</Button>
      </form>
    </div>
  )
}
