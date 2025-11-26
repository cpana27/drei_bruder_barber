import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Container } from "@/components/Container"
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'
import imageFade1 from '@/images/work/unnamed.webp'
import imageFade2 from '@/images/work/unnamed.webp'
import imageClassic1 from '@/images/work/unnamed.webp'
import imageBeard1 from '@/images/work/unnamed.webp'
import imageUndercut1 from '@/images/work/unnamed.webp'
import imagePompadour1 from '@/images/work/unnamed.webp'
import logoCustomer1 from '@/images/test2.webp'
import { RootLayout } from '@/components/RootLayout'

const stylingWorks = [
  {
    id: 'high-fade-styling',
    title: 'High Fade mit Textur',
    description: 'Klassischer High Fade mit natürlicher Textur oben.',
    image: imageFade1,
    category: 'Fade',
    details: [
      'Dieser High Fade zeichnet sich durch einen präzisen Übergang aus, der von der Kopfhaut bis zum Deckhaar perfekt verläuft. Das längere Deckhaar wurde texturiert geschnitten, um Bewegung und Definition zu schaffen.',
      'Der Look ist perfekt für moderne Männer, die einen cleanen, professionellen Style mit einem Hauch von Lässigkeit suchen. Die Seiten sind ultra-kurz gehalten, während oben genug Länge für vielseitiges Styling bleibt.',
    ],
    duration: '45 Minuten',
    price: '40€',
  },
  {
    id: 'classic-gentleman-cut',
    title: 'Classic Gentleman Cut',
    description: 'Zeitloser Business-Schnitt mit Seitenscheitel.',
    image: imageClassic1,
    category: 'Klassisch',
    details: [
      'Der Classic Gentleman Cut ist ein zeitloser Stil, der Professionalität und Eleganz ausstrahlt. Mit präzise geschnittenen Seiten und einem stilvollen Seitenscheitel ist dieser Look ideal für geschäftliche Anlässe.',
      'Das Haar wird so geschnitten, dass es sich leicht stylen lässt und den ganzen Tag perfekt sitzt. Mit etwas Pomade oder Matt-Paste lässt sich der Look in wenigen Sekunden kreieren.',
    ],
    duration: '40 Minuten',
    price: '35€',
  },
  {
    id: 'beard-grooming-style',
    title: 'Vollbart Styling & Konturierung',
    description: 'Professionelles Bart-Grooming mit scharfen Konturen.',
    image: imageBeard1,
    category: 'Bartpflege',
    details: [
      'Ein gepflegter Vollbart ist eine Kunstform. Wir trimmen und formen den Bart präzise, um die natürliche Gesichtsform zu betonen. Die Konturen werden scharf definiert, und die Länge wird gleichmäßig angepasst.',
      'Nach dem Trimmen folgt eine Pflege mit hochwertigen Bartölen, die den Bart weich machen und ihm einen gesunden Glanz verleihen. Das Ergebnis ist ein maskuliner, gepflegter Look, der Selbstbewusstsein ausstrahlt.',
    ],
    duration: '30 Minuten',
    price: '35€',
  },
  {
    id: 'undercut-disconnected',
    title: 'Disconnected Undercut',
    description: 'Markanter Undercut mit hartem Übergang.',
    image: imageUndercut1,
    category: 'Modern',
    details: [
      'Der Disconnected Undercut ist einer der markantesten Styles der letzten Jahre. Die Seiten werden sehr kurz geschnitten oder rasiert, während das Deckhaar deutlich länger bleibt – ohne weichen Übergang.',
      'Dieser kontrastreiche Look ist perfekt für Männer, die auffallen wollen. Das längere Deckhaar kann zurückgekämmt, zur Seite gestylt oder auch locker nach vorne fallen gelassen werden. Vielseitig und charakterstark.',
    ],
    duration: '45 Minuten',
    price: '40€',
  },
  {
    id: 'modern-pompadour',
    title: 'Modern Pompadour',
    description: 'Volumöser Pompadour mit seitlichem Fade.',
    image: imagePompadour1,
    category: 'Klassisch-Modern',
    details: [
      'Der Modern Pompadour verbindet klassische Eleganz mit zeitgenössischem Stil. Das Deckhaar wird mit viel Volumen nach hinten gestylt, während die Seiten mit einem Fade versehen werden.',
      'Dieser Look erfordert etwas mehr Stylingzeit, aber das Ergebnis ist es wert: Ein selbstbewusster, stilvoller Auftritt, der garantiert Aufmerksamkeit erregt. Perfekt für besondere Anlässe oder den Alltag.',
    ],
    duration: '50 Minuten',
    price: '45€',
  },
  {
    id: 'low-fade-texture',
    title: 'Low Fade mit Crop',
    description: 'Dezenter Low Fade mit kurzem, texturiertem Top.',
    image: imageFade2,
    category: 'Fade',
    details: [
      'Der Low Fade beginnt tiefer am Kopf und bietet einen subtilen Übergang. Das Deckhaar wird kurz gehalten und texturiert geschnitten, um einen modernen Crop-Style zu kreieren.',
      'Dieser Look ist pflegeleicht und vielseitig – ideal für aktive Männer, die wenig Zeit für Styling haben, aber trotzdem gepflegt aussehen wollen. Ein Klassiker, der nie aus der Mode kommt.',
    ],
    duration: '40 Minuten',
    price: '38€',
  },
]

