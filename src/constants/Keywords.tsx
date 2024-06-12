import ReactIcon from "../../public/logo/react.svg";
import NextJsIcon from "../../public/logo/next.svg";
import TailwindCSSIcon from "../../public/logo/tailwindcss.svg";
import FramerMotionIcon from "../../public/logo/framermotion.svg";
import TypeScriptIcon from "../../public/logo/typescript.svg";
import HTMLIcon from "../../public/logo/html.svg";
import CSSIcon from "../../public/logo/css.svg";
import NodeJsIcon from "../../public/logo/nodejs.svg";
import MongoDBIcon from "../../public/logo/mongodb.svg";
import FirebaseIcon from "../../public/logo/firebase.svg";
import GitIcon from "../../public/logo/git.svg";
import GitHubIcon from "../../public/logo/github.svg";
import AndroidIcon from "../../public/logo/android.svg";
import AppleIcon from "../../public/logo/apple.svg";
import ReduxIcon from "../../public/logo/redux.svg";
import Vercel from "../../public/logo/vercel.svg";
import { ArrowsAltOutlined, BoxPlotOutlined, BugFilled, CheckOutlined, GithubFilled, LinkedinFilled, SettingFilled } from "@ant-design/icons";
export const FrameworksList: { name?: string, icon?: any }[] = [
  {
    name: "ReactJs",
    icon: ReactIcon,
  },
  {
    icon: NextJsIcon,
  },
  {
    name: "TailwindCSS",
    icon: TailwindCSSIcon,
  },
  {
    name: "Framer Motion",
    icon: FramerMotionIcon,
  },
  {
    name: "TypeScript",
    icon: TypeScriptIcon,
  },
  {
    name: "Redux",
    icon: ReduxIcon,
  },
  {
    icon: AndroidIcon,
  },
  {
    icon: AppleIcon,
  },
  {
    name: "Vercel",
    icon: Vercel,
  },
  {
    name: "HTML",
    icon: HTMLIcon,
  },
  {
    name: "CSS",
    icon: CSSIcon,
  },
  {
    name: "Node.js",
    icon: NodeJsIcon,
  },
  {
    name: "MongoDB",
    icon: MongoDBIcon,
  },
  {
    name: "Firebase",
    icon: FirebaseIcon,
  },
  {
    name: "Git",
    icon: GitIcon,
  },
  {
    name: "GitHub",
    icon: GitHubIcon,
  }
]



export const myInfo = [
  {
    icon: <LinkedinFilled className='text-xl text-black' />,
    link: "https://www.linkedin.com/in/tnmod/",
    title: "LinkedIn",
  },
  {
    icon: <GithubFilled className='text-xl text-black' />,
    link: "https://github.com/tnmod/",
    title: "GitHub",
  },
  {
    icon: <ArrowsAltOutlined className='text-xl text-black' />,
    link: "https://nguyenphutin.vercel.app/",
    title: "Portfolio",
  }
]
