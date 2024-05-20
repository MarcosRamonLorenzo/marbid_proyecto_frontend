import { useEffect, useState } from "react";
import { CirclePlus, GripVertical } from "lucide-react";
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
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import ServiceCard from "../components/services/ServiceCard";
import LoadingCards from "@/components/shared-componentes/Loadings/LoadingCards";
import { useNavigate } from "react-router-dom";
import useService from "@/hooks/useService.js";

const CreatedServices = () => {
  const { createdServices, isLoading, getServicesCreatedByUser } = useService();

  useEffect(() => {
    getServicesCreatedByUser();
  }, [createdServices]);

  const navigate = useNavigate();

  return (
    <div className=" created-services mx-4 my-10 md:mx-24 md:my-20">
      <Button
        className="flex items-center bg-blue-400 text-white gap-1 px-4 py-2 cursor-pointer  font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3 fixed right-5 bottom-5 z-30"
        endContent={<CirclePlus />}
        onClick={() => {
          navigate("/panel-control/creacion-servicio");
        }}
      >
        Crear Anuncio
      </Button>
      <h2 className="text-3xl font-medium">Servicios Creados</h2>
      <Divider className="my-4" />
      <h3 className=" text-xl ml-3">Visualización</h3>
      <Tabs aria-label="Options" variant="underlined">
        {/* General View */}
        <Tab key="photos" title="General">
          <div className="gap-x-5 gap-y-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-5">
            {isLoading && <LoadingCards />}
            {createdServices?.length ? (
              createdServices.map((item, index) => (
                <ServiceCard item={item} key={index} />
              ))
            ) : (
              <h1>Aun no has creado ningún servicio</h1>
            )}
          </div>
        </Tab>
        {/* Table View */}
        {createdServices?.length && (
          <Tab key="tabla" title="Tabla">
            <Table
              aria-label="Example static collection table"
              className="w-[23em] sm:w-[30em] lg:w-[45em] xl:w-[50em] mt-5"
            >
              <TableHeader>
                <TableColumn>Nombre</TableColumn>
                <TableColumn>Precio</TableColumn>
                <TableColumn>Estado</TableColumn>
                <TableColumn>Acciones</TableColumn>
              </TableHeader>
              <TableBody>
                {createdServices?.length &&
                  createdServices.map((item, index) => {
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
                              <DropdownItem color="secondary">
                                View
                              </DropdownItem>
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
        )}
      </Tabs>
    </div>
  );
};

export default CreatedServices;
