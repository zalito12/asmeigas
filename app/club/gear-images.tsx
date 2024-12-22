import Image from 'next/image';
import { Gear } from './gear-list';

interface GearImagesProps {
    selected: Gear;
}

export default function GearImages({ selected }: GearImagesProps) {
  
    if (selected.id === 'camiseta') {
      return (
        <div className="w-full flex flex-row gap-6 lg:gap-8 mt-8 lg-mt-12 overflow-x-auto">
          <Image
            alt="Camiseta"
            src="/camiseta_front.jpg"
            width={300}
            height={300}
            className="w-auto h-72 object-cover"
          />
          <Image
            alt="Camiseta"
            src="/camiseta_back.jpg"
            width={300}
            height={300}
            className="w-auto h-72 object-cover"
          />
          <Image
            alt="Ejemplo de camiseta real"
            src="/camiseta_ejemplo.jpeg"
            width={300}
            height={300}
            className="w-auto h-72 object-cover"
          />
        </div>
      );
    }

    if (selected.id === 'sudadera') {
      return (
        <div className="w-full flex flex-row gap-6 lg:gap-8 mt-8 lg-mt-12 overflow-x-auto">
          <Image
            alt="Camiseta"
            src="/camiseta_front.jpg"
            width={300}
            height={300}
            className="w-auto h-72 object-cover"
          />
        </div>
      );
    }

    if (selected.id === 'gorro') {
      return (
        <div className="w-full flex flex-row gap-6 lg:gap-8 mt-8 lg-mt-12 overflow-x-auto">
          <Image
            alt="Gorro natación"
            src="/gorro.jpg"
            width={300}
            height={300}
            className="w-auto h-72 object-cover"
          />
          <Image
            alt="Ejemplo de gorro puesto"
            src="/gorro_ejemplo.jpeg"
            width={300}
            height={300}
            className="w-auto h-72 object-cover"
          />
        </div>
      );
    }

    if (selected.id === 'ancha') {
      return (
        <div className="w-full flex flex-row gap-6 lg:gap-8 mt-8 lg-mt-12 overflow-x-auto">
          <Image
            alt="Bañador tira ancha 1"
            src="/images/gear/banador_tira_ancha.png"
            width={300}
            height={300}
            className="w-auto h-72 object-cover"
          />
          <Image
            alt="Bañador tira ancha 2"
            src="/images/gear/banador_tira_ancha2.png"
            width={300}
            height={300}
            className="w-auto h-72 object-cover"
          />
          <Image
            alt="Bañador tira ancha 3"
            src="/images/gear/banador_tira_ancha3.png"
            width={300}
            height={300}
            className="w-auto h-72 object-cover"
          />
          <Image
            alt="Bañador tira ancha 4"
            src="/images/gear/banador_tira_ancha4.png"
            width={300}
            height={300}
            className="w-auto h-72 object-cover"
          />
        </div>
      );
    }

    if (selected.id === 'fina') {
      return (
        <div className="w-full flex flex-row gap-6 lg:gap-8 mt-8 lg-mt-12 overflow-x-auto">
          <Image
            alt="Bañador tira fina 1"
            src="/images/gear/banador_tira_fina1.png"
            width={300}
            height={300}
            className="w-auto h-72 object-cover"
          />
          <Image
            alt="Bañador tira fina 2"
            src="/images/gear/banador_tira_fina2.png"
            width={300}
            height={300}
            className="w-auto h-72 object-cover"
          />
          <Image
            alt="Bañador tira fina 3"
            src="/images/gear/banador_tira_fina3.png"
            width={300}
            height={300}
            className="w-auto h-72 object-cover"
          />
          <Image
            alt="Bañador tira fina 4"
            src="/images/gear/banador_tira_fina4.png"
            width={300}
            height={300}
            className="w-auto h-72 object-cover"
          />
        </div>
      );
    }

    if (selected.id === 'slip') {
      return (
        <div className="w-full flex flex-row gap-6 lg:gap-8 mt-8 lg-mt-12 overflow-x-auto">
          <Image
            alt="Bañador slip 1"
            src="/images/gear/banador_slip1.png"
            width={300}
            height={300}
            className="w-auto h-72 object-cover"
          />
          <Image
            alt="Bañador slip 2"
            src="/images/gear/banador_slip2.png"
            width={300}
            height={300}
            className="w-auto h-72 object-cover"
          />
          <Image
            alt="Bañador slip 3"
            src="/images/gear/banador_slip3.png"
            width={300}
            height={300}
            className="w-auto h-72 object-cover"
          />
          <Image
            alt="Bañador slip 4"
            src="/images/gear/banador_slip4.png"
            width={300}
            height={300}
            className="w-auto h-72 object-cover"
          />
        </div>
      );
    }

    return <></>;
}
