import React from "react";

export default function Skill({ title, icon }: { title: string; icon: React.ReactNode }) {
    return(
        <div className="p-5 rounded-2xl text-center flex flex-col justify-center items-center w-auto border-2 border-[#2c2d68] gap-3">
            <span className="text-3xl">{icon}</span>
            <span className="text-2xl font-bold text-wrap">{title}</span>
        </div>
    );
}