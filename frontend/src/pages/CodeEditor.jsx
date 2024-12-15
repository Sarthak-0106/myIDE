import React, { useState } from "react";
import EditorNavbar from "../components/EditorNavbar";
import Editor from '@monaco-editor/react';
import { MdLightMode } from 'react-icons/md';
import { AiOutlineExpandAlt } from "react-icons/ai";

const CodeEditor = () => {

    const [tab, setTab] = useState("html");

    const [isLightMode, setIsLightMode] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [htmlCode, setHtmlCode] = useState("<h1>Hello world</h1>");
    const [cssCode, setCssCode] = useState("body { background-color: #f4f4f4; }");
    const [jsCode, setJsCode] = useState("// some comment");

    const changeTheme = () => {
        if (isLightMode) {
            document.querySelector(".editor-navbar").style.background = "#141414";
            document.body.classList.remove('lightmode');
            setIsLightMode(false);
        } else {
            document.querySelector(".editor-navbar").style.background = "#fff";
            document.body.classList.add('lightmode');
            setIsLightMode(true);
        }
    }

    return (
        <>
            <EditorNavbar />
            <div className="flex">
                <div className={`left ${isExpanded ? "w-full" : "w-1/2"}`}>
                    <div className="tabs flex items-center justify-between gap-2 w-full bg-[#1A1919] h-[50px] px-[40px]">
                        <div className="tabs flex items-center gap-2">
                            <div onClick={() => { setTab("html") }} className="tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]">HTML</div>
                            <div onClick={() => { setTab("css") }} className="tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]">CSS</div>
                            <div onClick={() => { setTab("javascript") }} className="tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]">JavaScript</div>
                        </div>
                        <div className="flex items-center gap-2"></div>
                        <div className="flex items-center gap-2">
                            <i className="text-[20px] cursor-pointer" onClick={changeTheme}><MdLightMode /></i>
                            <i className="text-[20px] cursor-pointer" onClick={() => { setIsExpanded(!isExpanded); }}><AiOutlineExpandAlt /></i>
                        </div>
                    </div>
                    {tab === "html" ? (
                        <Editor
                            onChange={(value) => {
                                setHtmlCode(value || "");
                                run();
                            }}
                            height="82vh"
                            theme={isLightMode ? "vs-light" : "vs-dark"}
                            language="html"
                            value={htmlCode}
                        />
                    ) : tab === "css" ? (
                        <Editor
                            onChange={(value) => {
                                setCssCode(value || "");
                                run();
                            }}
                            height="82vh"
                            theme={isLightMode ? "vs-light" : "vs-dark"}
                            language="css"
                            value={cssCode}
                        />
                    ) : (
                        <Editor
                            onChange={(value) => {
                                setJsCode(value || "");
                                run();
                            }}
                            height="82vh"
                            theme={isLightMode ? "vs-light" : "vs-dark"}
                            language="javascript"
                            value={jsCode}
                        />
                    )}
                </div>
            </div>

            <iframe id="output" className={`w-[${isExpanded ? "0%" : "50%"}] ${isExpanded ? 'hidden' : ""} min-h-[82vh] bg-[#fff] text-black`}></iframe>
        </>
    )
};

export default CodeEditor;