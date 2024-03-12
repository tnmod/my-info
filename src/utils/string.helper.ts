import { useViewport } from "@/hooks/useViewport";

export const getNumberByRatio = (number: number, ratio: number) => {
  return number * ratio;
}

export const convertToPx = (value: string[], resultType?: "s" | "n") => {
  const { container } = useViewport();
  let result: number = 0;
  switch (container) {
    case "sm":
      result = parseInt(value[0]);
      break;
    case "md":
      result = parseInt(value[1]);
      break;
    case "lg":
      result = parseInt(value[2]);
      break;
    case "xl":
      result = parseInt(value[3]);
      break;
    default:
      result = parseInt(value[4]);
      break;
  }
  let finalResult: string | number = result;

  if (resultType === "s") {
    finalResult = result + "px";
  }

  return finalResult
}