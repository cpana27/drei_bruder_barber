import { useId } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

// ELEGANCE & PRECISION SHAPES
// Minimalistische Rechtecke mit feinen Details an den Ecken
const shapes = [
  // Form 0: "Soft Square" - Klassisch abgerundete Ecken (wie ein modernes iPhone)
  {
    width: 600,
    height: 700, // Leichtes Hochformat für Portraits
    // Ein Rechteck mit Radius 40
    path: "M40 0H560C582.091 0 600 17.9086 600 40V660C600 682.091 582.091 700 560 700H40C17.9086 700 0 682.091 0 660V40C0 17.9086 17.9086 0 40 0Z",
  },
  // Form 1: "The Precision Cut" - Technisch abgeschrägte Ecken (wie geschliffenes Glas)
  {
    width: 600,
    height: 700,
    // Ecken sind gerade abgeschnitten (Chamfer), wirkt sehr männlich und technisch
    path: "M40 0H560L600 40V660L560 700H40L0 660V40L40 0Z",
  },
  // Form 2: "The Asymmetric" - Organischer Fluss (oben rechts & unten links rund)
  {
    width: 600,
    height: 700,
    // Mischung aus scharf und weich - sehr dynamisch
    path: "M0 0H540C573.137 0 600 26.8629 600 60V700H60C26.8629 700 0 673.137 0 640V0Z",
  }
]

export function StylizedImage({ shape = 0, className, ...props }) {
  let id = useId()
  // Wählt den Shape basierend auf dem Index
  let { width, height, path } = shapes[shape % shapes.length]

  return (
    <div
      className={clsx(
        className,
        // Wir nehmen den Fokus vom wilden Layout und geben dem Bild Raum
        'group relative flex w-full justify-center', 
      )}
    >
      {/* SUBTILER SCHATTEN 
         Kein "Glow" mehr, sondern ein realistischer, weicher Schatten,
         der das Bild leicht vom Hintergrund abhebt.
      */}
      <div 
        className="absolute inset-0 translate-y-2 scale-[0.98] bg-neutral-900/10 blur-xl transition duration-500 group-hover:translate-y-4 group-hover:bg-neutral-900/20"
        style={{ clipPath: `path('${path}')` }}
      />

      <svg 
        viewBox={`0 0 ${width} ${height}`} 
        fill="none" 
        className="relative h-full w-full z-10"
      >
        <g clipPath={`url(#${id}-clip)`}>
          {/* ZOOM & FARBE 
             Sehr langsamer Zoom (duration-1000) für "Luxus"-Feeling.
             Bild ist S/W und wird farbig.
          */}
          <g className="origin-center scale-100 transition duration-1000 ease-out group-hover:scale-105">
            <foreignObject width={width} height={height}>
              <div className="relative w-full h-full transition duration-700 grayscale group-hover:grayscale-0">
                <Image
                  alt=""
                  className="w-full h-full bg-neutral-100 object-cover"
                  style={{ aspectRatio: `${width} / ${height}` }}
                  {...props}
                />
                {/* Ein hauchzarter dunkler Schleier, der beim Hover verschwindet (für Kontrast) */}
                <div className="absolute inset-0 bg-neutral-900/5 transition duration-500 group-hover:bg-transparent" />
              </div>
            </foreignObject>
          </g>
          
          {/* DIE FEINE LINIE (PRECISION STROKE)
             Hier liegt die Eleganz: Eine ganz feine (strokeWidth 1 oder 1.5), 
             scharfe Linie, die beim Hover etwas dunkler wird.
          */}
          <use
            href={`#${id}-shape`}
            strokeWidth="1.5" 
            className="stroke-neutral-950/10 transition duration-500 group-hover:stroke-neutral-950/40"
            // vectorEffect sorgt dafür, dass die Linie beim Skalieren haarscharf bleibt (falls unterstützt)
            style={{ vectorEffect: 'non-scaling-stroke' }} 
          />
        </g>
        <defs>
          <clipPath id={`${id}-clip`}>
            <path
              id={`${id}-shape`}
              d={path}
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}