"use client"
import RegisterForm from "@/components/forms/RegisterForm"
import { Amplify } from "aws-amplify"
import outputs from "../../../../amplify_outputs.json"
Amplify.configure(outputs)

export default function RegisterPage() {
  return (
    <main>
      <RegisterForm />
    </main>
  )
}