function WorkGallery() {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Unsere Arbeiten
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {stylingWorks.map((work, index) => (
          <FadeIn key={work.id}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-neutral-100 sm:h-48 lg:h-64">
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      {work.category}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {work.duration}
                    </p>
                    <p className="text-sm font-semibold text-neutral-950 lg:mt-2">
                      {work.price}
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    {work.title}
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {work.details.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Button
                      href="/termin"
                      aria-label={`Termin buchen für ${work.title}`}
                    >
                      Termin buchen
                    </Button>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

function StyleCategories() {
  const categories = [
    {
      name: 'Fade Cuts',
      description: 'Präzise Übergänge in allen Varianten',
    },
    {
      name: 'Klassische Schnitte',
      description: 'Zeitlose Eleganz für jeden Anlass',
    },
    {
      name: 'Modern Styles',
      description: 'Aktuelle Trends und urbane Looks',
    },
    {
      name: 'Bartpflege',
      description: 'Von Trimmen bis zur Vollrasur',
    },
  ]

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Unsere Spezialitäten
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category) => (
            <li key={category.name} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-12 group-nth-[-n+2]:-mt-px sm:group-nth-2:-mt-px lg:group-nth-4:-mt-px">
                  <p className="font-display text-lg font-semibold text-neutral-950">
                    {category.name}
                  </p>
                  <p className="mt-2 text-sm text-neutral-600">
                    {category.description}
                  </p>
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}

export const metadata = {
  title: 'Unsere Arbeiten',
  description:
    'Entdecken Sie unsere besten Haarschnitte und Stylings. Von klassischen Cuts bis zu modernen Fades – Qualität und Präzision in jedem Detail.',
}

export default function Work() {
  return (
    <RootLayout>
      <PageIntro
        eyebrow="Portfolio"
        title="Unsere Handwerkskunst im Detail."
      >
        <p>
          Jeder Haarschnitt ist ein Unikat. Hier zeigen wir eine Auswahl unserer 
          besten Arbeiten – von klassischen Gentleman Cuts bis zu modernen Fades. 
          Überzeuge dich selbst von unserer Präzision und Leidenschaft für Details.
        </p>
      </PageIntro>

      <WorkGallery />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40 mx-auto"
        client={{ name: 'Michael K.', logo: logoCustomer1 }}
      >
        Die Jungs von Gentlemen's Cut sind absolute Profis. Ich war bei vielen 
        Friseuren, aber niemand schneidet so präzise. Der Fade sitzt auch nach 
        drei Wochen noch perfekt. Klare Empfehlung!
      </Testimonial>

      <StyleCategories />

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-4xl bg-neutral-950 py-20 px-6 sm:px-12 lg:px-16">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
                Bereit für deinen Style?
              </h2>
              <p className="mt-6 text-lg text-neutral-300">
                Lass dich von unseren erfahrenen Barbieren beraten und finde 
                deinen perfekten Look. Buche jetzt deinen Termin – wir freuen 
                uns auf dich!
              </p>
              <div className="mt-8">
                <Button href="/termin" invert>
                  Jetzt Termin vereinbaren
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}