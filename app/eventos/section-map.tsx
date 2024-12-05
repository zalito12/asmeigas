import StaticMap from './static-map';

interface SectionMapProps {
  title: string;
  location?: { lat: number; lon: number };
}

export default function SectionMap(props: SectionMapProps) {
  const { title, location } = props;

  if (!location) {
    return;
  }

  return (
    <div className="space-y-8 mx-auto text-center mt-12 md:mt-24">
      <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
        Vémonos na auga...
      </div>
      <StaticMap location={location} name={title} width={650} height={370} />
    </div>
  );
}
