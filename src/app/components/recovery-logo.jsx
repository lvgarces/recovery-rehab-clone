import Image from "next/image";

export default function RecoveryLogo() {
  return (
    <div className="w-[148 px] h-[59px]">
    <Image
      src="/LOGO.webp"
      alt="Logo"
      width={148 }
      height={559}
      style={{ width: "100%", height: "100%" }}
      priority
    />
    </div>
  );
}
