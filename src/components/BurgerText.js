'use client'
import React, { useState, useEffect } from "react";



function BurgerText() {

    const [data, setData] = useState([]);




    useEffect(() => {
        fetchBurgerData();
    }, []);
    const fetchBurgerData = () => {
        fetch('https://bobsburgers-api.herokuapp.com/burgerOfTheDay/').then((response) => response.json()).then((json) => {
            let burgerId = Math.floor(Math.random() * json.length);
            let burger = json[burgerId - 1]
            return burger;
        }).then((burgerInfo) => setData(burgerInfo)).catch(error => console.error(error));
    }









    return (

        <div className="border-2  border-red-900 bg-zinc-800 h-full w-full p-5 text-zinc-50">

            <div className=" tracking-wider text-center">
                <div className="sketchy-font text-4xl md:text-5xl xl:text-8xl -mt-4 uppercase">Burger</div>
                <div className="chalk-title text-xl  md:text-2xl xl:text-4xl -mt-3 md:-mt-4  ">of the Day</div>
                <hr className="mx-5 xl:mx-10" />
            </div>
            <div className="flex flex-col flex-1 h-5/6 items-center justify-center">
                <div className="mt-4 tracking-wide w-4/5 chalk-font md:mt-10 lg:mt-16 text-center basis-1/2 text-2xl md:text-4xl xl:text-5xl">
                    {data.name}
                    <div className="mt-5 lg:mt-16 text-xl md:text-3xl xl:text-4xl tracking-wider">
                        {data.price}
                    </div>

                </div>

                <div className="my-4 place-content-end basis-1/2 text-base lg:text-xl xl:text-2xl ">
                    <button className="bg-neutral-600 hover:bg-red-900  active:bg-red-950 border-4 border-double p-1 md:p-2 border-neutral-950" onClick={fetchBurgerData}>Order Up!</button>
                </div>
            </div>
        </div>


    );
}


export default BurgerText;