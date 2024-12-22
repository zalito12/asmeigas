'use client';

import { useState } from 'react';
import GearDetail from './gear-detail';
import GearHeader from './gear-header';
import GearImages from './gear-images';

export type GearId =
  | 'camiseta'
  | 'sudadera'
  | 'gorro'
  | 'fina'
  | 'ancha'
  | 'slip';
export type Gear = {
  id: GearId;
  label: string;
  name: string;
  description: string;
  price: number;
};

const gear: Gear[] = [
  {
    id: 'camiseta',
    label: 'Camiseta',
    name: 'Camiseta As Meigas',
    description:
      'Camiseta de deporte, con material transpirable, logo frontal e traseiro das meigas.',
    price: 18,
  },
  {
    id: 'sudadera',
    label: 'Sudadera',
    name: 'Sudadera As Meigas',
    description:
      'Sudadera de algodón con capucha, bordada có logo das meigas no peito e na parte traseira.',
    price: 40,
  },
  {
    id: 'gorro',
    label: 'Gorro',
    name: 'Gorro natación Club As Meigas',
    description: 'Gorro de natación oficial do club As Meigas',
    price: 12,
  },
  {
    id: 'fina',
    label: 'Tira fina',
    name: 'Bañador muller tira fina',
    description: 'Bañador de muller con tira fina e logo das Meigas.',
    price: 40,
  },
  {
    id: 'ancha',
    label: 'Tira ancha',
    name: 'Bañador muller tira ancha',
    description: 'Bañador de muller con tira ancha e logo das Meigas.',
    price: 40,
  },
  {
    id: 'slip',
    label: 'Slip',
    name: 'Bañador home slip',
    description: 'Bañador de home en formato slip e logo das Meigas.',
    price: 38,
  },
];

export default function GearList() {
  const [selected, setSelected] = useState(gear[0]);

  const handleChange = (g: Gear) => {
    setSelected(g);
  };
  
  return (
    <div className="mx-auto max-w-5xl py-8 lg:py-12">
      <GearHeader
        gear={gear}
        selected={selected}
        onChange={(g) => handleChange(g)}
      />
      <GearImages selected={selected} />
      <GearDetail selected={selected} />
    </div>
  );
}
