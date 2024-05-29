import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import useService from "@/hooks/useService";
const Cateogries = () => {
  const navigate = useNavigate();
  const { filterByCategory } = useService();

  const navigateToExplore = () => {
    navigate("/explora");
  };

  const handleFilter = (id) => {
    filterByCategory(id);
    navigateToExplore();
  };
  return (
    <section className="flex flex-col justify-center items-center mt-20 m-5">
      <h2 className="text-2xl m-3">Categorias</h2>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-3 mt-2">
        <Card
          shadow="sm"
          isPressable
          onPress={() => handleFilter("clvbanh620008s5qx0er8h9g0")}
          className="card"
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
            <b>Diseño Gráfico</b>
          </CardFooter>
        </Card>
        <Card
          shadow="sm"
          isPressable
          onPress={() => handleFilter("clvbanhe1000fs5qxouoacrsc")}
          className="card"
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
          onPress={() => handleFilter("clvbanhcw000es5qx1r7fcff8")}
          className="card"
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
            <b> Escritura Creativa</b>
          </CardFooter>
        </Card>
        <Card
          shadow="sm"
          isPressable
          onPress={() => handleFilter("clvbanh7a0009s5qxlrx4xt2d")}
          className="card"
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              className="w-full object-cover h-[140px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJKnEfhoQBjnLTCdEKHHTylFdFuEYdn8768OVZ5sESg9fJXorn6ku2IgvyTa6ioRXpEP0&usqp=CAU"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>Edición de Video</b>
          </CardFooter>
        </Card>
        <Card
          shadow="sm"
          isPressable
          onPress={() => handleFilter("clvbanhan000cs5qx1669fsfa")}
          className="card"
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
          onPress={() => handleFilter("clvbanh4z0007s5qx8pcq7jqz")}
          className="card"
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
            <b>Desarrollo Web</b>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Cateogries;
