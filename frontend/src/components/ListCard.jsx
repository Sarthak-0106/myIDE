import React from "react";

const ListCard = () => {
    return(
        <>
            <div className="listcard mb-2 flex items-center justify-between w-[full] p-[10px] bg-[#141414] rounded-lg cursor-pointer hover:bg[#202020]">
                <div className="flex items-center gap-2">
                    <img className="w-[80px]" src="" alt="" />
                    <div>
                        <h2 className="text-[22px]">My-IDE</h2>
                        <p className="text-[gray] text-[14px]">Created in 2 days</p>
                    </div>
                </div>
                <div>
                    <img className="w-[30px] cursor-pointer mr-4" src="" alt="" />
                </div>
            </div>
        </>
    )
}

export default ListCard;