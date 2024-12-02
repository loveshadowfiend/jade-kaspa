"use client";

import { Button } from "@/components/ui/button";
import { ButtonProps } from "@/components/ui/button";

interface ClientButtonProps extends ButtonProps {
  onClick?: () => void;
}

export function ClientButton({ onClick, ...props }: ClientButtonProps) {
  return <Button onClick={onClick} {...props} />;
}
