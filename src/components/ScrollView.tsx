import { useViewport } from "@/hooks/useViewport";
import { useEffect, useState } from "react";
import { ProgressBar } from "./ProgressBar";

interface Props {
    offset: number,
    height: number,
    start: number,
    count: number,
    children?: React.ReactNode,
    width?: number,
    backgroundColor?: string
}

export const ScrollView = ({ height, count, offset, children, width, backgroundColor, start }: Props) => {


    return (
        <div style={{
            width: width || "100%",
            height: height * count,
            backgroundColor: backgroundColor || "#000",
            display: "flex",
            flexDirection: "column",
            alignItems: offset > start + (height * (count - 2)) ? "flex-end" : "flex-start",
        }}>
            <div className={`w-full h-screen bg-green-600 py-12 ${offset > start && offset < start + (height * (count - 1)) && "fixed top-0 left-0"}`}>
                {children}
                <ProgressBar
                    time={0.2}
                    progress={0.5}
                    color="#ffffff"
                    backdrop="#000000"
                />
            </div>
        </div>
    )
}