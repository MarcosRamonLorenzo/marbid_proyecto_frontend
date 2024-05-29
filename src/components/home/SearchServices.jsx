import {
  Card,
  CardHeader,
  Image,
} from "@nextui-org/react";

const SearchServices = () => {
  return (
    <section className="mt-20 flex flex-col justify-center items-center gap-5 my-10">
      <h2 className="text-2xl">Ofertas más buscadas</h2>
      <div className="max-w-[1500px] w-[100%] gap-3 grid grid-cols-12  px-8">
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Artes Gráficas
            </p>
            <h4 className="text-white font-medium text-large">
              Diseño Gráfico
            </h4>
          </CardHeader>
          <Image
            isZoomed
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://imgs.search.brave.com/SZfIvtMzFEZC_T9DHcc1oAmd5aHoHWtjaFnxpbmgvAo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzBkL0dy/ZWF0X1dhdmVfb2Zm/X0thbmFnYXdhMi5q/cGcvNTEycHgtR3Jl/YXRfV2F2ZV9vZmZf/S2FuYWdhd2EyLmpw/Zw"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Programación y tecnología
            </p>
            <h4 className="text-white font-medium text-large">
              Páginas Worpress{" "}
            </h4>
          </CardHeader>
          <Image
            isZoomed
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://kinsta.com/es/wp-content/uploads/sites/8/2018/03/que-es-wordpress.png"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Asesoría Financiera
            </p>
            <h4 className="text-white font-medium text-large">Bitcoin</h4>
          </CardHeader>
          <Image
            isZoomed
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://img6.s3wfg.com/web/img/images_uploaded/c/a/des-pieces-de-bitcoin_20240311101039_rsz.jpg"
          />
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-5"
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Música y audio
            </p>
            <h4 className="text-white font-medium text-large">
              Creación de Podcasts
            </h4>
          </CardHeader>
          <Image
            isZoomed
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://www.club-caza.com/img/article/z/31r56thl.jpg"
          />
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Programación y tecnología
            </p>
            <h4 className="text-white font-medium text-large">
              Diseño de Videojuegos{" "}
            </h4>
          </CardHeader>
          <Image
            isZoomed
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://www.cibertec.edu.pe/wp-content/uploads/2023/06/carrera-de-diseno-de-videojuegos2-compressed-scaled.jpg"
          />
        </Card>
      </div>
    </section>
  );
};

export default SearchServices;
