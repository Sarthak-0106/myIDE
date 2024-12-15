import React from "react";
import { LuDownload } from "react-icons/lu";

const EditorNavbar = () => {
    return (
        <>
            <div className="EditorNavbar flex items-center justify-between px-[100px] h-[80px] bg-[#141414]">
                <div className="logo">
                    <img className='w-[150px] cursor-pointer' src="" alt="" />
                </div>
                <p>File / <span className="text-[gray]">My IDE project</span></p>
                <i className="p-[5px] bg-black rounded-[5px] cursor-pointer text-[20px]"><LuDownload /></i>
            </div>
        </>
    )
}
export default EditorNavbar;