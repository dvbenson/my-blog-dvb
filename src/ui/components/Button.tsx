interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  content?: string | React.ReactNode;
  contentStyles?: string;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children?: React.ReactNode;
}

export default function Button({
  onClick,
  content,
  contentStyles,
  variant,
  className,
  type,
  disabled,
}: ButtonProps) {
  const baseClasses = "";

  const primaryClasses = "";
  const secondaryClasses = "";
  const tertiaryClasses = "";

  const variantClasses =
    variant === "primary"
      ? primaryClasses
      : variant === "secondary"
      ? secondaryClasses
      : variant === "tertiary"
      ? tertiaryClasses
      : "";

  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`${baseClasses} ${variantClasses} ${className}`}
        disabled={disabled}
      >
        <span className={contentStyles}>{content}</span>
      </button>
    </>
  );
}
