"use client";

import { ICONS, IMAGES } from "@/constants";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Footer, Header, Modal } from "./(home)/_components";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const show_modal = searchParams.get("show_modal");

  const handleModelOpen = () => {
    router.push("/?show_modal=true");
  };

  return (
    <>
      <Header />

      <div className="bg-banner w-full h-[274px] flex items-end px-[160px] relative">
        <h1 className="text-white font-bold text-[50px]">Over View</h1>

        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <Image src={IMAGES.profile} alt="" width={147} height={144} />
        </div>
      </div>

      <div className=" flex justify-between w-[1566px] mx-auto my-[34px]">
        <div className="flex gap-[14px] items-center">
          <Image src={ICONS.basket} alt="" width={30} height={30} />
          <p className="font-medium text-[25px]">Add New Product</p>
        </div>

        <div className="flex gap-[25px]">
          <button className="bg-primary rounded-[40px] w-[189px] h-[66px] font-medium text-[18px] text-white flex items-center justify-center gap-[14px]">
            <Image src={ICONS.save} alt="" width={24} height={24} />
            Save Draft
          </button>
          <button className="bg-primary rounded-[40px] w-[189px] h-[66px] font-medium text-[18px] text-white flex items-center justify-center gap-[14px]">
            <Image src={ICONS.book} alt="" width={24} height={24} />
            Send Product
          </button>
        </div>
      </div>

      <div className="flex gap-[34px] mx-auto">
        <div className="space-y-[55px]">
          <div className="grid grid-cols-5 gap-[19px] w-[843px]">
            <button className="bg-primary text-white rounded-[13px] h-[41px] flex items-center justify-center">
              Feature A
            </button>
            <button className="bg-white text-black border-2 rounded-[13px] h-[41px] flex items-center justify-center">
              Feature B
            </button>
            <button className="bg-white text-black border-2 rounded-[13px] h-[41px] flex items-center justify-center">
              Feature C
            </button>
            <button className="bg-white text-black border-2 rounded-[13px] h-[41px] flex items-center justify-center">
              Feature D
            </button>
            <button className="bg-white text-black border-2 rounded-[13px] h-[41px] flex items-center justify-center">
              Feature E
            </button>
          </div>
          <div className="bg-offWhite rounded-[15px] h-[673px] w-[843px] px-6 py-[29px] flex flex-col gap-[19px]">
            <h4 className="font-semibold text-[22px]">General Information</h4>
            <label htmlFor="" className="font-semibold text-[18px]">
              Name Product
            </label>
            <input
              type="text"
              className="w-[775px] h-[74px] text-lg font-medium rounded-[10px] px-[21px] py-[27px] bg-lightGray"
            />
            <label htmlFor="" className="font-semibold text-[18px]">
              Product Description
            </label>
            <textarea
              rows={10}
              className="w-[775px] h-[74px] py-[36px] text-lg font-medium rounded-[10px] px-[21px] bg-lightGray min-h-[222px]"
            />

            <div className="flex mt-[10px] gap-[49px]">
              <div>
                <label htmlFor="" className="font-semibold text-[18px]">
                  Size
                </label>
                <p className="text-[17px] font-medium text-black/50">
                  Product Category
                </p>

                <div className="flex gap-[49.8px] mt-4">
                  <div className="flex items-center gap-[18.77px]">
                    <button className="text-black/35 w-[63px] h-[59px] bg-lightGray rounded-[6.7px] font-semibold text-xl flex justify-center items-center">
                      <span>XS</span>
                    </button>
                    <button className="text-white w-[63px] h-[59px] bg-primary rounded-[6.7px] font-semibold text-xl flex justify-center items-center">
                      <span>S</span>
                    </button>
                    <button className="text-white w-[63px] h-[59px] bg-primary rounded-[6.7px] font-semibold text-xl flex justify-center items-center">
                      <span>M</span>
                    </button>
                    <button className="text-white w-[63px] h-[59px] bg-primary rounded-[6.7px] font-semibold text-xl flex justify-center items-center">
                      <span>XL</span>
                    </button>
                    <button className="text-black/35 w-[63px] h-[59px] bg-lightGray rounded-[6.7px] font-semibold text-xl flex justify-center items-center">
                      <span>XLL</span>
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="" className="font-semibold text-[18px]">
                  Gender
                </label>
                <p className="text-[17px] font-medium text-black/50">
                  Pick available Gender
                </p>
                <div className="flex items-center gap-[29px] mt-[35px]">
                  <div className="flex items-center gap-[11px]">
                    <div className="border-[3px] cursor-pointer w-[27px] aspect-square rounded-full border-black flex items-center justify-center">
                      <div className="border-[3px] w-[15px] aspect-square rounded-full border-black"></div>
                    </div>

                    <label className="font-semibold text-[18px]">Man</label>
                  </div>
                  <div className="flex items-center gap-[11px]">
                    <div className="border-[3px] w-[27px] cursor-pointer aspect-square rounded-full border-primary flex items-center justify-center">
                      <div className="border-[3px] w-[15px] aspect-square rounded-full border-primary bg-primary"></div>
                    </div>

                    <label className="font-semibold text-[18px]">Women</label>
                  </div>
                  <div className="flex items-center gap-[11px]">
                    <div className="border-[3px] w-[27px] aspect-square cursor-pointer rounded-full border-black flex items-center justify-center">
                      <div className="border-[3px] w-[15px] aspect-square rounded-full border-black"></div>
                    </div>

                    <label className="font-semibold text-[18px]">Both</label>
                  </div>
                </div>
                `{" "}
              </div>
            </div>
          </div>

          <div className="bg-offWhite rounded-[15px] h-[220px] w-[843px] px-6 py-[29px] flex flex-col gap-[19px] ">
            <label htmlFor="" className="font-semibold text-[22px]">
              Category
            </label>
            <p className="text-[17px] font-medium text-black/50">
              Product Category
            </p>

            <div className="bg-lightGray w-[290px] flex justify-between px-[23px] h-[55px] items-center cursor-pointer">
              Product Type
              <Image src={ICONS.chevron} alt="" width={26} height={26} />
            </div>
          </div>

          <div className="bg-offWhite rounded-[15px] h-[371px] w-[843px] px-6 py-[29px] flex flex-col gap-[30px]">
            <label htmlFor="" className="font-semibold text-[22px]">
              Product Variants
            </label>

            <div className="grid grid-cols-2">
              <p className="text-[19px] font-medium text-black/50">Variant</p>
              <p className="text-[19px] font-medium text-black/50 ml-32">
                Amount
              </p>
            </div>

            <div className="flex items-center justify-between gap-[38px] bg-lightGray px-[19px] py-[21px] rounded-[15px] cursor-pointer">
              <button>
                <Image src={ICONS.draggable} alt="" width={31} height={31} />
              </button>

              <p className="font-semibold text-[20px] flex-1">Blue-XL-OVAL</p>

              <p className="font-semibold text-[20px] mr-[50px]">10</p>

              <button className="bg-red h-[29px] w-[29px] rounded-full flex items-center justify-center ml-[16px]">
                <Image src={ICONS.x} alt="" width={19} height={19} />
              </button>

              <button>
                <Image src={ICONS.menu} alt="" width={24} height={24} />
              </button>
            </div>

            <button
              className="text-[20px] font-semibold text-black border-2 border-black/50 rounded-[15px] flex items-center justify-center gap-[11px] h-[73px]"
              onClick={handleModelOpen}
            >
              <Image src={ICONS.plus} alt="" width={31} height={31} />
              Add a Variant
            </button>
          </div>
        </div>

        <div>
          <div className="w-[689px] h-[795px] rounded-[15px] bg-offWhite px-[65px] py-[22px] space-y-[30px]">
            <div className="flex gap-9">
              <button className="bg-primary rounded-[15px] w-[173px] h-[44px] text-white font-semibold text-lg">
                Upload Image
              </button>
              <button className=" rounded-[15px] w-[226px] h-[44px] font-semibold text-lg bg-white">
                Customized Merch
              </button>
            </div>

            <Image
              src={IMAGES.green_hoodie}
              alt=""
              width={570}
              height={516}
              className="rounded-[30px] cursor-pointer"
            />

            <div className="flex gap-[29px]">
              <Image
                src={IMAGES.black_hoodie}
                alt=""
                width={120}
                height={127}
                className="rounded-[15px] cursor-pointer"
              />
              <Image
                src={IMAGES.blue_hoodie}
                alt=""
                width={120}
                height={127}
                className="rounded-[15px] cursor-pointer"
              />
              <Image
                src={IMAGES.gray_hoodie}
                alt=""
                width={120}
                height={127}
                className="rounded-[15px] cursor-pointer"
              />
              <div className="w-[120px] h-[127px] rounded-[15px] border border-primary border-dashed flex items-center justify-center">
                <div className="bg-primary aspect-square w-[40px] text-white font-medium text-2xl rounded-full flex justify-center items-center">
                  +
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[57px] mb-[61px]">
            <label htmlFor="" className="font-semibold text-[22px]">
              Color
            </label>

            <div className="flex items-center gap-[18.77px] mt-4">
              <div className="bg-tealGreen rounded-full w-10 aspect-square border-[3px] border-black" />
              <div className="bg-deepNavy rounded-full w-10 aspect-square" />
              <div className="bg-royalBlue rounded-full w-10 aspect-square" />
              <div className="bg-warmGray rounded-full w-10 aspect-square" />
            </div>
          </div>

          <div className="w-[689px] h-[511px] rounded-[10px] bg-offWhite px-[62px] py-[29.7px] space-y-[30px]">
            <label
              htmlFor=""
              className="font-semibold text-[22px] text-black/75"
            >
              Upload the file
            </label>

            <div className="rounded-[15px] h-[86px] bg-white border flex items-center gap-[9px] px-5">
              <button>
                <Image
                  src={ICONS.file}
                  alt=""
                  width={44}
                  height={44}
                  className="rounded-[15px]"
                />
              </button>
              <div className="flex flex-col flex-1">
                <p className="font-semibold text-[18px]">
                  Make Love not War - Christopher Nolen
                </p>
                <p className="font-medium text-[13px] text-black/40">
                  Legalcontrat.ZIP | 9.83 MB
                </p>
              </div>

              <button>
                <Image
                  src={ICONS.download}
                  alt=""
                  width={29}
                  height={29}
                  className="rounded-[15px] cursor-pointer"
                />
              </button>
              <button className="bg-red h-[43px] w-[47px] rounded-[10px] flex items-center justify-center ml-[16px]">
                <Image src={ICONS.trash} alt="" width={24} height={24} />
              </button>
            </div>

            <div className="w-[591px] h-[178px] bg-white border-[1.5px] rounded-[15px] flex justify-center items-center flex-col gap-5">
              <Image
                src={ICONS.upload}
                alt=""
                width={29}
                height={29}
                className="rounded-[15px]"
              />
              <p className="w-[189px] font-normal text-xl text-center text-black/50">
                Drag & drop or click to choose files
              </p>
            </div>

            <button className="bg-red h-[64px] flex justify-center rounded-[15px] w-full items-center gap-[15px]">
              <Image src={ICONS.trash} alt="" width={24} height={24} />
              <span className="font-semibold text-lg text-white">
                Remove file download from this task
              </span>
            </button>
          </div>
        </div>
      </div>

      {show_modal === "true" ? <Modal /> : null}

      <Footer />
    </>
  );
}
