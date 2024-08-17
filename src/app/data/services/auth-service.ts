import { signUp } from "aws-amplify/auth"

type RegisterUserProps = {
  email: string
  password: string
}

export async function registerUserAmplifyService(userData: RegisterUserProps) {
  try {
    await signUp({
      username: userData.email,
      password: userData.password,
    })
  } catch (error) {
    console.error(error)
  }
}

export async function registerUserService(userData: RegisterUserProps) {
  // Register user

  try {
    const response = await fetch("http://localhost:8000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...userData }),
      cache: "no-cache",
    })

    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

export async function loginUserService(userData: RegisterUserProps) {
  // Login user

  try {
    const response = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      cache: "no-cache",
    })

    return response.json()
  } catch (error) {
    console.error(error)
  }
}
