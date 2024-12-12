import Image from 'next/image';
import { pathname } from 'next-extra/pathname';
import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/utils';
import Polaroid from '@/components/component/polaroid';

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata(pathname());
}

export default async function ClubPage() {
  //const { isEnabled } = draftMode();
  //const homePage = await getHomePage(isEnabled);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] grid-rows-1">
          <div className="flex flex-col justify-center items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                E ti, Cres na maxia?
              </h1>
              <div className="prose text-primary-foreground/80">
                <p>As Meigas xurde da paixón de dúas amigas, por este deporte. En 2024, estas nadadoras experimentadas, con numerosas xornnadas ás súas costas, decidiron crear un club de natación diferente, un espazo onde persoas de todas as idades e niveis puidesen aprender, mellorar e gozar da natación nun ambiente acolledor e familiar.</p>
                <p>Cremos que a natación é moito máis que un deporte competitivo. O noso obxectivo non é só superar marcas, aquí, apostamos por fomentar a amizade, o compañeirismo e a superación persoal, sen renunciar á participación en competicións. De feito, a nosa esencia cobra vida na liga máster, unha modalidade accesible para todas as idades e niveis.</p>
                <p>Dende a súa creación, As Meigas converteuse nunha verdadeira familia. Cada xornada é unha oportunidade para superarnos, compartir momentos especiais e, sobre todo, pasalo ben xuntos. Aínda que a nosa sede está en Lugo, xa contamos con membros que residen en A Coruña, expandindo así o noso espírito pola nosa terra.</p>
                <p>Se buscas un lugar para iniciarte, mellorar ou simplemente gozar da natación, As Meigas é o teu club. Aquí non importa o nivel, só as ganas de formar parte dun equipo onde o máis importante é compartir a paixón por este deporte.</p>
                <p>¡Únete a nós e descobre a maxia das Meigas!</p>
              </div>
            </div>
          </div>
          <div>
            <Polaroid
              className="group flex sticky top-0 md:pt-8 lg:pt-16 justify-center text-primary mx-auto !-rotate-0 md:!-rotate-6"
              caption="As Meigas primixenias, Alba e Raquel"
            >
              <div className="grid">
                <div className="col-start-1 row-start-1">
                  <Image
                    alt="back"
                    src="/back.jpeg"
                    height={600}
                    width={400}
                  />
                </div>
                <div className="col-start-1 row-start-1">
                  <Image
                    alt="front"
                    className="opacity-0 lg:opacity-100 group-hover:opacity-0 transition-all duration-700"
                    src="/front.jpeg"
                    height={600}
                    width={400}
                  />
                </div>
              </div>
            </Polaroid>
          </div>
        </div>
      </div>
    </section>
  );
}
