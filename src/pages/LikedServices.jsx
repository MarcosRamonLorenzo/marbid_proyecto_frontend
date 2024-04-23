import React from "react";
import {
  Divider,
  Tabs,
  Tab,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../components/services/ServiceCard.jsx";

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

const LikedServices = () => {
  return (
    <div className="mx-5 my-10 lg:mx-24 lg:my-20">
      <h2 className="text-3xl font-medium">Ofertas Gustadas</h2>
      <Divider className="my-4" />
      <h3 className=" text-xl ml-3">Visualización</h3>
      <Tabs aria-label="Options" variant="underlined">
        <Tab key="photos" title="General">
          <div className="gap-x-5 gap-y-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-5">
            {list.map((item, index) => (
              <ServiceCard item={item} key={index} />
            ))}
          </div>
        </Tab>
        <Tab key="tabla" title="Tabla">
          <Table
            aria-label="Example static collection table"
            className="w-[23em] sm:w-[30em] md:w-[35em] lg:w-[50em] xl:w-[60em] mt-5"
          >
            <TableHeader>
              <TableColumn>Nombre</TableColumn>
              <TableColumn>Precio</TableColumn>
              <TableColumn>Estado</TableColumn>
              <TableColumn></TableColumn>
            </TableHeader>
            <TableBody>
              {list.map((item, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>Active</TableCell>
                    <TableCell className="w-20">
                      <label className="ui-like  ">
                        <input type="checkbox" />
                        <div className="like">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill=""
                          >
                            <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                            <g
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              id="SVGRepo_tracerCarrier"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path>
                            </g>
                          </svg>
                        </div>
                      </label>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Tab>
      </Tabs>
    </div>
  );
};

export default LikedServices;
