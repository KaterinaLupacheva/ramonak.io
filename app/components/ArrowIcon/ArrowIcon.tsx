import styles from "./ArrowIcon.module.css";

const paths = {
  right: "M5 12h14M13 6l6 6-6 6",
  left: "M19 12H5M11 6l-6 6 6 6",
  "up-right": "M7 17 17 7M8 7h9v9",
} as const;

type Direction = keyof typeof paths;

export default function ArrowIcon({
  direction,
  className,
}: {
  direction: Direction;
  className?: string;
}) {
  return (
    <svg
      className={`${styles.icon} ${styles[direction]} ${className ?? ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[direction]} />
    </svg>
  );
}
