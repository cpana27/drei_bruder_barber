import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import imageLaptop from '@/images/unnamed.webp'
import imageBarberShop from '@/images/unnamed.webp'
import imageFade1 from '@/images/laptop.jpg'
import imageFade2 from '@/images/work/unnamed.webp'
import imageClassic1 from '@/images/work/unnamed.webp'
import imageBeard1 from '@/images/work/unnamed.webp'
import logoCustomer1 from '@/images/dreibrueder.png'
import heroImage from '@/images/dreibrueder.png'
import { RootLayout } from '@/components/RootLayout'

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Unsere Leistungen"
        title="Präzision, Stil und Leidenschaft – Das ist unser Handwerk."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Seit über 15 Jahren sorgen wir dafür, dass Männer gut aussehen und sich 
          noch besser fühlen. Jeder Schnitt ist ein Statement, jede Rasur ein Erlebnis.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="flex-none lg:w-145">
              <StylizedImage
                src={imageBarberShop}
                className="justify-center lg:justify-end"
                shape={2}
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Herrenhaarschnitte">
              Vom klassischen Business-Cut bis zum modernen Fade – unsere Barbiere 
              beherrschen jeden Stil. Mit Präzision und einem Auge fürs Detail 
              kreieren wir den perfekten Look für deinen Typ.
            </ListItem>
            <ListItem title="Bartpflege & Styling">
              Ein gepflegter Bart ist Kunst. Ob Trimmen, Konturieren oder die 
              traditionelle Nassrasur mit heißem Handtuch – wir verwandeln jeden 
              Bart in ein Meisterwerk.
            </ListItem>
            <ListItem title="Fade & Undercut">
              Scharfe Übergänge, cleane Lines und präzise Konturen. Unsere Spezialität 
              sind moderne Fades und Undercuts, die auch nach Wochen noch perfekt sitzen.
            </ListItem>
            <ListItem title="Komplettservice">
              Haarschnitt, Bartpflege und Styling in einem Termin. Wir nehmen uns 
              Zeit für dich und sorgen dafür, dass du den Salon mit einem perfekten 
              Gesamtbild verlässt.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

