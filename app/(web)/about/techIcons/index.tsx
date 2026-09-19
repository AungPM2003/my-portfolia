import { RiJavascriptFill,RiNextjsFill,RiReactjsFill,RiSupabaseFill } from "react-icons/ri";
import { FaGolang,FaPython,FaDocker} from "react-icons/fa6";
import { TbBrandDjango } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
const techIcons = [
  {
    id: 1,
    name: <RiJavascriptFill className="size-9" style={{ color: "#F7DF1E" }} />,
  },
  {
    id: 2,
    name: <RiReactjsFill className="size-9" style={{ color: "#61DAFB" }} />,
  },
  {
    id: 3,
    name: <RiNextjsFill className="size-9" style={{ color: "#FFFFFF" }} />,
  },
  {
    id: 4,
    name: <FaGolang className="size-9" style={{ color: "#00ADD8" }} />,
  },
  {
    id: 5,
    name: <FaPython className="size-9" style={{ color: "#3776AB" }} />,
  },
  {
    id: 6,
    name: <TbBrandDjango className="size-9" style={{ color: "#092E20" }} />,
  },
  {
    id: 7,
    name: <BiLogoPostgresql className="size-9" style={{ color: "#4169E1" }} />,
  },
  {
    id: 8,
    name: <RiSupabaseFill className="size-9" style={{ color: "#3ECF8E" }} />,
  },
  {
    id: 9,
    name: <FaDocker className="size-9" style={{ color: "#2496ED" }} />,
  },
];

export default techIcons;