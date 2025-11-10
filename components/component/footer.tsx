import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 bg-muted p-6 md:py-12 w-full">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 text-sm items-end">
        <div className="grid gap-1">
          <h3 className="font-semibold">Contacto</h3>
          <Link href="mailto:info@asmeigas.es" target="_blank" prefetch={false}>
            info@asmeigas.es
          </Link>
          {/* <Link href="tel:+34123456789" target="_blank" prefetch={false}>
          +34 123 456 789
        </Link> */}
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Redes</h3>
          <Link href="https://www.instagram.com/natacionasmeigas" target="_blank" prefetch={false}>Instagram</Link>
        </div>
        <div className="grid gap-1">
          <div className='font-semibold flex gap-2'>
            <span className='text-2xl'>&copy;</span> Club Natación As Meigas
          </div>
        </div>
        <div>
          <Image
            src="/logo_deporte_galego.png"
            width={128}
            height={0}
            alt="Deporte Galego"
          />
        </div>
        <div>
          <Image
            src="/logo_xunta_galicia.png"
            width={128}
            height={0}
            alt="Xunta de Galicia"
          />
        </div>
        <div>
          <Image
            src="/logo_non_violencia.png"
            width={128}
            height={0}
            alt="Non á viloencia de xénero"
          />
        </div>
        <div>
          <Image
            src="/logo_concello_lugo.png"
            width={128}
            height={0}
            alt="Xunta de Galicia"
          />
        </div>
        <div>
          <Image
            src="/logo_deportes_lugo.png"
            width={128}
            height={0}
            alt="Non á viloencia de xénero"
          />
        </div>
      </div>
    </footer>
  );
}
