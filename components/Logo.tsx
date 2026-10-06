import Image from 'next/image';

export function Logo() {
  return <Image src="/loose-wheel-logo.svg" alt="Loose Wheel" width={1075} height={607} className="brand-logo" />;
}
