
import * as IoIcons from "react-icons/io";
import { FiPlusCircle } from 'react-icons/fi';
import { FaEdit } from 'react-icons/fa';
import { FiGrid } from 'react-icons/fi';


export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <FiGrid />,
    cName: "nav-text",
    

  },
  {
    title: "Add Product",
    path: "/addproduct",
    icon:  <FiPlusCircle /> ,
    cName: "nav-text",
  },
  {
    title: "Edit Product",
    path: "/editproduct",
    icon:   <FaEdit />,
    cName: "nav-text",
  },
  {
    title: "List all Products",
    path: "/products",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
    
  },
 
 
  {
    title: "Support",
    path: "/contact",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
   
  },
];
