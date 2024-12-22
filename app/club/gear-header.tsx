'user client';

import Cap from '@/components/icons/cap';
import Hoodie from '@/components/icons/hoodie';
import Slip from '@/components/icons/slip';
import TiraAncha from '@/components/icons/tira-ancha';
import TiraFina from '@/components/icons/tira-fina';
import { Shirt } from 'lucide-react';
import { Gear, GearId } from './gear-list';
import { ReactNode } from 'react';

interface GearHeaderProps {
  selected: Gear;
  gear: Gear[];
  onChange: (gear: Gear) => void;
}

const GearIcon: { [key in GearId]: ReactNode } = {
  camiseta: <Shirt className="w-6 h-6" />,
  sudadera: <Hoodie className="w-6 h-6" />,
  gorro: <Cap className="w-6 h-6" />,
  fina: <TiraFina className="w-6 h-6" />,
  ancha: <TiraAncha className="w-6 h-6" />,
  slip: <Slip className="w-6 h-6" />,
};

export default function GearHeader({ gear, selected, onChange }: GearHeaderProps) {

  return (
    <div className="w-full flex flex-row gap-2 text-sm text-muted-foreground flex-wrap">
      {gear.map((g) => (
        <button
          key={g.id}
          className={`bg-background hover:bg-background/60 flex flex-row p-2 gap-2 ${
            g.id === selected.id ? 'bg-background/60' : ''
          }`}
          onClick={() => onChange(g)}
        >
          {GearIcon[g.id]}
          {g.label}
        </button>
      ))}
    </div>
  );
}
