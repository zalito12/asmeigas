import { Gear } from "./gear-list";

interface GearDetailProps {
    selected: Gear;
}

export default function GearDetail({ selected }: GearDetailProps) {
  return (
    <div className="w-full flex flex-col items-end mt-6">
      <div className="text-xl text-background font-bold">{selected.name}</div>
      <div className="max-w-full text-muted-foreground/75 lg:max-w-2xl text-right">
        {selected.description}
      </div>
      <div className="text-lg font-bold">{selected.price}€</div>
    </div>
  );
}
