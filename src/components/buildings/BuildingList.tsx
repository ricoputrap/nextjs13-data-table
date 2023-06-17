/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import useDataStore, { TBuildingItem } from '@/store';
import useGlobalStore from '@/store/useGlobalStore';
import React, { useEffect } from 'react'
import List from '../reusables/List';
import LoadingOverlay from '../reusables/LoadingOverlay';

interface Props {
  items: {
    id: number;
    name: string;
  }[];
}

const BuildingList: React.FC<Props> = ({ items }) => {
  const isLoading = useGlobalStore(state => state.isLoading);
  const buildings: TBuildingItem[] = useDataStore(state => state.buildings);
  const setBuildings = useDataStore(state => state.setBuildings);

  // show 
  useEffect(() => {
    setBuildings(items);
  }, [items]);

  return (
    <>
      {isLoading && <LoadingOverlay />}
      <List items={ buildings } />
    </>
  )
}

export default BuildingList