import { BiLogoTypescript } from "react-icons/bi";
import {
  FaAngular,
  FaAws,
  FaBrain,
  FaCss3,
  FaDocker,
  FaEthereum,
  FaFigma,
  FaGithubSquare,
  FaHtml5,
  FaJs,
  FaNode,
  FaPython,
  FaReact,
  FaRust,
  FaVuejs,
  FaWordpress,
} from "react-icons/fa";
import { ImEmbed2 } from "react-icons/im";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiAmazondynamodb,
  SiAmazonec2,
  SiAnthropic,
  SiAwslambda,
  SiDjango,
  SiGraphql,
  SiHuggingface,
  SiJenkins,
  SiJsonwebtokens,
  SiLangchain,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiN8N,
  SiNeo4J,
  SiNextdotjs,
  SiOpenai,
  SiOracle,
  SiPostgresql,
  SiPytorch,
  SiReact,
  SiSolana,
  SiThreedotjs,
} from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";

export const REWARDS = [
  {
    category: "skills",
    info: [
      {
        title: "Frontend Development",
        description: "Specialized in modern frontend technologies.",
        icons: [
          FaHtml5,
          FaJs,
          FaReact,
          SiReact,
          SiNextdotjs,
          SiThreedotjs,
          FaWordpress,
          FaAngular,
          FaVuejs,
          BiLogoTypescript,
        ],
        stage: "", // Empty as it's not relevant for skills
      },
      {
        title: "Backend Development",
        description: "Specialized in modern backend technologies.",
        icons: [
          FaPython,
          FaEthereum,
          FaNode,
          FaRust,
          SiDjango,
          SiLaravel,
          SiGraphql,
          SiSolana,
          SiJsonwebtokens,
        ],
        stage: "", // Empty as it's not relevant for skills
      },
      {
        title: "DevOps",
        description: "Specialized in modern DevOps practices.",
        icons: [
          FaAws,
          FaDocker,
          FaGithubSquare,
          SiAwslambda,
          SiAmazonec2,
          TbBrandAzure,
          SiJenkins,
        ],
        stage: "", // Empty as it's not relevant for skills
      },
      {
        title: "Database",
        description: "Specialized in modern Database management.",
        icons: [
          SiMongodb,
          SiMysql,
          SiPostgresql,
          SiNeo4J,
          SiAmazondynamodb,
          SiOracle,
        ],
        stage: "", // Empty as it's not relevant for skills
      },
      {
        title: "AI Development",
        description: "Specialized in modern Database management.",
        icons: [
          SiHuggingface,
          SiOpenai,
          SiLangchain,
          SiN8N,
          ImEmbed2,
          SiPytorch,
          FaBrain,
          SiAnthropic,
        ],
        stage: "", // Empty as it's not relevant for skills
      },
    ],
  },
  {
    category: "Education",
    info: [
      {
        title: "Computer Science - NATIONAL University OF SINGAPORE",
        description: "Studied web development and computer science principles.",
        icons: [],
        stage: "2018",
      },
      {
        title: "Computer Science Bachelor's Degree ",
        description: "Completed a diploma in computer science fundamentals.",
        icons: [],
        stage: "2018",
      },
    ],
  },
];
