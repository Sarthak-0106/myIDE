import React, { useState } from "react";
import NavBar from "../components/Navbar";
import ListCard from "../components/ListCard";
import GridCard from "../components/GridCard";

const Home = () => {
    const [isGridLayout, setIsGridLayout] = useState(false);

    const [isCreateModelShow, setIsCreateModelShow] = useState(false);

    return (
        <>
            <NavBar />
            <div className="flex items-center justify-between px-[100px] my-[40px]">
                <h2 className="text-2xl">Hi, KILLER 🫡</h2>
                <div className="flex items-center justify-between gap-1">
                    <div className="inputbox !w-[350px]">
                        <input type="text" placeholder="Search Here... !" />
                    </div>
                    <button onClick={()=>{setIsCreateModelShow(true)}} className="btnblue rounded-[5px] mb-3 text-[20px] !p-[10px] !py=[10px]">+</button>
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

            {
                isCreateModelShow ? <div className="createModelCon fixed top-0 left-0 bottom-0 w-screen h-screenbg-[rgb(0,0,0,0.2)] flex items-center justify-center">
                <div className="createModel w-[25vw] h-[27vh] shadow-lg shadow-black/50 bg-[#141414] rounded-lg p-[20px]">
                    <h3 className="text-2xl">Create New Project</h3>
                    <div className="inputbox !bg-[#202020] mt-4">
                        <input type="text" placeholder="Project Title" />
                    </div>

                    <div className="flex items-center gap-[10px] w-full mt-2">
                        <button className="btnblue rounded-[5px] mb-4 !p-[5px] w-[49%] !px-[10px] !py-[10px] ">Create</button>
                        <button onClick={()=>{setIsCreateModelShow(false)}} className="btnblue !bg-[#1A1919] rounded-[5px] w-[49%] mb-4 !p-[5px] !px-[10px] !py-[10px]">Cancel</button>
                    </div>
                </div>
            </div> : ""
            }
        </>
    )
}

export default Home;