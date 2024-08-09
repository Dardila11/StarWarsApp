type ZodErrorsProps = {
  error: string[]
}

export function ZodErrors({ error }: ZodErrorsProps) {
  if (!error) return null
  return error.map((err: string, index: number) => (
    <div key={index} className="text-red-500 text-xs italic ">
      {err}
    </div>
  ))
}
