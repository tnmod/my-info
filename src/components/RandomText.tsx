import { motion } from "framer-motion";
import { useEffect, useState } from "react";
interface Props {
  input: string;
  delay?: number;
  duration?: number;
  className?: string;
}
export const RandomText = ({
  input = "test",
  delay = 0.5,
  duration = 1.5,
  className
}: Props) => {
  const [text, setText] = useState<string>("");
  const array: Array<{
    id: number;
    char: string;
  }> = [];

  const textPromise = (randomChar: string, index: number, end: number, start: number, current: number) => {
    return new Promise((resolve) => {
      let randomCharCode = Math.floor(Math.random() * (end - start + 1)) + start;
      randomChar = String.fromCharCode(randomCharCode);
      console.log(randomChar, input[index], index);
      if (randomChar == input[index]) {
        array.push({ id: index, char: randomChar });
      } else {
        current++;
      }
    })
  }
  const items = [1, 2, 3, 4, 5];
  function processItem(item: number) {

    setTimeout(() => {
      console.log(`Processing item ${item}`);
      return item;
    }, Math.random() * 1000);
  }

  async function processItems() {
    let result: any = 0
    for (const item of items) {
      result = processItem(result + item);
    }
    console.log('All items processed');
  }
  const textTranf = async () => {
    setText("");
    processItems()
    // for (let index = 0; index < input.length; index++) {
    //   let randomChar = "";
    //   let start = 97;
    //   let end = 122;
    //   let current = 97;
    //   await textPromise(randomChar, index, end, start, current);
    // }
  }

  useEffect(() => {
    console.log(array);
  }, [array]);

  return (
    <motion.p
      onHoverEnd={() => {
        textTranf()
      }}
      transition={{ duration: duration, delay: delay }}
      className={`bg-black text-white text-lg min-w-6 min-h-6 ${className}`}>
      {text}
    </motion.p>
  )
}