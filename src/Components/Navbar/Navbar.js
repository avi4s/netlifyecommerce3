import ModalCart from "@/pages/ModalCart/ModalCart";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart_data.items);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Link href="/">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Ecommerce
              </span>
            </Link>
          </div>

          <div className="md:hidden">
            <GiHamburgerMenu
              onClick={toggleMenu}
              className="text-white cursor-pointer"
            />
          </div>

          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-white">
              Home
            </Link>
            <div className="flex">
              <FaShoppingCart onClick={openModal} className="mt-1 text-white" />
              <span className="ml-1 text-white">{cartItems?.length}</span>
            </div>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className=" flex items-center justify-center z-50 ">
          <div className="bg-black bg-opacity-50 " onClick={closeModal}></div>
          <div className="fixed top-0 left-0 h-full bg-gray-800 w-36 p-4 transform translate-x-0">
            <div className="flex flex-col mt-10">
              <Link href="/" className="text-white">
                Home
              </Link>
              <div className="flex">
                <FaShoppingCart
                  onClick={openModal}
                  className="mt-1 text-white"
                />
                <span className="ml-1 text-white">{cartItems?.length}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeModal}
          ></div>
          <ModalCart closeModal={closeModal} />
        </div>
      )}
    </>
  );
};

export default Navbar;
