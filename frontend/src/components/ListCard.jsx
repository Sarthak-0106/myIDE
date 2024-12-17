import React from "react";
import { useState } from "react";
import deleteImg from "../images/delete.png"
import img from "../images/code.png"

const ListCard = () => {
    const [isDeleteModelShow, setIsDeleteModelShow] = useState(false);
    return (
        <>
            <div className="listcard mb-2 flex items-center justify-between w-[full] p-[10px] bg-[#141414] rounded-lg cursor-pointer hover:bg[#202020]">
                <div className="flex items-center gap-2">
                    <img className="w-[80px]" src={img} alt="" />
                    <div>
                        <h2 className="text-[22px]">My-IDE</h2>
                        <p className="text-[gray] text-[14px]">Created in 2 days</p>
                    </div>
                </div>
                <div>
                    <img onClick={()=>{setIsDeleteModelShow(true)}} className="w-[30px] cursor-pointer mr-4" src={deleteImg} alt="" />
                </div>
            </div>

            {
                isDeleteModelShow ? <div className="model fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.2)] flex justify-center items-center flex-col">
                    <div className="mainModel w-[25vw] h-[25vh] bg-[#141414] rounded-lg p-[10px]">
                        <h3 className="text-3xl">Do you want to delete <br /> this project?</h3>
                        <div className="flex w-full mt-5 items-center gap-[10px]">
                            <button className="p-[10px] rounded-lg bg-[#FF4343] text-white cursor-pointer min-w-[49%]">Delete</button>
                            <button onClick={()=>{setIsDeleteModelShow(false)}} className="p-[10px] rounded-lg bg-[#1A1919] text-white cursor-pointer min-w-[49%]">Cancel</button>
                        </div>
                    </div>
                </div> : ""
            }
        </>
    )
}

export default ListCard;