
interface MarqueePropsWithChildren {
    children: string;
    count: number;
    style?: React.CSSProperties;
}

interface MarqueePropsWithKeywords {
    keyWords: string[];
    count?: number;
    style?: React.CSSProperties;
}

type MarqueeProps = MarqueePropsWithChildren | MarqueePropsWithKeywords;


export const MarqueeText = (props: MarqueeProps) => {
    if ("children" in props) {
        const { children, count } = props as MarqueePropsWithChildren;
        return (
            <>
                {
                    Array.from({ length: count }).map((_, i) => (
                        <div key={i} className="relative flex overflow-x-hidden">
                            <div className="py-12 animate-marquee whitespace-nowrap">
                                <span style={props.style} className="text-4xl mx-4">{children}</span>
                            </div>

                            <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                                <span style={props.style} className="text-4xl mx-4">{children}</span>
                            </div>
                        </div>
                    ))
                }
            </>
        );
    } else {
        const { keyWords, count } = props as MarqueePropsWithKeywords;
        return (
            <>
                {
                    count ? Array.from({ length: count }).map((_, i) => (
                        <div key={i} className="relative flex overflow-x-hidden">
                            <div className="py-12 animate-marquee whitespace-nowrap">
                                {keyWords.map((item, index) => (
                                    <span style={props.style} key={index} className="text-4xl mx-4">{item}</span>
                                ))}
                            </div>

                            <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                                {keyWords.map((item, index) => (
                                    <span style={props.style} key={index} className="text-4xl mx-4">{item}</span>
                                ))}
                            </div>
                        </div>
                    )) : (
                        <div className="relative flex overflow-x-hidden">
                            <div className="py-12 animate-marquee whitespace-nowrap">
                                {keyWords.map((item, index) => (
                                    <span style={props.style} key={index} className="text-4xl mx-4">{item}</span>
                                ))}
                            </div>

                            <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                                {keyWords.map((item, index) => (
                                    <span style={props.style} key={index} className="text-4xl mx-4">{item}</span>
                                ))}
                            </div>
                        </div>
                    )
                }
            </>
        );
    }
}