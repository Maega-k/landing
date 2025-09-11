import React from "react";
import { motion } from 'framer-motion';

function Products(){
    return(
        <>
        <section>
            <div>
                <motion.h1
                    className="text-center text-4xl font-extrabold text-lightorange p-7"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Order from Us Today
                </motion.h1>
            </div>
        </section>
        </>
    )
}

export default Products