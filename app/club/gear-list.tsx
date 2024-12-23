'use client';

import { useState } from 'react';
import GearDetail from './gear-detail';
import GearHeader from './gear-header';
import GearImages from './gear-images';
import { Gear } from './page';

interface GearListProps {
  items: Gear[];
}

export default function GearList({ items }: GearListProps) {
  const [selected, setSelected] = useState(items ? items[0] : undefined);

  const handleChange = (g: Gear) => {
    setSelected(g);
  };

  return (
    <div className="mx-auto max-w-5xl py-8 lg:py-12">
      <GearHeader
        gear={items}
        selected={selected}
        onChange={(g) => handleChange(g)}
      />
      <GearImages selected={selected} />
      <GearDetail selected={selected} />
    </div>
  );
}
