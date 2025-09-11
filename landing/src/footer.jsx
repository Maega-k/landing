import React from "react";

function Footer(){
    return(
        <>
         <footer className="bg-orange text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="font-semibold">&copy; {new Date().getFullYear()} Ceeseams Tailoring Studio. All rights reserved.</p>
        <p className="text-sm mt-2">
          Made with love & skill | Contact developer: khamaaslem@gmail.com 
        </p>
      </div>
    </footer>
        </>
    )
}
export default Footer

