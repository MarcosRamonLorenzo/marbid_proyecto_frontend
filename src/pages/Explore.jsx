import Header from "../components/shared-componentes/Header.jsx";
import { Divider } from "@nextui-org/react";

import ServiceFilter from "../components/explore/ServiceFilter.jsx";
import ServiceList from "../components/explore/ServiceList.jsx";
import SearchComponent from "../components/explore/SearchComponent.jsx";

const Explore = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className=" explore flex flex-col justify-start mt-10 pb-10 mx-10 xl:mx-40 gap-5 ">
        <h1 className="text-3xl md:text-4xl  font-bold ">
          Explora todas los anuncios.
        </h1>
        <div className=" flex gap-2 ">
          <ServiceFilter />
          <SearchComponent />
        </div>
        <Divider className="my-4" />
        <ServiceList />
      </div>
    </div>
  );
};

export default Explore;
