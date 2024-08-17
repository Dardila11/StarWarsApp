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

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signUp } from "aws-amplify/auth"
import { useFormState } from "react-dom"
import { z } from "zod"

const schemaLogin = z.object({
  email: z.string().email({
    message: "Username must be a valid email address",
  }),
  password: z.string().min(8).max(50, {
    message: "Password must be between 8 and 50 characters",
  }),
})

const INITIAL_STATE = {
  data: null,
}

export async function registerUserAmplifyService(
  email: string,
  password: string
) {
  try {
    await signUp({
      username: email,
      password: password,
    })
  } catch (error) {
    console.error(error)
  }
}

export async function registerUserActionAmplify(
  prevState: any,
  formData: FormData
) {
  console.log("Hello From Register User Action")
  let email = formData.get("email")!.toString()
  let password = formData.get("password")!.toString()

  const validatedFields = schemaLogin.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  })

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Please check the form",
    }
  }

  const responseData = await registerUserAmplifyService(email, password)
}

export default function RegisterForm() {
  const [formState, formAction] = useFormState(
    registerUserActionAmplify,
    INITIAL_STATE
  )

  return (
    <div className="w-full max-w-md">
      <form action={formAction}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Register</CardTitle>
            <CardDescription>
              Enter your details to create a new account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="email" />
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
            <button className="w-full">Register</button>
          </CardFooter>
        </Card>
        <div className="mt-4 text-center text-sm">
          Have an account?
          <Link className="underline ml-2" href="/login">
            Login
          </Link>
        </div>
      </form>
    </div>
  )
}
