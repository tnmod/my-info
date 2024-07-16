'use client'
import {useViewport} from "@/hooks/useViewport";
import ReactLenis from "lenis/react";

export const SmoothScroll = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const {viewportWidth} = useViewport();

    return (
        <ReactLenis options={{
            smoothWheel: viewportWidth > 768
        }} root>
            {children}
        </ReactLenis>
    )
}
