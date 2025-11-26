import { Blockquote } from '@/components/Blockquote'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { RootLayout } from '@/components/RootLayout'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start ">
        <div className="flex justify-center">
          <FadeIn className="flex-none lg:w-155">
            <StylizedImage
  {...image}
  className="w-full max-w-[700px] justify-center lg:justify-end lg:group-even/section:justify-start"
  shape={2}
/>
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Haarschnitte() {
  return (
    <Section title="Haarschnitte" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Unsere erfahrenen Barbiere schneiden jeden Stil – vom klassischen 
          Business-Cut bis zum modernen Fade. Jeder Haarschnitt beinhaltet eine 
          <strong className="font-semibold text-neutral-950"> professionelle Beratung</strong>, 
          Waschen und Styling mit Premium-Produkten.
        </p>
        <p>
          Wir nehmen uns Zeit für jeden Kunden und arbeiten mit höchster 
          <strong className="font-semibold text-neutral-950"> Präzision</strong>. 
          Ob kurz oder lang – wir kreieren den perfekten Look für deinen Typ 
          und Lifestyle.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Preise
      </h3>
      <List className="mt-8">
        <ListItem title="Herrenschnitt – 35€">
          Klassischer Haarschnitt mit Waschen, Schneiden und Styling. 
          Inkl. Beratung und Finishing mit professionellen Produkten.
        </ListItem>
        <ListItem title="Fade / Undercut – 40€">
          Moderner Fade oder Undercut mit präzisen Übergängen. 
          Perfekt für einen markanten, zeitgemäßen Look.
        </ListItem>
        <ListItem title="Schnitt + Bart – 55€">
          Komplettpaket: Haarschnitt und Bartpflege für einen 
          rundum gepflegten Auftritt.
        </ListItem>
      </List>
    </Section>
  )
}

function Bartpflege() {
  return (
    <Section title="Bartpflege" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Ein gepflegter Bart ist deine Visitenkarte. Unsere Bart-Spezialisten 
          trimmen, formen und pflegen deinen Bart mit höchster 
          <strong className="font-semibold text-neutral-950"> Sorgfalt</strong>. 
          Von der klassischen Konturierung bis zur vollständigen Rasur.
        </p>
        <p>
          Wir verwenden hochwertige Öle und Balsame, die deinen Bart geschmeidig 
          machen und die Haut darunter pflegen. Das Ergebnis: Ein Bart, der nicht 
          nur gut aussieht, sondern sich auch perfekt anfühlt.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Preise
      </h3>
      <TagList className="mt-4">
        <TagListItem>Bart trimmen – 20€</TagListItem>
        <TagListItem>Bart formen & konturieren – 25€</TagListItem>
        <TagListItem>Nassrasur – 30€</TagListItem>
        <TagListItem>Vollbart-Styling – 35€</TagListItem>
      </TagList>

      <Blockquote
        author={{ name: 'Marcus Weber', role: 'Stammkunde seit 2019' }}
        className="mt-12"
      >
        Bester Barbershop in der Stadt! Die Jungs wissen genau, was sie tun. 
        Mein Bart hat noch nie besser ausgesehen.
      </Blockquote>
    </Section>
  )
}

function Zusatzleistungen() {
  return (
    <Section title="Zusatzleistungen" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Neben unseren Hauptleistungen bieten wir verschiedene 
          <strong className="font-semibold text-neutral-950"> Zusatz-Services</strong>, 
          die deinen Besuch bei uns zu einem besonderen Erlebnis machen. 
          Gönne dir etwas Extra-Pflege.
        </p>
        <p>
          Alle Behandlungen können einzeln oder in Kombination mit einem 
          Haarschnitt gebucht werden. Sprich uns einfach an – wir beraten 
          dich gerne über die beste 
          <strong className="font-semibold text-neutral-950"> Kombination</strong> 
          für deine Bedürfnisse.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Weitere Services
      </h3>
      <List className="mt-8">
        <ListItem title="Haarstyling – 15€">
          Professionelles Styling mit Premium-Produkten für besondere Anlässe 
          oder einfach für einen perfekten Tag.
        </ListItem>
        <ListItem title="Augenbrauen zupfen – 10€">
          Formung und Definition der Augenbrauen für einen gepflegten, 
          markanten Blick.
        </ListItem>
        <ListItem title="Grautönung – ab 25€">
          Natürliche Grautönung für ein jüngeres, frischeres Aussehen. 
          Dezent und professionell.
        </ListItem>
        <ListItem title="Kopfhautmassage – 15€">
          Entspannende Massage zur Förderung der Durchblutung und 
          pures Wohlbefinden.
        </ListItem>
      </List>
    </Section>
  )
}

function Pakete() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Unsere Pakete"
        title="Sparpakete für den perfekten Look"
      >
        <p>
          Spare mit unseren beliebten Kombi-Paketen. Alle Pakete beinhalten 
          eine ausführliche Beratung und die Verwendung hochwertiger 
          Pflegeprodukte. Perfekt für alle, die Wert auf Qualität legen.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Classic Gentleman – 50€">
            Herrenschnitt + Bartpflege + Styling. Das perfekte Rundum-Paket 
            für den gepflegten Mann. Spare 10€ gegenüber Einzelbuchung.
          </GridListItem>
          <GridListItem title="Fresh Start – 45€">
            Herrenschnitt + Augenbrauen + Kopfhautmassage. 
            Der ideale Start in die Woche – entspannt und top gestylt.
          </GridListItem>
          <GridListItem title="Premium Grooming – 75€">
            Fade/Undercut + Vollbart-Styling + Nassrasur Kontur + 
            Kopfhautmassage. Unser Luxus-Paket für höchste Ansprüche.
          </GridListItem>
          <GridListItem title="Express Cut – 30€">
            Schneller Schnitt ohne Waschen. Perfekt für die Mittagspause 
            oder wenn es mal schnell gehen muss.
          </GridListItem>
          <GridListItem title="Monatsabo – 120€">
            4 Haarschnitte im Monat für Stammkunden. Immer perfekt gestylt 
            und dabei sparen. Übertragbar auf Freunde oder Familie.
          </GridListItem>
          <GridListItem title="Vater & Sohn – 60€">
            Zwei Herrenschnitte zum Sonderpreis. Quality Time mit dem 
            Nachwuchs – beide verlassen den Salon top gestylt.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Preisliste',
  description:
    'Transparente Preise für erstklassige Herrenfriseur-Dienstleistungen. Von klassischen Haarschnitten bis zur professionellen Bartpflege.',
}

export default function Preisliste() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Preisliste" title="Unsere Leistungen">
        <p>
          Qualität hat ihren Preis – aber bei uns bekommst du mehr für dein Geld. 
          Transparente Preise, keine versteckten Kosten und immer erstklassige 
          Arbeit von erfahrenen Barbieren. Alle Preise inklusive Beratung und 
          hochwertiger Produkte.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Haarschnitte />
        <Bartpflege />
        <Zusatzleistungen />
      </div>

      <Pakete />
    </RootLayout>
  )
}