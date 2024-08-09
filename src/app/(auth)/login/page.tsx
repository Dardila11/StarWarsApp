import LoginForm from "@/components/forms/LoginForm"

type Props = {
  email: string
  password: string
}

export default function LoginPage({}: Props) {
  return (
    <main>
      <LoginForm />
    </main>
  )
}
