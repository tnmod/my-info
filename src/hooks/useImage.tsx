import { useEffect, useMemo, useState } from "react";
import Android from '@/images/logo/android.svg';
import Reactjs from '@/images/logo/reactjs.svg';
import Redux from '@/images/logo/redux.svg';
import RN from '@/images/logo/rn.svg';
import Tailwind from '@/images/logo/tailwind.svg';
import TypeScript from '@/images/logo/typescript.svg';
import Telegram from '@/images/logo/telegram.svg';
import Gmail from '@/images/logo/gmail.svg';
import Linkedin from '@/images/logo/linkedin.svg';
import GooglePlay from '@/images/logo/google-play.svg';
import AppleStore from '@/images/logo/apple.svg';
import Image2 from '@/images/avatar.png';
import Image1 from '@/images/IMG_0619.jpg';


const DevToolsData: TContact[] = [
    // {
    //     name: "react-native",
    //     src: RN,
    // },
    {
        name: "reactjs",
        src: Reactjs,
    },
    {
        name: "redux",
        src: Redux,
    },
    {
        name: "tailwind",
        src: Tailwind,
    },
    {
        name: "android",
        src: Android
    },
    {
        name: "typescript",
        src: TypeScript,
    },
]


const ContactData: TContact[] = [
    {
        name: "telegram",
        src: Telegram,
        href: "https://t.me/tindayayayay"
    },

    {
        name: "gmail",
        src: Gmail,
        href: "mailto:nguyenphutin.mobiledev@gmail.com"
    },
    {
        name: "linkedin",
        src: Linkedin,
        href: "https://www.linkedin.com/in/tnmod/"
    },
]

const AppsData: TApps[] = [
    {
        name: "google-play",
        src: GooglePlay,
        link: [
            {
                title: "U2Music",
                href: "https://play.google.com/store/apps/details?id=com.unicornultra.u2music",
                icon: "https://play-lh.googleusercontent.com/GE7jI_YGsFZpiuimxY95hWig50jszcBPe-I66bHvZKfXRvEljrtmzJdq6yrqzHJ-LiE=w240-h480-rw"
            },
            {
                title: "MonokaiToolkit",
                href: "https://play.google.com/store/apps/details?id=com.nstudio.mtoolkit",
                icon: "https://play-lh.googleusercontent.com/3o0p6QmsCudBwUd0s4O0Ia0OQUa8lQatCK4mefVmNQAFpu4SlMrAbX-nIyijQ9y3az8=w240-h480-rw"
            },
            {
                title: "U2Movie",
                href: "https://play.google.com/store/apps/details?id=com.u2movies",
                icon: "https://play-lh.googleusercontent.com/pB19E23c1-9njzVDhrwiYLOfC3_PJk9KVEhxP36KtcyxHqd9iNnLeEkkEQcEcZhOqQ=w240-h480-rw"
            },
            {
                title: "KhoiLoLôTô",
                href: "https://play.google.com/store/apps/details?id=com.tgames",
                icon: "https://play-lh.googleusercontent.com/lTMgJnwfmtgqlW2XZoGJjccRvvc3WGmxYFH_daQR0rVIcsIZ71sQSjrOzJ7A5IjQwVs=w240-h480-rw"
            },
        ]
    },
    {
        name: "apple-store",
        src: AppleStore,
        link: [
            {
                title: "U2Music",
                href: "https://apps.apple.com/vn/app/u2music/id6446256227",
                icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/a7/a1/8e/a7a18ef8-b723-14f4-5297-da509d267d99/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.png"
            },
            {
                title: "Puber - MonokaiToolkit App",
                href: "https://apps.apple.com/vn/app/puber-monokaitoolkit-app/id6467631254",
                icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/e7/5d/5e/e75d5e26-f4ad-83b1-56be-bae7c29905a7/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/460x0w.png"
            },
        ]
    },
]


export const useImage = (src?: string) => {
    const [image, setImage] = useState<HTMLImageElement | null>(null);
    const [error, setError] = useState<string | Event>();
    const devTools = useMemo(() => DevToolsData, []);
    const contact = useMemo(() => ContactData, []);
    const apps = useMemo(() => AppsData, []);


    useEffect(() => {
        if (!src) return;
        const img = new Image();
        img.onload = () => setImage(img);
        img.onerror = (e) => setError(e);
        img.src = src;
    }, [src]);

    return {
        image,
        error,
        devTools,
        contact,
        apps
    };
}

export const Avatar2 = Image1;
export const Avatar1 = Image2;