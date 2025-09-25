import React from "react";
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import { motion } from "framer-motion";

function Reviews(){
    return(
        <>
        <section>
            <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
            <motion.h2
                className="text-4xl font-bold text-center"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Customer Reviews
            </motion.h2>
            {/* Reviews */}
            <motion.div
                className="flex flex-col mt-24 md:flex-row md:space-x-6"
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
                {/* Review 1*/}
                <motion.div
                    className="flex flex-col items-center p-6 space-y-6 rounded-full bg-gray-200 md:w-1/3"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <User className="w-16 -mt-14" alt="" />
                    <h5 className="text-lg font-bold">Anisha Kim</h5>
                    <p className="text-sm text-darkGrayishBlue">
                        “From consultation to final fitting, the experience was seamless. The staff is knowledgeable and truly cares about customer satisfaction.”
                    </p>
                </motion.div>

                {/* Review 2 */}
                <motion.div
                    className="hidden flex-col items-center p-6 space-y-6 rounded-full bg-gray-200 md:flex md:w-1/3"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <User className="w-16 -mt-14" alt="" />
                    <h5 className="text-lg font-bold">Maria Rodriguez</h5>
                    <p className="text-sm text-darkGrayishBlue">
                        “Fast, friendly, and professional service. My suit was altered exactly how I wanted. Highly recommend for anyone needing quality tailoring.”
                    </p>
                </motion.div>

                {/*Review 3 */}
                <motion.div
                    className="hidden flex-col items-center p-6 space-y-6 rounded-full bg-gray-200 md:flex md:w-1/3"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                >
                    <User  className="w-16 -mt-14" alt="" />
                    <h5 className="text-lg font-bold">Priya Patel</h5>
                    <p className="text-sm text-darkGrayishBlue">
                        “Absolutely thrilled with my custom dress! The fit is perfect and the attention to detail is amazing. I’ll definitely be coming back for more”
                    </p>
                </motion.div>
            </motion.div>
            </div>
            <motion.div
                className="justify-center flex py-7 mb-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 1 }}
            >
                <Link to="/login" className="rounded-full bg-bluee font-bold text-white text-2xl px-4 py-4 hover:text-black transition-transform duration-200 hover:scale-120">Sign-in</Link>
            </motion.div>
        </section>
        </>
    )
}

export default Reviews
