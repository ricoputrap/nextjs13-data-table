"use client";
import React, { ChangeEvent, useState, useTransition } from 'react';

type TListItem = {
  name: string;
}
const generateItems = (): TListItem[] => {
  const items: TListItem[] = [];

  for (let i = 0; i < 10000; i++) {
    items.push({ name: `Item ${i + 1}` });
  }

  return items;
}
const items: TListItem[] = generateItems();

const searchItem = (searchTerm: string) => {
  if (!searchTerm)
    return items;
  
  return items.filter(item => item.name.includes(searchTerm));
}

interface Props {
  items: TListItem[];
}
const ListItems: React.FC<Props> = ({ items }) => (
  <div className="p-5 flex flex-col gap-3">
    {items.map(item => (
      <div key={ item.name } className="bg-slate-500 p-5 text-center">
        { item.name }
      </div>
    ))}
  </div>
)

const HugeList = () => {
  const [isPending, startTransition] = useTransition();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const filteredItems: TListItem[] = searchItem(searchTerm);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    
    startTransition(() => {
      setSearchTerm(event.target.value);
    })
  }
  
  return (
    <div className='flex flex-col gap-5'>
      <input
        className="h-10 rounded-lg px-5"
        type="text"
        onChange={ handleSearch }
      />
      {isPending && <div className="text-center">LOADING...</div>}
      <ListItems items={ filteredItems } />
    </div>
  )
}

export default HugeList