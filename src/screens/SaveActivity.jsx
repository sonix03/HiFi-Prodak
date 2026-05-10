import { Bookmark } from "lucide-react";
import ActivityMap from "../components/ActivityMap";
import MediaPlaceholder from "../components/MediaPlaceholder";
import Phone from "../components/Phone";
import Top from "../components/Top";

export default function SaveActivity() {
  return (
    <Phone title="Save Activity">
      <div className="h-full bg-[#FFE8BE]/45 text-left">
        <Top title="Save activity" right={<Bookmark size={16} />} />
        <div className="px-6">
          <ActivityMap height="h-40" />

          <section className="mt-5 rounded-[24px] border border-[#427AB5]/20 bg-white p-5 shadow-[0_14px_30px_rgba(64,106,175,0.08)]">
            <label className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5D6F8B]">
              Title
            </label>
            <div className="mt-2 flex h-13 items-center rounded-[18px] bg-[#FFE8BE]/45 px-4 text-[14px] font-semibold text-[#17324D]">
              Morning run
            </div>

            <label className="mt-4 block text-[11px] font-bold uppercase tracking-[0.18em] text-[#5D6F8B]">
              Notes
            </label>
            <div className="mt-2 h-24 rounded-[18px] bg-[#FFE8BE]/45 p-4 text-[14px] leading-6 text-[#5D6F8B]">
              How was your activity?
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2.5">
              <MediaPlaceholder
                label="Cover"
                caption="Main photo"
                square
                tone="warm"
              />
              <MediaPlaceholder
                label="Detail"
                caption="Image slot"
                square
              />
              <MediaPlaceholder
                label="Extra"
                caption="Image slot"
                square
              />
            </div>
          </section>

          <button className="mt-5 h-12 w-full rounded-full bg-[#427AB5] text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-[0_14px_28px_rgba(66,122,181,0.25)]">
            Save activity
          </button>
        </div>
      </div>
    </Phone>
  );
}
