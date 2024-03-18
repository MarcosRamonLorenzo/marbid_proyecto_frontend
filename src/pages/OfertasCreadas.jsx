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

const OfertasCreadas = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-4 my-10 md:mx-24 md:my-20">
      <Button
        className="flex items-center bg-blue-500 text-[#eee] gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3 fixed right-5 bottom-5 z-10"
        endContent={<CirclePlus />}
      >
        Crear Oferta
      </Button>
      <h2 className="text-3xl font-medium">Ofertas Creadas</h2>
      <Divider className="my-4" />
      <h3 className=" text-xl ml-3">Visualización</h3>
      <Tabs aria-label="Options" variant="underlined">
        <Tab key="photos" title="General">
          <div className="gap-x-5 gap-y-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5">
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
              </Card>
            ))}
          </div>
        </Tab>
        <Tab key="tabla" title="Tabla">
          <Table
            aria-label="Example static collection table"
            className="w-[23em] sm:w-[30em] md:w-[40em] lg:w-[50em] xl:w-[60em] mt-5"
          >
            <TableHeader>
              <TableColumn>Nombre</TableColumn>
              <TableColumn>Precio</TableColumn>
              <TableColumn>Estado</TableColumn>
              <TableColumn>Acciones</TableColumn>
            </TableHeader>
            <TableBody>
              {list.map((item, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>Active</TableCell>
                    <TableCell className="w-20">
                      <Dropdown>
                        <DropdownTrigger>
                          <Button isIconOnly size="sm" variant="light">
                            <GripVertical />
                          </Button>
                        </DropdownTrigger>
                        <DropdownMenu>
                          <DropdownItem color="secondary">View</DropdownItem>
                          <DropdownItem color="primary">Edit</DropdownItem>
                          <DropdownItem color="danger">Delete</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
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

export default OfertasCreadas;
