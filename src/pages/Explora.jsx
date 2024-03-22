import Cabecera from "../components/Cabecera.jsx";
import { Divider } from "@nextui-org/react";

import FiltroCateogorias from "../components/explora/FiltroCateogorias.jsx";
import Buscador from "../components/explora/Buscador.jsx";
import CardAnuncio from "../components/CardAnuncio.jsx";
const Explora = () => {
  const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
  ];

  return (
    <div>
      <Cabecera />
      <div className="flex flex-col justify-start mt-10 pb-10 mx-10 xl:mx-40 gap-5 ">
        <h1 className="text-3xl md:text-4xl  font-bold ">
          Explora todas los anuncios.
        </h1>
        <div className=" flex gap-2 ">
          <FiltroCateogorias />
          <Buscador />
        </div>
        <Divider className="my-4" />
        <div className="gap-x-5 gap-y-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {list.map((item, index) => (
            <CardAnuncio item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explora;
