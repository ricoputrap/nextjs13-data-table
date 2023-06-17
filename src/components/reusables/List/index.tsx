import React from 'react'

interface Props {
  items: {
    id: number;
    name: string;
  }[];
}

const List: React.FC<Props> = ({ items }) => {
  return (
    <div className="flex flex-col gap-3">
      {items.map(item => (
        <div key={ item.id } className="p-2 bg-slate-400">
          { item.name }
        </div>
      ))}
    </div>
  )
}

export default List