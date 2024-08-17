"use client"
import { Amplify } from "aws-amplify"
import outputs from "../../../amplify_outputs.json"

type Props = {
  children: React.ReactNode
}

Amplify.configure(outputs)

export default function AmplifyProvider({ children }: Props) {
  return <>{children}</>
}
