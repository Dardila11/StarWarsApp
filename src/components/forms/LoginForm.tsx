"use client"

import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { loginUserAction } from "@/app/data/actions/auth-actions"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormState } from "react-dom"

const INITIAL_STATE = {
  data: null,
}

export default function SigninForm() {
  const [formState, formAction] = useFormState(loginUserAction, INITIAL_STATE)

  console.log(formState)
  return (
    <div className="w-full max-w-md">
      <form action={formAction}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Login</CardTitle>
            <CardDescription>
              Enter your details to loginUserAction to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="identifier"
                name="username"
                type="text"
                placeholder="username or email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="password"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <button className="w-full">Login</button>
          </CardFooter>
        </Card>
        <div className="mt-4 text-center text-sm">
          Do not have an account?
          <Link className="underline ml-2" href="signup">
            Register
          </Link>
        </div>
      </form>
    </div>
  )
}
