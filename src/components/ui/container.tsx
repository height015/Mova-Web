import { cx } from "@/lib/utils";

export function Container({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cx("container", className)}>{children}</div>;
}
