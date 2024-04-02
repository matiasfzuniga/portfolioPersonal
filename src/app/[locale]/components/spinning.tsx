import React, { ReactNode } from "react";

interface SpinningTextProps {
  text: string;
  children?: ReactNode;
}

function SpinningText({ text, children }: SpinningTextProps) {
  const length = text.length;
  const deg = 360 / length;

  return (

    <div className="spinning-text-wrapper">
      <div className="spinning-text dark:text-blue-100 text-gray-950">
        <p>
          {text.split("").map((letra, i) => (
            <span
              key={i}
              style={{
                transform: `rotate(${deg * i}deg)`,
              }}
            >
              {letra}
            </span>
          ))}
        </p>
      </div>
      {children}
    </div>

  );
}

export default SpinningText;