import { Select, SelectItem, Divider } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import useTheme from "@/hooks/useTheme";

const Settings = () => {

  const { theme,setTheme } = useTheme();
  
  return (
    <div className=" settings mx-5 my-10 2xl:mx-24 2xl:my-20">
      <h2 className="text-3xl font-medium">Ajustes Generales</h2>
      <Divider className="my-4 w-[70vw]" />
      <div className="flex flex-col mt-5">
  
        <div className="m-1 mt-10 md:m-5">
          <h3 className="text-xl ">Theme</h3>

          <Select
            defaultSelectedKeys={[theme]}
            className="max-w-xs rounded-none md:w-96 mt-3"
            label="Selecciona un theme"
            radius="sm"
            onChange={(e) => {
              setTheme(e.target.value);
            }}
          >
            <SelectItem key="dark" value={"dark"} startContent={<Moon />}>
              Oscuro
            </SelectItem>
            <SelectItem key="white" value={"white"} startContent={<Sun />}>
              Claro
            </SelectItem>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
