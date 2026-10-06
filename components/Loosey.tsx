import Image from 'next/image';

/** The original supplied artwork, served locally without altering its paths. */
export function Loosey({ priority = false }: { priority?: boolean }) {
  return (
    <Image
      src="/loosey.svg"
      alt="Loosey, the smiling Loose Wheel tire mascot holding a steaming cup of coffee"
      width={994}
      height={1454}
      priority={priority}
      className="loosey-art"
    />
  );
}
