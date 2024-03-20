import Cabecera from "../Cabecera.jsx";
import {
  Autocomplete,
  AutocompleteItem,
  Input,
  Card,
  CardBody,
  Image,
  CardFooter,
  CardHeader,
  User,
  Divider,
} from "@nextui-org/react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Explora = () => {
  let animals = ["leon ", "tigre", "elefante", "jirafa", "mono"];
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
  const navigate = useNavigate();
  return (
    <div>
      <Cabecera />
      <div className="flex flex-col justify-start my-10 mx-10 xl:mx-40 gap-5 ">
        <h1 className="text-3xl md:text-4xl  font-bold ">
          Explora todas los anuncios.
        </h1>
        <div className=" flex gap-2 ">
          <Autocomplete
            label="Select an animal"
            className="max-w-xs "
            radius="sm"
          >
            {animals.map((animal, i) => (
              <AutocompleteItem key={i} value={animal}>
                {animal}
              </AutocompleteItem>
            ))}
          </Autocomplete>

          <Input
            className="w-80"
            label="Search"
            isClearable
            radius="sm"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focused=true]:bg-default-200/50",
                "dark:group-data-[focused=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
            placeholder="Type to search..."
            startContent={<Search size={20} />}
          />
        </div>
        <Divider className="my-4" />
        <div className="gap-x-5 gap-y-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((item, index) => (
            <Card shadow="sm" key={index} className="flex flex-col items-start">
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
      </div>
    </div>
  );
};

export default Explora;
