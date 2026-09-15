import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { cx } from "@/lib/utils";

type ButtonProps = { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "ghost" | "inverse"; className?: string; arrow?: boolean };

export function Button({ href, children, variant = "primary", className, arrow }: ButtonProps) {
  return <Link className={cx("button", `button--${variant}`, className)} href={href}>{children}{arrow && <ArrowUpRight aria-hidden size={18} weight="bold" />}</Link>;
}
