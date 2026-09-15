import { cx } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, copy, align = "left", inverse = false }: { eyebrow: string; title: string; copy?: string; align?: "left" | "center"; inverse?: boolean }) {
  return <div className={cx("section-heading", align === "center" && "section-heading--center", inverse && "section-heading--inverse")}>
    <p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}
  </div>;
}
