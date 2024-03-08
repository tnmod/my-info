'use client'
import { ReactLenis } from "@studio-freight/react-lenis"

export const SmoothScroll = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <ReactLenis root>
            {children}
        </ReactLenis>
    )
}