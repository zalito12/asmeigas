import Image from 'next/image';
import { pathname } from 'next-extra/pathname';
import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/utils';
import Polaroid from '@/components/component/polaroid';
import ReadMore from '@/components/component/read-more';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Check,
  HeartHandshake,
  Smile,
  Sparkles,
  Trophy,
  WandSparkles,
  WavesLadder,
} from 'lucide-react';
import GearList from './gear-list';
import { draftMode } from 'next/headers';
import { getGear, getPlans, getRules } from '@/lib/contentful/api';
import { DocumentCard } from '@/components/component/document-card';
import { Document } from '@/types/contentful';

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata(pathname());
}

export type Gear = {
  label: string;
  name: string;
  description: string;
  price: number;
  icono: { url: string; title: string };
  imagesCollection?: { items?: { url: string; title: string }[] };
};

export interface PlanModel {
  name: string;
  title: string;
  perks: string[];
  price: number;
  featured: boolean;
  order: number;
}

export default async function ClubPage() {
  const { isEnabled } = draftMode();
  const gearList = (await getGear(isEnabled)) as Gear[];
  // const page = (await getPage(pathname(), isEnabled));
  const plans = (await getPlans(isEnabled)) as PlanModel[];
  const rules = (await getRules(isEnabled)) as Document;

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] grid-rows-1">
            <div className="flex flex-col justify-center items-center">
              {/* <div className="club-description"> */}
              {/*     {documentToReactComponents(page.content?.json)} */}
              {/* </div> */}
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Cres na maxia?
                </h1>
                <div className="prose text-primary-foreground/80">
                  <p>
                    As Meigas xurde da paixón de dúas amigas, por este deporte.
                    En 2024, estas nadadoras experimentadas, con numerosas
                    xornnadas ás súas costas, decidiron crear un club de
                    natación diferente, un espazo onde persoas de todas as
                    idades e niveis puidesen aprender, mellorar e gozar da
                    natación nun ambiente acolledor e familiar.
                  </p>
                  <ReadMore
                    contentConstraints="max-lg:hidden"
                    captionConstraints="lg:hidden"
                  >
                    <p>
                      Cremos que a natación é moito máis que un deporte
                      competitivo. O noso obxectivo non é só superar marcas,
                      aquí, apostamos por fomentar a amizade, o compañeirismo e
                      a superación persoal, sen renunciar á participación en
                      competicións. De feito, a nosa esencia cobra vida na liga
                      máster, unha modalidade accesible para todas as idades e
                      niveis.
                    </p>
                    <p>
                      Dende a súa creación, As Meigas converteuse nunha
                      verdadeira familia. Cada xornada é unha oportunidade para
                      superarnos, compartir momentos especiais e, sobre todo,
                      pasalo ben xuntos. Aínda que a nosa sede está en Lugo, xa
                      contamos con membros que residen en A Coruña, expandindo
                      así o noso espírito pola nosa terra.
                    </p>
                    <p>
                      Se buscas un lugar para iniciarte, mellorar ou simplemente
                      gozar da natación, As Meigas é o teu club. Aquí non
                      importa o nivel, só as ganas de formar parte dun equipo
                      onde o máis importante é compartir a paixón por este
                      deporte.
                    </p>
                    <p>¡Únete a nós e descobre a maxia das Meigas!</p>
                  </ReadMore>
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
                      alt="As Meigas, Alba e Raquel"
                      aria-hidden="true"
                      role="presentation"
                      src="/backn.jpeg"
                      height={350}
                      width={500}
                    />
                  </div>
                  <div className="col-start-1 row-start-1">
                    <Image
                      alt="As Meigas, Alba e Raquel"
                      className="opacity-0 lg:opacity-100 group-hover:opacity-0 transition-all duration-700"
                      src="/frontn.jpeg"
                      height={350}
                      width={500}
                    />
                  </div>
                </div>
              </Polaroid>
            </div>
          </div>
        </div>
      </section>
      <section
        id="price"
        className="w-full py-12 md:py-24 lg:py-32 bg-background"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
                Mergúllate
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Sinteste Meiga?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-base/relaxed lg:text-xl/relaxed ">
                Descobre como formar parte do noso club e contribuir a manter
                viva a nosa esencia, porque en As Meigas todos sumamos!
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl justify-center items-stretch gap-6 py-6 lg:py-12 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`px-4 min-w-[300px] ${plan.featured ? 'scale-110 my-6 lg:my-0' : ''
                  }`}
              >
                <Card
                  className={`h-full flex flex-col relative text-primary-foreground 
                    ${plan.featured ? 'border-muted-foreground shadow-lg' : ''}`}
                >
                  {plan.featured && (
                    <div className="absolute top-0 right-0 bg-muted-foreground text-primary py-0.5 px-2 rounded-bl-[1rem] rounded-tr-xl flex items-center">
                      <Sparkles className="w-4 h-4" />
                      <span className="ml-1 font-sans font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.title}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow text-center mt-2">
                    <div className="flex items-center justify-center gap-x-2">
                      <span className="text-5xl font-bold">{plan.price}€</span>
                      {/* {plan.freq && ( */}
                      {/*   <span className="text-sm font-normal">{plan.freq}</span> */}
                      {/* )} */}
                    </div>
                    <ul className="mt-6 space-y-2">
                      {plan.perks.map((perk, perkIndex) => (
                        <li
                          key={perkIndex}
                          className="flex items-center text-start"
                        >
                          <div className="mr-2 shrink-0">
                            <Check className="w-4 h-4 text-green-500" />
                          </div>
                          <div className="">{perk}</div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <a href="mailto:info@asmeigas.es"><Button className="w-full">Quero isto!</Button></a>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <div className="lg:mt-6 max-w-5xl mx-auto px-4">
            <Card className="text-primary-foreground p-6">
              <div className="w-full flex flex-col md:flex-row  items-center gap-4">
                <div className="flex-grow">
                  <p>
                    Tamén podes facer maxia cun donativo da cantidade que ti
                    queiras
                  </p>
                  <div className="mt-4">
                    <ReadMore caption="+ Saber máis">
                      As donacións axudannos a seguir crecendo e continuar a
                      nosa andanza.
                      <ul className="ml-4 lg:ml-8 ">
                        <li className="flex items-start">
                          <WandSparkles className="w-4 h-4 mx-2 mt-1 shrink-0"></WandSparkles>
                          Acoller a máis meigas
                        </li>
                        <li className="flex items-start">
                          <Trophy className="w-4 h-4 mx-2 mt-1 shrink-0"></Trophy>
                          Axudar cos costes das competicións
                        </li>
                        <li className="flex items-start">
                          <WavesLadder className="w-4 h-4 mx-2 mt-1 shrink-0"></WavesLadder>
                          Mellorar os materiais e acceso a instalacións
                        </li>
                        <li className="flex items-start">
                          <Smile className="w-4 h-4 mx-2 mt-1 shrink-0"></Smile>
                          Sacarnos un sorriso
                        </li>
                      </ul>
                    </ReadMore>
                  </div>
                </div>
                <div className="shrink-0"></div>
                <a
                  className="w-full md:w-auto"
                  target="_blank"
                  href="https://donate.stripe.com/00gcO0b8s4oN6vCfYY"
                >
                  <Button className="w-full flex gap-4 text-md lg:px-8 shrink-0">
                    Doar
                    <HeartHandshake className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm text-muted-foreground">
                Equipación
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Estas son as nosas cores
              </h2>
              <div className="max-w-[900px] text-muted-foreground md:text-base/relaxed lg:text-xl/relaxed ">
                Coñece as cores e equipación meigas para atoparnos máis
                fácilmente na auga, e se che gustan, podes mercar o que queiras
                para apoiarnos e contaxiar o espírito meigo!
              </div>
            </div>
          </div>
          {gearList && <GearList items={gearList} />}
        </div>
      </section>
      <section
        id="xunta"
        className="w-full py-12 md:py-24 lg:py-32 bg-background"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
                Xunta Directiva
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                O consello meigo
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-base/relaxed lg:text-xl/relaxed ">
                Detrás da maxia, hai mans que traballan sen descanso para manter vivo o espírito das Meigas.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-6 lg:py-12">
            <ul className="flex flex-row justify-evenly gap-16 flex-wrap">
              <li className="flex flex-col gap-4 items-center justify-center w-64">
                <Sparkles />
                <h2 className="inline-flex text-3xl font-bold tracking-tighter">Presidenta</h2>
                <h3 className="text-xl font-semibold leading-none tracking-tight text-center">Raquel Soilán Fernández</h3>
              </li>
              <li className="flex flex-col gap-4 items-center justify-center w-64">
                <Sparkles />
                <h2 className="inline-flex text-3xl font-bold tracking-tighter">Vicepresidenta</h2>
                <h3 className="text-xl font-semibold leading-none tracking-tight text-center">Sabela Ben Cillero</h3>
              </li>
              <li className="flex flex-col gap-4 items-center justify-center w-64">
                <Sparkles />
                <h2 className="inline-flex text-3xl font-bold tracking-tighter">Secretaria</h2>
                <h3 className="text-xl font-semibold leading-none tracking-tight text-center">Alba Franco Cal</h3>
              </li>
              <li className="flex flex-col gap-4 items-center justify-center w-64">
                <Sparkles />
                <h2 className="inline-flex text-3xl font-bold tracking-tighter">Tesoureiro</h2>
                <h3 className="text-xl font-semibold leading-none tracking-tight text-center">Alberto Vilariño Fernández</h3>
              </li>
              <li className="flex flex-col gap-4 items-center justify-center w-64">
                <Sparkles />
                <h2 className="inline-flex text-3xl font-bold tracking-tighter">Vogal</h2>
                <h3 className="text-xl font-semibold leading-none tracking-tight text-center">Sara Fernández Barros</h3>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <DocumentCard document={rules} />
          </div>
        </div>
      </section >
    </>
  );
}
