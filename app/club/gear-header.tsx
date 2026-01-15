'use client';

import Image from 'next/image';
import { Gear } from './page';

interface GearHeaderProps {
  selected?: Gear;
  gear: Gear[];
  onChange: (gear: Gear) => void;
}

export default function GearHeader({
  gear,
  selected,
  onChange,
}: GearHeaderProps) {
  return (
    <div className="w-full flex flex-row gap-2 text-sm text-muted-foreground flex-wrap">
      {gear.map((g) => (
        <button
          key={g.label}
          className={`bg-background hover:bg-background/60 flex flex-row p-2 gap-2 ${
            g === selected ? 'bg-background/60' : ''
          }`}
          onClick={() => onChange(g)}
        >
          {g.icono && (
            <Image
              src={g.icono.url}
              alt={g.icono.title}
              width={48}
              height={48}
              className="w-6 h-6"
              style={{
                filter:
                  'invert(97%) sepia(64%) saturate(1018%) hue-rotate(162deg) brightness(109%) contrast(104%)',
              }}
            />
          )}
          {g.label}
        </button>
      ))}
    </div>
  );
}
