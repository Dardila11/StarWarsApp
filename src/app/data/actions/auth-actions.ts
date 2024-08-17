"use server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { z } from "zod"
import { registerUserService } from "../services/auth-service"

const config = {
  maxAge: 60 * 60 * 24 * 7,
  path: "/",
  httpOnly: true,
  domain: "localhost",
  secure: process.env.NODE_ENV === "production",
}

const schemaLogin = z.object({
  email: z.string().email({
    message: "Username must be a valid email address",
  }),
  password: z.string().min(8).max(50, {
    message: "Password must be between 8 and 50 characters",
  }),
})

export async function loginUserAction(prevState: any, formData: FormData) {
  console.log("Hello From Login User Action")

  const validatedFields = schemaLogin.safeParse({
    email: formData.get("username"),
    password: formData.get("password"),
  })

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Please check the form",
    }
  }
  return {
    ...prevState,
    data: "ok",
  }
}

// export async function registerUserActionAmplify(
//   prevState: any,
//   formData: FormData
// ) {
//   console.log("Hello From Register User Action")

//   const validatedFields = schemaLogin.safeParse({
//     email: formData.get("email"),
//     password: formData.get("password"),
//   })

//   if (!validatedFields.success) {
//     return {
//       ...prevState,
//       zodErrors: validatedFields.error.flatten().fieldErrors,
//       message: "Missing Fields. Please check the form",
//     }
//   }

//   const responseData = await registerUserAmplifyService(validatedFields.data)
// }

export async function registerUserAction(prevState: any, formData: FormData) {
  console.log("Hello From Register User Action")

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

  const responseData = await registerUserService(validatedFields.data)

  if (!responseData) {
    return {
      ...prevState,
      message: "Something went wrong. Please try again",
    }
  }

  if (responseData.error) {
    return {
      ...prevState,
      message: "Failed to register user. Please try again",
    }
  }

  console.log("User Registered Successfully", responseData)
  cookies().set("jwtToken", responseData.accessToken, config)
  redirect("/favorites")
}
