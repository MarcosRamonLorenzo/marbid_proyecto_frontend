import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
const Categorias = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-20 m-5">
      <h2 className="text-2xl">Categorias</h2>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-3 mt-2">
        <Card
          shadow="sm"
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              className="w-full object-cover h-[140px]"
              src="https://fiverr-res.cloudinary.com/image/upload/w_800/f_auto,q_auto/v1/attachments/generic_asset/asset/680ffd19753310e217b79cf02b6b6c1f-1653308162343/before%20buying%20nft%20art.jpg"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Artes gráficas</b>
          </CardFooter>
        </Card>
        <Card
          shadow="sm"
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              className="w-full object-cover h-[140px]"
              src="https://medac.es/sites/default/files/blog/destacadas/%C2%BFQu%C3%A9%20Es%20El%20Marketing%20Digital.jpg"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Marketing digital</b>
          </CardFooter>
        </Card>
        <Card
          shadow="sm"
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              className="w-full object-cover h-[140px]"
              src="https://www.leonhunter.com/wp-content/uploads/2023/06/Escribir-para-vivir.jpg"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b> Escritura y traducción</b>
          </CardFooter>
        </Card>
        <Card
          shadow="sm"
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              className="w-full object-cover h-[140px]"
              src="https://assets-global.website-files.com/64d129e8b2ca32f3a33b0066/64f0bb76e56702b45df78665_sala%20de%20edicion%20vacia%20edicion%20online.jpg"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Video y animación</b>
          </CardFooter>
        </Card>
        <Card
          shadow="sm"
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              className="w-full object-cover h-[140px]"
              src="https://img.myloview.com.br/posters/microfone-condensador-em-gravacao-digital-fundo-de-estudio-de-transmissao-400-105310982.jpg"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Música y audio</b>
          </CardFooter>
        </Card>
        <Card
          shadow="sm"
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              className="w-full object-cover h-[140px]"
              src="https://sanblasdigital.es/wp-content/uploads/laptop-gb09eb3827_1280.jpg"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Programación y tecnología</b>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Categorias;
