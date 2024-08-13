type RegisterUserProps = {
  email: string
  password: string
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
