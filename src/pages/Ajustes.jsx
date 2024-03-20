import React from "react";
import { Select, SelectItem, Avatar, Divider } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";

const Ajustes = () => {
  return (
    <div className="mx-5 my-10 2xl:mx-24 2xl:my-20">
      <h2 className="text-3xl font-medium">Ajustes Generales</h2>
      <Divider className="my-4 w-[70vw]" />
      <div className="flex flex-col mt-5">
        <div className="m-1 md:m-5">
          <h3 className="text-xl ">Idioma</h3>
          <Select
            className="max-w-xs rounded-none md:w-96 mt-3"
            label="Selecciona Idioma"
            radius="sm"
          >
            <SelectItem
              key="argentina"
              startContent={
                <Avatar
                  alt="Argentina"
                  className="w-6 h-6"
                  src="https://flagcdn.com/ar.svg"
                />
              }
            >
              Argentina
            </SelectItem>
            <SelectItem
              key="venezuela"
              startContent={
                <Avatar
                  alt="Venezuela"
                  className="w-6 h-6"
                  src="https://flagcdn.com/ve.svg"
                />
              }
            >
              Venezuela
            </SelectItem>
            <SelectItem
              key="brazil"
              startContent={
                <Avatar
                  alt="Brazil"
                  className="w-6 h-6"
                  src="https://flagcdn.com/br.svg"
                />
              }
            >
              Brazil
            </SelectItem>
            <SelectItem
              key="switzerland"
              startContent={
                <Avatar
                  alt="Switzerland"
                  className="w-6 h-6"
                  src="https://flagcdn.com/ch.svg"
                />
              }
            >
              Switzerland
            </SelectItem>
            <SelectItem
              key="germany"
              startContent={
                <Avatar
                  alt="Germany"
                  className="w-6 h-6"
                  src="https://flagcdn.com/de.svg"
                />
              }
            >
              Germany
            </SelectItem>
            <SelectItem
              key="spain"
              startContent={
                <Avatar
                  alt="Spain"
                  className="w-6 h-6"
                  src="https://flagcdn.com/es.svg"
                />
              }
            >
              Spain
            </SelectItem>
            <SelectItem
              key="france"
              startContent={
                <Avatar
                  alt="France"
                  className="w-6 h-6"
                  src="https://flagcdn.com/fr.svg"
                />
              }
            >
              France
            </SelectItem>
            <SelectItem
              key="italy"
              startContent={
                <Avatar
                  alt="Italy"
                  className="w-6 h-6"
                  src="https://flagcdn.com/it.svg"
                />
              }
            >
              Italy
            </SelectItem>
            <SelectItem
              key="mexico"
              startContent={
                <Avatar
                  alt="Mexico"
                  className="w-6 h-6"
                  src="https://flagcdn.com/mx.svg"
                />
              }
            >
              Mexico
            </SelectItem>
          </Select>
        </div>
        <div className="m-1 mt-10 md:m-5">
          <h3 className="text-xl ">Tema</h3>

          <Select
            className="max-w-xs rounded-none md:w-96 mt-3"
            label="Selecciona un tema"
            radius="sm"
          >
            <SelectItem key="oscuro" startContent={<Moon />}>
              Oscuro
            </SelectItem>
            <SelectItem key="claro" startContent={<Sun />}>
              Claro
            </SelectItem>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Ajustes;
