import React from "react";
import BurgerText from "@/components/BurgerText";



export default function Burger() {
    return (
        <section id="burger">
            {/* Fix height later with custom size https://tailwindcss.com/docs/size */}
            <div className="container border-2 border-red-800 bg-red-500 w-3/5 min-h-96 min-w-96 h-[90dvh] mx-auto my-10 p-6">
                <BurgerText />
            </div>
        </section>
    );
}