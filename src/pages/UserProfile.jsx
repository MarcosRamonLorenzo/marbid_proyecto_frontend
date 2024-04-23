import React from "react";
import Header from "../components/shared-componentes/Header";
import { Tabs, Tab, Divider } from "@nextui-org/react";

const UserProfile = () => {
  return (
    <div className="h-screen">
      <Header />

      <div className="mx-5 my-10 lg:mx-24 lg:my-20 ">
        <h2 className="text-3xl font-medium">Ajustes de Perfil.</h2>
        <Divider className="my-4" />

        <Tabs aria-label="Options" variant="underlined">
          <Tab key="photos" title="Ajustes">
            <div>hola</div>
          </Tab>
          <Tab key="tabla" title="Previsualización">
            <div>hola</div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default UserProfile;
