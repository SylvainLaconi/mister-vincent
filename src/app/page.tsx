import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">

      <div className="flex flex-col items-center justify-center p-5"
            style={{
            backgroundImage: `url('/mister-vincent-hero.webp')`,
            height: "100vh",
            width: "100vw",
            backgroundPosition: "center",
            backgroundSize: "cover",
      }}>
        <h1 className='text-5xl font-semibold text-center text-[#c6d200]'>Mister Vincent</h1>

        <div className="flex place-items-center pt-10">
          <Image
            src="/mister-vincent-logo.webp"
            alt="Logo Mister Vincent"
            width={200}
            height={194}
            priority
          />
        </div>
        <p className='pt-10 text-center text-black'>Mon site est en construction, mais je suis prêt à vous aider !</p> 

        <p className='pt-5 text-center text-black'>Contactez-moi au <a href="tel:+33664758405" className='font-semibold'>+33 6 64 75 84 05</a> ou par email à <a href='mailto:vincent@mister-vincent.fr' target="_blank" className='font-semibold'>vincent@mister-vincent.fr</a></p>
        
        <p className='pt-5 text-center text-white'>Mister Vincent - Home Organizer</p>
      </div>
    </main>
  )
}
