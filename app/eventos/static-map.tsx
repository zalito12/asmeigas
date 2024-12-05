import Image from 'next/image';
import Link from 'next/link';

const API_KEY = process.env.GOOGLE_MAPS_API;

interface StaticMapProps {
  name: string;
  location: { lat: number; lon: number };
  width?: number;
  height?: number;
}

export default function StaticMap(props: StaticMapProps) {
  const { location, name } = props;
  const width = props.width || 400;
  const height = props.height || 400;
  const where = location.lat + ',' + location.lon;

  return (
    <Link
      href={`https://www.google.com/maps/search/?api=1&query=${where}`}
      target="_blank"
    >
      <Image
        className="overflow-hidden mx-auto object-cover"
        style={{ height: `${height}px` }}
        width={width}
        height={height}
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${where}&zoom=16&size=${width}x${height}&key=${API_KEY}&markers=color:red|${where}`}
        alt={name}
      />
    </Link>
  );
}
