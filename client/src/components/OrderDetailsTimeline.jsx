import Button from "./Button";
import { AttachmentSvg, SmileSvg } from "./Svgs";

export default function OrderDetailsTimeline() {
  return (
    <div>
      <h4>Timeline</h4>

      <div className="mt-1.5 rounded-xl overflow-hidden">
        <div className="py-2 px-4 bg-white flex">
          <Button
            type="orderDetailsOrder"
            extraClasses="h-[45px] px-0 py-0 flex items-center justify-center  aspect-square"
          >
            XD
          </Button>

          <input
            type="text"
            placeholder="Leave a comment"
            className="w-full outline-none border-none caret-blue font-normal px-3 py-1 text-[15px]"
          />
        </div>

        <div className="bg-[#DCDCDC] py-2 px-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Button>
              <SmileSvg height={19} />
            </Button>

            <Button extraClasses="text-[#595959] text-xl h-fit leading-0 mb-1">
              @
            </Button>

            <Button extraClasses="text-[#595959] text-xl h-fit leading-0">
              #
            </Button>

            <Button>
              <AttachmentSvg height={13} />
            </Button>
          </div>

          <Button type="orderDetailsOrder">Post</Button>
        </div>
      </div>
    </div>
  );
}
