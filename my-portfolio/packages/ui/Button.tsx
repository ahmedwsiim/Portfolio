import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({ variant = "primary", children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      style={{
        padding: "0.5rem 1rem",
        borderRadius: "0.375rem",
        border: "none",
        cursor: "pointer",
        fontWeight: 600,
        backgroundColor: variant === "primary" ? "#2563eb" : "#6b7280",
        color: "#fff",
        ...props.style,
      }}
    >
      {children}
    </button>
  );
}
