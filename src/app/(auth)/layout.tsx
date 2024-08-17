import ConfigureAmplifyClientSide from "@/lib/utils/ConfigureAmplifyClientSide"

type AuthLayoutProps = {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <ConfigureAmplifyClientSide />
      Auth Layout
      {children}
    </div>
  )
}
