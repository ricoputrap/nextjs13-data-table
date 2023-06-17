import { TFloorItem } from '@/store'
import React from 'react'
import List from '../reusables/List';

interface Props {
  floors: TFloorItem[];
}

const FloorList: React.FC<Props> = ({ floors }) => {
  return (
    <div>
      <List items={ floors } />
    </div>
  )
}

export default FloorList