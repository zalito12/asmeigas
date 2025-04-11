import Image from 'next/image';
import { Gear } from './page';

interface GearImagesProps {
  selected?: Gear;
}

export default function GearImages({ selected }: GearImagesProps) {
  if (!selected || !selected.imagesCollection?.items?.length) {
    return <></>;
  }

  return (
    <div className="w-full flex flex-row gap-6 lg:gap-8 mt-8 lg-mt-12 overflow-x-auto">
      {selected.imagesCollection.items.map((image) => (
        <Image
          key={image.url}
          alt={image.title}
          src={image.url}
          width={300}
          height={300}
          className="w-auto h-72 object-contain"
        />
      ))}
    </div>
  );
}
