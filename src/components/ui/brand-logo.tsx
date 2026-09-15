import Image from "next/image";

export function BrandLogo({ inverse = false }: { inverse?: boolean }) {
  return <span className={inverse ? "brand-logo brand-logo--inverse" : "brand-logo"}><Image src="/brand/mova-logo-web.png" width={900} height={300} sizes="145px" alt="Mova" priority /></span>;
}
