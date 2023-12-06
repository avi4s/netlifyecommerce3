import ModalCart from "@/pages/ModalCart/ModalCart";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart_data.items);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="navbar p-4" style={{ background: "#94a3b8" }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link href="/">Ecommerce</Link>
        </div>
        <div className="hidden md:flex space-x-4 ">
          <Link href="/" className="text-white">
            Home
          </Link>
          <div className="flex">
            <FaShoppingCart className="mt-1 text-white" onClick={openModal} />
            <span className="ml-1 text-white">{cartItems?.length}</span>
          </div>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={closeModal}
            ></div>
            <ModalCart closeModal={closeModal} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
