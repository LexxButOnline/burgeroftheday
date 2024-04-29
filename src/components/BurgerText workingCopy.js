'use client'
import React, { useState, useEffect } from "react";

function BurgerText() {

    const [data, setData] = useState([]);


    useEffect(() => {

        const fetchBurgerData = function () {
            fetch('https://bobsburgers-api.herokuapp.com/burgerOfTheDay/1').then((response) => response.json()).then((json) => setData(json)).catch(error => console.error(error));

        }

        fetchBurgerData();
    }, []);


    return (
        <span>
            {data.name}
        </span>

    );
}

export default BurgerText;