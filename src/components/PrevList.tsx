type PrevListProps = {
  list: string[]
  title: string
}

export default function PrevList({ list }: PrevListProps) {
  const isEmpty = list.length === 0
  return (
    <div>
      {isEmpty ? (
        <p>No items found</p>
      ) : (
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