function WorkPreview() {
  const featuredWorks = [
    {
      title: 'High Fade Perfection',
      category: 'Modern Fade',
      image: imageFade1,
      description: 'Präzise Übergänge und cleane Lines für den modernen Mann.'
    },
    {
      title: 'Classic Gentleman',
      category: 'Business Style',
      image: imageClassic1,
      description: 'Zeitloser Schnitt mit Seitenscheitel für jeden Anlass.'
    },
    {
      title: 'Beard Mastery',
      category: 'Bartpflege',
      image: imageBeard1,
      description: 'Professionelles Grooming mit scharfen Konturen.'
    },
    {
      title: 'Urban Style',
      category: 'Textured Cut',
      image: imageFade2,
      description: 'Lässig, modern und voller Charakter.'
    },
  ]

  return (
    <div className="mt-24 sm:mt-32 lg:mt-40">
      <Container>
        <FadeIn>
          <h2 className="font-display text-3xl font-semibold text-neutral-950">
            Unsere Arbeiten
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Ein Blick auf unsere besten Cuts – Qualität, die für sich spricht.
          </p>
        </FadeIn>
        
        {/* ÄNDERUNG HIER: Das div wurde entfernt und die Klassen auf FadeInStagger übertragen */}
        <div className="mt-10">
          <FadeInStagger 
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" 
            faster
          >
            {featuredWorks.map((work, index) => (
              <FadeIn key={index}>
                <div className="group relative overflow-hidden rounded-3xl bg-neutral-100 h-full"> {/* h-full hinzugefügt für gleiche Höhe */}
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm font-semibold opacity-90">{work.category}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold">
                      {work.title}
                    </h3>
                    <p className="mt-2 text-sm opacity-80">{work.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
        
        <FadeIn>
          <div className="mt-10 flex justify-center">
            <Button href="/work">Alle Arbeiten ansehen</Button>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

function PricingPreview() {
  const services = [
    { name: 'Herrenschnitt', price: '35€', duration: '40 Min' },
    { name: 'Fade / Undercut', price: '40€', duration: '45 Min' },
    { name: 'Bart trimmen', price: '20€', duration: '20 Min' },
    { name: 'Schnitt + Bart', price: '55€', duration: '60 Min' },
  ]

  return (
    <div className="mt-24 sm:mt-32 lg:mt-40">
      <Container>
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-x-12">
          <FadeIn className="lg:w-1/2">
            <h2 className="font-display text-3xl font-semibold text-neutral-950">
              Transparente Preise
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Qualität hat ihren Preis – aber bei uns bekommst du mehr für dein Geld. 
              Keine versteckten Kosten, nur erstklassige Arbeit.
            </p>
            <div className="mt-8">
              <Button href="/preisliste">Zur vollständigen Preisliste</Button>
            </div>
          </FadeIn>
          
          <FadeIn className="mt-10 lg:mt-0 lg:w-1/2">
            <div className="rounded-3xl bg-neutral-50 p-8 ring-1 ring-neutral-950/5">
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center justify-between pb-6 border-b border-neutral-200 last:border-0 last:pb-0">
                    <div>
                      <p className="font-semibold text-neutral-950">{service.name}</p>
                      <p className="text-sm text-neutral-600">{service.duration}</p>
                    </div>
                    <p className="text-2xl font-semibold text-neutral-950">{service.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  )
}

function Stats() {
  const stats = [
    { label: 'Jahre Erfahrung', value: '15+' },
    { label: 'Zufriedene Kunden', value: '5000+' },
    { label: 'Schnitte pro Woche', value: '200+' },
    { label: 'Team Barbiere', value: '6' },
  ]

  return (
    <div className="mt-24 sm:mt-32 lg:mt-40">
      <Container>
        <FadeIn>
          <div className="rounded-4xl bg-neutral-800 px-6 py-20 sm:px-12 lg:px-20">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-display text-4xl font-semibold text-white sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-neutral-400 sm:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

function WhyUs() {
  return (
    <>
      <SectionIntro
        title="Warum Gentlemen's Cut?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Wir sind mehr als nur ein Friseursalon – wir sind ein Ort, an dem 
          Männer entspannen, abschalten und sich verwandeln lassen können. 
          Qualität, Erfahrung und Leidenschaft in jedem Schnitt.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <FadeIn className="flex">
            <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                Erfahrene Barbiere
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Unser Team besteht aus leidenschaftlichen Profis mit langjähriger 
                Erfahrung. Jeder Barbier bildet sich kontinuierlich weiter und 
                kennt die neuesten Trends und Techniken.
              </p>
              <p className="mt-4 text-sm font-semibold text-neutral-950">
                Über 15 Jahre Expertise
              </p>
            </article>
          </FadeIn>

          <FadeIn className="flex">
            <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                Premium Produkte
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Wir arbeiten ausschließlich mit hochwertigen Produkten von 
                führenden Marken. Von Pflegeprodukten bis zu Styling-Tools – 
                nur das Beste für unsere Kunden.
              </p>
              <p className="mt-4 text-sm font-semibold text-neutral-950">
                Qualität, die man spürt
              </p>
            </article>
          </FadeIn>

          <FadeIn className="flex">
            <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                Persönliche Beratung
              </h3>
              <p className="mt-4 text-base text-neutral-600">
                Jeder Kunde ist einzigartig. Wir nehmen uns Zeit für eine 
                ausführliche Beratung und finden gemeinsam den perfekten Stil, 
                der zu dir und deinem Lifestyle passt.
              </p>
              <p className="mt-4 text-sm font-semibold text-neutral-950">
                Individuell & persönlich
              </p>
            </article>
          </FadeIn>
        </FadeInStagger>
      </Container>
    </>
  )
}

function InstagramFeed() {
  return (
    <div className="mt-24 sm:mt-32 lg:mt-40">
      <Container>
        <FadeIn>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display text-3xl font-semibold text-neutral-950">
                Folge uns auf Instagram
              </h2>
              <p className="mt-2 text-lg text-neutral-600">
                @gentlemenscut_dortmund
              </p>
            </div>
            <Button href="https://instagram.com" target="_blank">
              Folgen
            </Button>
          </div>
        </FadeIn>
        
        <FadeIn>
          <p className="mt-6 text-base text-neutral-600">
            Bleib auf dem Laufenden mit den neuesten Styles, Behind-the-Scenes 
            und exklusiven Angeboten. Tagge uns in deinen Posts für eine Chance, 
            gefeatured zu werden!
          </p>
        </FadeIn>
      </Container>
    </div>
  )
}

export const metadata = {
  description:
    'Gentlemen\'s Cut – Ihr Premium Barbershop in Köln. Herrenhaarschnitte, Bartpflege und Styling auf höchstem Niveau.',
}

export default function Home() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
  {/* Grid Container: Auf Mobile 1 Spalte, ab Desktop (lg) 2 Spalten */}
  <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 lg:items-center">
    
    {/* Linke Spalte: Text */}
    <FadeIn className="max-w-2xl">
      <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
        Premium Barbershop im Herzen von Köln.
      </h1>
      <p className="mt-6 text-xl text-neutral-600">
        Willkommen bei Gentlemen's Cut – wo traditionelles Handwerk auf 
        modernen Stil trifft. Seit 2009 kreieren wir Looks, die Männer 
        selbstbewusst durchs Leben gehen lassen.
      </p>
      <div className="mt-10 flex gap-4">
        <Button href="/work">
          Unsere Arbeiten
        </Button>
      </div>
    </FadeIn>

    {/* Rechte Spalte: Bild */}
    {/* Wir nutzen FadeIn, damit Bild und Text gleichzeitig erscheinen */}
    <FadeIn>
      <div className="relative max-w-lg mx-auto">
        <StylizedImage
          src={heroImage} // Hier dein Bild einfügen
          alt="Barbershop Interior oder Haarschnitt"
          shape={0} // Shape 1 (abgeschrägte Ecken) passt super als Hero
        />
      </div>
    </FadeIn>

  </div>
</Container>

      <Stats />

      <Services />

      <WorkPreview />

     
      <PricingPreview />

      <WhyUs />

 <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Stefan M.', logo: logoCustomer1 }}
      >
        Bester Barbershop in Dortmund! Die Jungs wissen genau, was sie tun. 
        Ich komme seit 3 Jahren hierher und wurde noch nie enttäuscht. 
        Professionell, entspannt und das Ergebnis ist immer top.
      </Testimonial>

      <InstagramFeed />

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-4xl bg-neutral-800 py-24 px-6 sm:px-12 lg:px-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
                Bereit für deinen neuen Look?
              </h2>
              <p className="mt-6 text-lg text-neutral-300">
                Buche jetzt deinen Termin online oder ruf uns an. Wir freuen uns 
                auf deinen Besuch bei Gentlemen's Cut.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:+4923112345678"
                 className="inline-flex justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-neutral-950 hover:bg-neutral-100 transition"
                >
                  0231 / 123 456 78
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}