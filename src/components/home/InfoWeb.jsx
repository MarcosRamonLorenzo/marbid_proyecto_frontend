import { BriefcaseIcon, SearchIcon, UploadIcon } from 'lucide-react'
import React from 'react'

const InfoWeb = () => {
  return (
    <section className="w-full py-20  flex items-center justify-center">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-white-800">
            Cómo Funciona
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Descubre Tu Próxima Oportunidad Freelance
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Nuestra plataforma facilita a los freelancers encontrar y postularse a trabajos, y a los empleadores conectarse
            con profesionales talentosos.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
        <div className="grid gap-1 p-8 md:p-10">
          <SearchIcon className="h-12 w-12 primary-stroke-class" />
          <h3 className="text-xl font-bold">Buscar Trabajos</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Explora nuestra extensa lista de trabajos y encuentra la oportunidad freelance perfecta para tus habilidades y
            experiencia.
          </p>
        </div>
        <div className="grid gap-1 p-8 md:p-10">
          <UploadIcon className="h-12 w-12 secondary-stroke-class" />
          <h3 className="text-xl font-bold">Postúlate</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Crea un perfil, muestra tu portafolio y postúlate a trabajos que se ajusten a tu experiencia laboral o académica.
            
          </p>
        </div>
        <div className="grid gap-1 p-8 md:p-10">
          <BriefcaseIcon className="h-12 w-12 third-stroke-class" />
          <h3 className="text-xl font-bold">Consigue Empleo</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Conéctate con empleadores, negocia términos y empieza a trabajar en tu próximo proyecto emocionante.
            
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default InfoWeb
