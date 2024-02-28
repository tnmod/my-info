import { useEffect, useState } from "react";

interface ProgressBarProps {
  progress: number;
  time?: number;
  color?: string;
  backdrop?: string;
}

export const ProgressBar = ({
  progress,
  time = 0,
  backdrop = "#fff",
  color = "#000",
}: ProgressBarProps) => {
  return (
    <div className="w-full">
      <div
        style={{
          width: "100%",
          height: "4px",
          backgroundColor: backdrop,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            transition: `width ${time}s linear`,
            height: `100%`,
            backgroundColor: color,
            zIndex: 100,
          }}
        />
      </div>
    </div>
  );
};
