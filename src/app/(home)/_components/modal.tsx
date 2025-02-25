type Props = {
  toggleModal: () => void;
};

export default function Modal({ toggleModal }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
      id="modal-overlay"
    >
      <div className="bg-white px-[105px] py-[58px] rounded-[42.71px] z-10 max-h-screen overflow-y-auto shadow-md mt-[10vh]">
        <h3 className="text-5xl font-semibold mb-4">Product Variants</h3>

        <hr className="bg-black w-full h-px" />

        <div>
          <h5 className="font-semibold text-[24px] mt-5">General</h5>
          <p className="text-[17px] font-medium text-black/50">
            Configure the general information for this variant
          </p>

          <div className="flex gap-[87px] mt-10">
            <div className="flex flex-col gap-6">
              <label htmlFor="" className="font-semibold text-[20px] ml-5">
                Custom Title
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="w-[517px] h-[74px] text-lg font-medium rounded-[10px] px-[21px] py-[27px] bg-lightGray"
              />
            </div>

            <div className="flex flex-col gap-6">
              <label htmlFor="" className="font-semibold text-[20px] ml-5">
                Material
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="w-[517px] h-[74px] text-lg font-medium rounded-[10px] px-[21px] py-[27px] bg-lightGray"
              />
            </div>
          </div>
        </div>

        <div>
          <h5 className="font-semibold text-[24px] mt-[70px]">Option</h5>
          <p className="text-[17px] font-medium text-black/50">
            Configure the general information for this variant{" "}
          </p>

          <div className="flex flex-col gap-[40px] mt-10">
            <div className="flex flex-col gap-6">
              <label htmlFor="" className="font-semibold text-[20px] ml-5">
                Type
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="w-[517px] h-[74px] text-lg font-medium rounded-[10px] px-[21px] py-[27px] bg-lightGray"
              />
            </div>

            <div className="flex flex-col gap-6">
              <label htmlFor="" className="font-semibold text-[20px] ml-5">
                Discount Code
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="w-[517px] h-[74px] text-lg font-medium rounded-[10px] px-[21px] py-[27px] bg-lightGray"
              />
            </div>
          </div>
        </div>

        <div>
          <h5 className="font-semibold text-[24px] mt-[70px]">
            Pricing And Stock
          </h5>

          <div className="grid grid-cols-2 gap-y-[40px] gap-[87px] mt-10">
            <div className="flex flex-col gap-6">
              <label htmlFor="" className="font-semibold text-[20px] ml-5">
                Custom Title
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="w-[517px] h-[74px] text-lg font-medium rounded-[10px] px-[21px] py-[27px] bg-lightGray"
              />
            </div>

            <div className="flex flex-col gap-6">
              <label htmlFor="" className="font-semibold text-[20px] ml-5">
                Material
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="w-[517px] h-[74px] text-lg font-medium rounded-[10px] px-[21px] py-[27px] bg-lightGray"
              />
            </div>

            <div className="flex flex-col gap-6">
              <label htmlFor="" className="font-semibold text-[20px] ml-5">
                Material
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="w-[517px] h-[74px] text-lg font-medium rounded-[10px] px-[21px] py-[27px] bg-lightGray"
              />
            </div>

            <div className="flex flex-col gap-6">
              <label htmlFor="" className="font-semibold text-[20px] ml-5">
                Material
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="w-[517px] h-[74px] text-lg font-medium rounded-[10px] px-[21px] py-[27px] bg-lightGray"
              />
            </div>
          </div>
        </div>

        <button
          className="bg-primary w-full font-semibold text-[30px] text-white h-[100px] mt-[70px] rounded-[14.24px]"
          onClick={toggleModal}
        >
          Save Product Variant
        </button>
      </div>
    </div>
  );
}
