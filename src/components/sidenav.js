import { FaHome, FaRegQuestionCircle, FaHistory } from "react-icons/fa";
import { GiGoat } from "react-icons/gi";

const sidenav = [
  {
    id: 1,
    title: "মূল পাতা",
    icon: <FaHome />,
    path: "/home",
  },
  {
    id: 2,
    title: "মাসায়েল",
    icon: <FaRegQuestionCircle />,
    path: "/question",
  },
  {
    id: 3,
    title: "কুরবানির ইতিহাস",
    icon: <FaHistory />,
    path: "/history",
  },
  {
    id: 4,
    title: "যিলহজের আমল",
    icon: <GiGoat />,
    path: "/amol",
  },
];

export default sidenav;
