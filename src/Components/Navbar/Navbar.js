// import ModalCart from "@/pages/ModalCart/ModalCart";
// import { FaShoppingCart } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
// import Link from "next/link";
// import React, { useState } from "react";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const cartItems = useSelector((state) => state.cart_data.items);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <nav className="navbar" style={{ background: "#94a3b8" }}>
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <div className="flex items-center space-x-3 rtl:space-x-reverse">
//             <Link href="/">
//               <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
//                 Ecommerce
//               </span>
//             </Link>
//           </div>

//           <div className="md:hidden">
//             <GiHamburgerMenu
//               onClick={toggleMenu}
//               className="text-white cursor-pointer"
//             />
//           </div>

//           <div className="hidden md:flex space-x-4">
//             <Link href="/" className="text-white">
//               Home
//             </Link>
//             <div className="flex">
//               <FaShoppingCart onClick={openModal} className="mt-1 text-white" />
//               <span className="ml-1 text-white">{cartItems?.length}</span>
//             </div>
//           </div>
//         </div>
//       </nav>
//       {menuOpen && (
//         <div className=" flex items-center justify-center z-50 ">
//           <div className="bg-black bg-opacity-50 " onClick={closeModal}></div>
//           <div className="fixed top-0 left-0 h-full bg-slate-400 w-36 p-4 transform translate-x-0">
//             <div className="flex flex-col mt-10">
//               <Link href="/" className="text-white">
//                 Home
//               </Link>
//               <div className="flex">
//                 <FaShoppingCart
//                   onClick={openModal}
//                   className="mt-1 text-white"
//                 />
//                 <span className="ml-1 text-white">{cartItems?.length}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {isModalOpen && (
//         <div className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50"
//             onClick={closeModal}
//           ></div>
//           <ModalCart closeModal={closeModal} />
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <a href="/">Logo</a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Services
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden absolute top-16 right-0 bg-gray-800 w-full">
            <a href="#" className="block py-2 px-4 text-white">
              Home
            </a>
            <a href="#" className="block py-2 px-4 text-white">
              About
            </a>
            <a href="#" className="block py-2 px-4 text-white">
              Services
            </a>
            <a href="#" className="block py-2 px-4 text-white">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
