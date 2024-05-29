import {
  Divider,
  Tabs,
  Tab,
} from "@nextui-org/react";
import UserLikesList from "@/components/likes/UserLikesList.jsx";



const LikedServices = () => {
  return (
    <div className="liked-services mx-5 my-10 lg:mx-24 lg:my-20">
      <h2 className="text-3xl font-medium">Ofertas Gustadas</h2>
      <Divider className="my-4" />
      <h3 className=" text-xl ml-3">Visualización</h3>
      <Tabs aria-label="Options" variant="underlined">
        <Tab key="photos" title="General">
          <UserLikesList  />
        </Tab>
      </Tabs>
    </div>
  );
};

export default LikedServices;
