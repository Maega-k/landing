import React from "react";
import { motion } from "framer-motion";

function Hero (){
    return(
        <>
        {/* Welcome Section */}
        <section className="flex flex-col md:flex-row items-center justify-between py-7 px-3">
            <motion.div
                className="md:w-1/2 rounded mb-6 md:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    className="text-4xl text-lightorange font-bold"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Welcome To Ceeseams!
                </motion.h1>
                <motion.p
                    className="font-semibold py-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    Welcome to our tailoring studio! Discover custom-made fashion, expert alterations, and personalized service designed just for you. We are delighted to help you look and feel your best—thank you for choosing us! 
                    Whether you need a perfect fit for a special occasion or want to refresh your wardrobe, our skilled team is here to bring your vision to life. Experience quality craftsmanship, attention to detail, and a warm, friendly atmosphere every time you visit. Your style journey starts here!
                </motion.p>
            </motion.div>
            <motion.div
                className="md:w-1/2 flex pr-10 justify-end"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <motion.img
                    src="img/sewing-machine.svg"
                    alt="Hero Image"
                    className="h-64"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                />
            </motion.div>
        </section>

        {/* Services Section */}
        <section className="flex flex-col md:flex-row items-center justify-between py-15 px-3">
            <motion.div
                className="md:w-1/2 flex justify-start pr-10"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <motion.img
                    src="img/service.svg"
                    alt="Service Image"
                    className="h-60"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                />
            </motion.div>
            <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.h2
                    className="text-3xl text-lightorange font-bold"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    Our Services:
                </motion.h2>
                <motion.p
                    className="font-semibold py-3"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    We offer a wide range of tailoring services to meet your needs, including:
                </motion.p>
                <motion.ul
                    className="list-disc pl-5 font-semibold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    <li>Custom Clothing Design</li>
                    <li>Expert Alterations</li>
                    <li>Bridal and Formal Wear</li>
                    <li>Casual and Everyday Wear</li>
                    <li>Consultations and Fittings</li>
                    <li>Repairs and Alterations</li>
                </motion.ul>
            </motion.div>
        </section>
        </>
    )
}

export default Hero;