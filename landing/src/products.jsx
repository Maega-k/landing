import React from "react";
 import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import Navbar from "./navbar";

function Products(){
    return(
        <>
        <Navbar />
        <section className="bg-gradient-to-br from-bluey to-white-600 min-h-screen">
            <div className="text-gray-800">
                <motion.h1
                    className="text-center text-4xl font-extrabold pb-3 pt-5"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Order from Us Today
                </motion.h1>
                 <motion.h2 className="text-2xl text-center font-bold "
                   initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    What Are You Looking For?
                   
                </motion.h2>
            </div>
            {/* Products */}
                <motion.div className="flex flex-col mt-10 px-7 md:flex-row md:space-x-6 sm:space-y-0 space-y-8 justify-center"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 1.5
                        }
                    }
                }}
                >
                    {/* Product 1 */}
                    <motion.div className="bg-white rounded-lg shadow-md p-6 text-center hover:scale-105"
                     initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-lg font-semibold mb-2">Gowns</h3>
                        <Link to="/product-1" className="text-blue-500 hover:underline">
                        <img src="img/dress.svg" alt="Gown" className="w-32 h-30  object-cover mb-4 rounded-lg mx-auto md:mx-0" />
                        </Link>
                        <Link to="/product-1" className="text-center text-blue-500 hover:underline">
                            View Details
                        </Link>
                    </motion.div>
                    {/* Product 2 */}
                    <motion.div className="bg-white rounded-lg shadow-md p-6 text-center hover:scale-105"
                     initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-lg font-semibold mb-2">Tops</h3>
                        <Link to="/product-1" className="text-blue-500 hover:underline">
                        <img src="img/shirt.svg" alt="Gown" className="w-32 h-30 object-cover mb-4 rounded-lg mx-auto md:mx-0" />
                        </Link>
                        <Link to="/product-1" className="text-center text-blue-500 hover:underline">
                            View Details
                        </Link>
                    </motion.div>
                    {/* Product 3 */}
                    <motion.div className="bg-white rounded-lg shadow-md p-6 text-center hover:scale-105"
                     initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-lg font-semibold mb-2">Skirts</h3>
                        <Link to="/product-1" className="text-blue-500 hover:underline">
                        <img src="img/skirt.svg" alt="Gown" className="w-32 h-30 object-cover mb-4 rounded-lg mx-auto md:mx-0" />
                        </Link>
                        <Link to="/product-1" className="text-center text-blue-500 hover:underline">
                            View Details
                        </Link>
                    </motion.div>
                </motion.div>

        </section>
      
      </>
    )
}

export default Products
