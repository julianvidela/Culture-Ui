

// import React from "react";
// import "./fancyButton.css";
// import clsx from "clsx";

// interface BestiaButtonProps {
//   text: string;
//   variant?: "light" | "dark";

// }

// export const FancyButton: React.FC<BestiaButtonProps> = ({
//   text,
//   variant = "light",

// }) => {
//   const bgClass = variant === "light" ? "light" : "dark";



//   return (
//     <button className={clsx("button--bestia", bgClass, "relative inline-flex items-center justify-center overflow-hidden px-8 py3")}>
//       <div className="button__bg" />
//       <span className="text-white relative z-10 mix-blend-difference font-semibold text-[14px]">{text}</span>
//     </button>
//   );
// };


import React from "react";
import "./fancyButton.css";
import clsx from "clsx";

interface BestiaButtonProps {
  children: React.ReactNode;
  variant?: "light" | "dark";


}

export const FancyButton: React.FC<BestiaButtonProps> = ({
  children,
  variant = "light",

}) => {
  const bgClass = variant === "light" ? "light" : "dark";


  return (
    <button
      className={clsx(
        "button--bestia",
        bgClass,
        "relative inline-flex items-center justify-center overflow-hidden border border-[var(--border-primary)]",
      )}
    >
      <div className="button__bg" />
      <span className="text-white relative z-10 mix-blend-difference font-semibold text-[14px]">
        {children}
      </span>
    </button>
  );
};
