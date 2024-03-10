import Image from 'next/image';
interface MarqueePropsWithChildren {
  children: string;
  count: number;
  style?: React.CSSProperties;
}

type keyWords = {
  name?: string;
  icon?: string;
}

interface MarqueePropsWithKeywords {
  keyWords: keyWords[];
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
              <div className=" animate-marquee whitespace-nowrap">
                <span style={props.style} className="text-4xl mx-4">{children}</span>
              </div>

              <div className="absolute top-0  animate-marquee2 whitespace-nowrap">
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
              <div className=" animate-marquee flex-nowrap flex">
                {keyWords.map((item, index) => (
                  <div key={index} className="flex items-center flex-row gap-8  px-4">
                    {
                      item.name && (
                        <span className='text-4xl text-gray-700'>
                          {item.name}
                        </span>
                      )
                    }
                    {
                      item.icon && (
                        <div className={`w-16 h-16 flex items-center justify-center opacity-70 ${!item.name && "w-28 h-28"}`}>
                          <Image
                            priority
                            style={{
                              filter: "grayscale(1)"
                            }}
                            src={item.icon}
                            alt={item.icon}
                          />
                        </div>
                      )
                    }
                  </div>
                ))}
              </div>

              <div className="absolute top-0  animate-marquee2 flex-nowrap flex">
                {keyWords.map((item, index) => (
                  <div key={index} className="flex items-center flex-row  gap-8 px-4">
                    {
                      item.name && (
                        <span className='text-4xl text-gray-700'>
                          {item.name}
                        </span>
                      )
                    }
                    {
                      item.icon && (
                        <div className={`w-16 h-16 flex items-center justify-center opacity-70 ${!item.name && "w-28 h-28"}`}>
                          <Image
                            priority
                            style={{
                              filter: "grayscale(1)"
                            }}
                            src={item.icon}
                            alt={item.icon}
                          />
                        </div>
                      )
                    }
                  </div>
                ))}
              </div>
            </div>
          )) : (
            <div className="relative flex overflow-x-hidden">
              <div className=" animate-marquee flex-nowrap flex">
                {keyWords.map((item, index) => (
                  <div key={index} className="flex items-center flex-row gap-8  px-4">
                    {
                      item.name && (
                        <span className='text-4xl text-gray-700'>
                          {item.name}
                        </span>
                      )
                    }
                    {
                      item.icon && (
                        <div className={`w-16 h-16 flex items-center justify-center opacity-70 ${!item.name && "w-28 h-28"}`}>
                          <Image
                            priority
                            style={{
                              filter: "grayscale(1)"
                            }}
                            src={item.icon}
                            alt={item.icon}
                          />
                        </div>
                      )
                    }
                  </div>
                ))}
              </div>

              <div className="absolute top-0  animate-marquee2 flex-nowrap flex">
                {keyWords.map((item, index) => (
                  <div key={index} className="flex items-center flex-row  gap-8 px-4">
                    {
                      item.name && (
                        <span className='text-4xl text-gray-700'>
                          {item.name}
                        </span>
                      )
                    }
                    {
                      item.icon && (
                        <div className={`w-16 h-16 flex items-center justify-center opacity-70 ${!item.name && "w-28 h-28"}`}>
                          <Image
                            priority
                            style={{
                              filter: "grayscale(1)"
                            }}
                            src={item.icon}
                            alt={item.icon}
                          />
                        </div>
                      )
                    }
                  </div>
                ))}
              </div>
            </div>
          )
        }
      </>
    );
  }
}