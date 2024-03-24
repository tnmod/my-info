type TApps = {
    name: string;
    src: string,
    link: {
        title: string;
        href: string;
        icon?: string;
    }[]
}
type TContact = {
    name: string;
    src: string;
    href?: string;
}

type Viewport = "sm" | "md" | "lg" | "xl" | "2xl" | "none";