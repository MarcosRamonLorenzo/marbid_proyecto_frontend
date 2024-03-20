import React from "react";
import { CirclePlus, GripVertical } from "lucide-react";
import {
  Card,
  CardBody,
  Image,
  CardFooter,
  User,
  Divider,
  Tabs,
  Tab,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
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

const OfertasGustadas = () => {
  return (
    <div className="mx-5 my-10 lg:mx-24 lg:my-20">
      <h2 className="text-3xl font-medium">Ofertas Gustadas</h2>
      <Divider className="my-4" />
      <h3 className=" text-xl ml-3">Visualización</h3>
      <Tabs aria-label="Options" variant="underlined">
        <Tab key="photos" title="General">
          <div className="gap-x-5 gap-y-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-5">
            {list.map((item, index) => (
              <Card
                shadow="sm"
                key={index}
                className="flex flex-col items-start"
              >
                <CardBody className="overflow-visible p-0">
                  <Image
                    onClick={() => {
                      navigate("/anuncio");
                    }}
                    isZoomed
                    shadow="sm"
                    radius="xs"
                    width="100%"
                    alt={item.title}
                    className="w-full object-cover h-[240px]"
                    src={
                      "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_640.jpg"
                    }
                  />
                </CardBody>

                <CardFooter className="text-small flex flex-col items-start gap-4">
                  <div className="flex justify-start items-start">
                    <User
                      name="Jane Doe"
                      description="Product Designer"
                      avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                      }}
                    />
                  </div>
                  <h3 className="font-medium text-2xl">{item.title}</h3>
                  <p className="text-default-500">{item.price}</p>{" "}
                  <p className="text-start">
                    Necesito programador web para desarrollar una página de
                    comercio electrónico. La página debe tener un diseño
                    atractivo, funcional.
                  </p>
                </CardFooter>
                <label className="ui-like absolute top-4 right-4 z-10 ">
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
              </Card>
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

export default OfertasGustadas;
