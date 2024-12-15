import React from "react";

const GridCard = () => {
    return(
        <>
            <div className="gridcard bg-[#141414] w-[270px] p-[10px] h-[180px] cursor-pointer hover:bg-[#202020] rounded-lg shadow-lg shadow-black/50">
                <img className="w-[100px] h-[100px] object-cover rounded-lg" src="" alt=""  />
                <h3 className="text-[20px] w-[90%] line-clamp-1">My-IDE</h3>
                <div className="flex items-center justify-between">
                    <p className="text-[14px] text-[gray]">Created in 2 Days</p>
                    <img className="w-[30px] cursor-pointer" src="" alt="" />
                </div>
            </div>
        </>
    )
}

export default GridCard;