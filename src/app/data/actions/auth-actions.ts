"use server"

export async function loginUserAction(prevState: any, formData: FormData) {
  console.log("Hello From Login User Action")

  const fields = {
    username: formData.get("username"),
    password: formData.get("password"),
  }

  return {
    ...prevState,
    data: fields,
  }
}
