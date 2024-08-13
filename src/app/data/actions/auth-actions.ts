"use server"
import { z } from "zod"
import { registerUserService } from "../services/auth-service"

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
}
