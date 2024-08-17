import { Amplify } from "aws-amplify"
import outputs from "../../../amplify_outputs.json"
Amplify.configure(outputs)

type Props = {
  children: React.ReactNode
}

export default function AmplifyProvider({ children }: Props) {
  return <>{children}</>
}
