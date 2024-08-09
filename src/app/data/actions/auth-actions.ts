"use server"
import { z } from "zod"

const schemaLogin = z.object({
  username: z.string().email({
    message: "Username must be a valid email address",
  }),
  password: z.string().min(8).max(50, {
    message: "Password must be between 8 and 50 characters",
  }),
})

export async function loginUserAction(prevState: any, formData: FormData) {
  console.log("Hello From Login User Action")

  const validatedFields = schemaLogin.safeParse({
    username: formData.get("username"),
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
