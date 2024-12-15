import React, { useState } from "react";
import NavBar from "../components/Navbar";
import ListCard from "../components/ListCard";
import GridCard from "../components/GridCard";

const Home = () => {
    const [isGridLayout, setIsGridLayout] = useState(false);
    return (
        <>
            <NavBar />
            <div className="flex items-center justify-between px-[100px] my-[40px]">
                <h2 className="text-2xl">Hi, KILLER 🫡</h2>
                <div className="flex items-center gap-1">
                    <div className="inputbox !w-[350px]">
                        <input type="text" placeholder="Search Here... !" />
                    </div>
                    <button className="btnblue rounded-[5px] mb-4 text-[20px] !p-[10px] !px=[10px]">+</button>
                </div>
            </div>

            <div className="cards">
                {
                    isGridLayout ?
                        <div className="grid px-[100px]">
                            <GridCard />
                            <GridCard />
                            <GridCard />
                            <GridCard />
                            <GridCard />
                        </div> :
                        <div className="list px-[100px]">
                            <ListCard />
                            <ListCard />
                            <ListCard />
                            <ListCard />
                            <ListCard />
                        </div>
                }
            </div>
        </>
    )
}

export default Home;