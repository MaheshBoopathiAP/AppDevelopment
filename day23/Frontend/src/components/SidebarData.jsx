import React from "react";
import * as IoIcons from "react-icons/io";
import { FiGrid, FiPlusCircle } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt, faComment } from "@fortawesome/free-solid-svg-icons";




export const SidebarData = [

  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <FiGrid />,
    cName: "nav-text",
    showForRoles: ["ROLE_ADMIN"],
  },
  {
    title: "Add Product",
    path: "/addproduct",
    icon: <FiPlusCircle />,
    cName: "nav-text",
  },
  {
    title: "Transfer",
    path: "/transfer",
    icon: <FontAwesomeIcon icon={faExchangeAlt} />,
    cName: "nav-text",
  },
  {
    title: "List all Products",
    path: "/products",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FontAwesomeIcon icon={faComment} color="blue" />,
    cName: "nav-text",
    showForRoles: ["ROLE_ADMIN"],
  },
  {
    title: "Support",
    path: "/contact",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
