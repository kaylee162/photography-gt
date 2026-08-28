"use client";

import { useEffect, useState } from "react";

export function MapLink({
  address,
  className,
  children,
}: {
  address: string;
  className?: string;
  children: React.ReactNode;
}) {
  const query = encodeURIComponent(address);
  const [href, setHref] = useState(
    `https://www.google.com/maps/search/?api=1&query=${query}`,
  );

  useEffect(() => {
    if (/iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent)) {
      setHref(`https://maps.apple.com/?q=${query}`);
    }
  }, [query]);

  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}
