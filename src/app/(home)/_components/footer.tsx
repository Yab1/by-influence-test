import { ICONS, IMAGES } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-[493px] bg-softWhite mt-[84px]  px-[115px] py-[92px] ">
      <div className="flex justify-between">
        <div>
          <Link href="">
            <Image src={IMAGES.logo} alt="" width={260} height={80.5} />
          </Link>

          <p className="font-normal text-[13px] mb-[13px] mt-[62px]">
            Join our social media
          </p>

          <div className="flex items-center gap-[14px]">
            <Link href="">
              <Image src={IMAGES.instagram} alt="" width={29} height={29} />
            </Link>
            <Link href="">
              <Image src={IMAGES.twitter} alt="" width={29} height={29} />
            </Link>
            <Link href="">
              <Image src={IMAGES.facebook} alt="" width={29} height={29} />
            </Link>
            <Link href="">
              <Image src={IMAGES.telegram} alt="" width={29} height={29} />
            </Link>
          </div>
        </div>

        <div className="flex gap-[70px]">
          <div className="space-y-[27px]">
            <p className="font-extrabold text-[22px] text-charcoal">Products</p>
            <p className="text-[18px] text-graphite">Product A</p>
            <p className="text-[18px] text-graphite">Product B</p>
            <p className="text-[18px] text-graphite">Product C</p>
            <p className="text-[18px] text-graphite">Product D</p>
          </div>

          <div className="space-y-[27px]">
            <p className="font-extrabold text-[22px] text-charcoal">Help</p>
            <p className="text-[18px] text-graphite">FAQ</p>
            <p className="text-[18px] text-graphite">Design Tips</p>
            <p className="text-[18px] text-graphite">Terms Of Use</p>
            <p className="text-[18px] text-graphite">Privacy Policy</p>
          </div>

          <div className="space-y-[27px]">
            <p className="font-extrabold text-[22px] text-charcoal">
              Contact Us
            </p>
            <p className="text-[18px] text-graphite">+251 93200 5810</p>
            <p className="text-[18px] text-graphite">Support@Byfluence.com</p>
            <p className="text-[18px] text-graphite">Address</p>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="mb-[26px]">
            You can subscribe to our newsletter
          </label>

          <div className="flex">
            <input
              type="email"
              className="w-[353px] h-[68px] bg-[#EBEBEB] px-[30px] py-[29px] text-[#5A5A5A]"
            />

            <button className="h-[68px] w-[75px] bg-primary flex justify-center items-center">
              <Image src={ICONS.search_white} alt="" width={25} height={20} />
            </button>
          </div>

          <div className="flex gap-[19px] items-center mt-[44px]">
            <Link href="">
              <Image
                src={IMAGES.cbe}
                alt=""
                width={48}
                height={46}
                className="grayscale"
              />
            </Link>
            <Link href="">
              <Image
                src={IMAGES.telebirr}
                alt=""
                width={86}
                height={36}
                className="grayscale"
              />
            </Link>
            <Link href="">
              <Image
                src={IMAGES.chapa}
                alt=""
                width={94}
                height={27}
                className="grayscale"
              />
            </Link>
            <Link href="">
              <Image
                src={IMAGES.coop}
                alt=""
                width={53}
                height={21}
                className="grayscale"
              />
            </Link>
          </div>
        </div>
      </div>

      <hr className="bg-black w-full h-px mt-[85px]" />

      <div className="flex gap-[44px] mt-[28px] text-[13px] justify-center">
        <p>The Store © 2024. All rights reserved.</p>
        <p>Privacy</p>
        <p>Terms and Conditions</p>
      </div>
    </footer>
  );
}
