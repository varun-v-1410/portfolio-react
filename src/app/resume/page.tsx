"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

const Document = dynamic(
    () => import("react-pdf").then((mod) => mod.Document),
    { ssr: false }
);

const Page = dynamic(
    () => import("react-pdf").then((mod) => mod.Page),
    { ssr: false }
);

export default function Resume() {
    useEffect(() => {
        // Configure PDF.js worker only on client side
        import("react-pdf").then((module) => {
            module.pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${module.pdfjs.version}/build/pdf.worker.mjs`;
        });
    }, []);

    return (
        <div className="w-full h-fit p-10 md:pb-0">
            <div className="flex flex-col gap-5 pb-5 align-center justify-center items-center">
                <Document file="/Varun_Resume.pdf" onLoadError={(err)=>{console.log(err)}} className={"flex justify-center items-center"}>
                    <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false} loading={<div>Loading page...</div>} />
                </Document>
                <div className="align-middle justify-center">
                    <a href="/Varun_Resume.pdf" target="_blank" className="text-white bg-blue-500 px-4 py-2 rounded">Download Resume</a>
                </div>
            </div>
        </div>
    );
}