import { getRandomPositions } from "@/helpers/getRandomPositions";

import { Text } from "@/components/Atoms/Text/Text";
import { FloatingHelper } from "@/helpers/FloatingHelper";
import Link from "next/link";
import clsx from "clsx";
import { FancyButton } from "@/components/Atoms/FancyButton/FancyButton";

const tooltips = [
  { icon: "👨🏻‍🚀", tooltip: "Hi Word", text: "text-[25px]" },
  { icon: "🚀", tooltip: "to the moon", text: "text-[30px]" },
  { icon: "✨", tooltip: "Stars", text: "text-[38px]" },
  { icon: "🎨", tooltip: "Tailwind", text: "text-[38px]" },
  { icon: "🌀", tooltip: "React", text: "text-[30px]" },
  { icon: "🎱", tooltip: "8-ball", text: "text-[38px]" },
  { icon: "⚡", tooltip: "Ray", text: "text-[25px]" },
  { icon: "😎", tooltip: "Top", text: "text-[20px]" },
];

const positions = getRandomPositions(tooltips.length);

export const HeroShowCase = () => {
  return (
    <div className="h-[23rem] md:h-[30rem] flex flex-col items-center justify-center w-full gap-5 px-4 relative">
      <div className="flex items-center">
        <Text as="h2" size="extra-large" fontWeight="800" color="secondary">
          Design Showcase
        </Text>
      </div>
      <div className="w-[90%] md:w-[50%] flex items-center text-center">
        <Text as="p" size="normal" fontWeight="600" color="primary">
          Visual reference for all UI components in the system. See how each
          element looks and behaves in real-world usage.
        </Text>
      </div>
      <div className="w-full flex gap-4 sm:gap-6 justify-center">
        <FancyButton>
          <Link href="/docs" className="flex items-center px-10 py-3">Get Started</Link>
        </FancyButton>
      </div>
      {tooltips.map((tooltip, index) => {
        const { position, positionLg } = positions[index];
        return (
          <div
            key={index}
            className={clsx(position, `lg:${positionLg}`, "hidden md:block")}
          >
            <FloatingHelper tooltip={tooltip.tooltip}>
              <p
                className={clsx(
                  "bg-black border border-[var(--border-primary)] px-4 py-3 rounded-full",
                  tooltip.text
                )}
              >
                {tooltip.icon}
              </p>
            </FloatingHelper>
          </div>
        );
      })}
    </div>
  );
};
