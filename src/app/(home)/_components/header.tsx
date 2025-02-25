import { ICONS, IMAGES } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-[200px] items-center w-full justify-between px-[175px]">
      <Link href={"#"} className="font-semibold text-[22.67px]">
        Home
      </Link>
      <Link href={"#"} className="font-semibold text-[22.67px]">
        Home
      </Link>

      <Image src={IMAGES.logo} alt="" width={254} height={80.5} />

      <Link href={"#"} className="font-semibold text-[22.67px]">
        Home
      </Link>

      <div className="flex items-center gap-6">
        <Image src={ICONS.search_black} alt="" width={32} height={32} />

        <div className="flex items-center gap-5">
          <span className="bg-darkGray rounded-full w-[59px] aspect-square"></span>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <p className="font-medium text-xl">Eyasu Tilahun</p>

              <Image src={ICONS.chevron} alt="" width={18} height={18} />
            </div>
            <p className=" text-darkGray font-semibold text-lg">Manager</p>
          </div>
        </div>
      </div>
    </header>
  );
}
