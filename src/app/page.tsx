import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">

      <div className="flex flex-col items-center justify-center"
            style={{
            backgroundImage: `url('/mister-vincent-hero.jpg')`,
            height: "100vh",
            width: "100vw",
            backgroundPosition: "center",
            backgroundSize: "cover",
      }}>
        <h1 className='text-6xl font-semibold text-[#c6d200]'>Mister Vincent</h1>

        <div className="flex place-items-center pt-10">
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/mister-vincent-logo.png"
            alt="Logo Mister Vincent"
            width={283}
            height={275}
            priority
          />
        </div>
        <p className='pt-10'>Site en construction...</p>
      </div>
    </main>
  )
}
