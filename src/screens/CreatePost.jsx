import { ImagePlus, MapPin, PenSquare, Tag, Trophy } from "lucide-react";
import Phone from "../components/Phone";

const chips = ["Progress", "Milestone", "Club Update", "Event"];

export default function CreatePost() {
  return (
    <Phone title="Create a Post">
      <div className="relative h-full overflow-hidden bg-[#F6FAFD] px-6 pb-8 pt-8 text-left">
        <div className="rounded-[30px] border border-[#427AB5]/18 bg-white p-6 shadow-[0_20px_44px_rgba(64,106,175,0.1)]">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-[16px] bg-[#17324D] text-white shadow-[0_14px_30px_rgba(23,50,77,0.22)]">
              <PenSquare size={21} strokeWidth={2.1} />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#427AB5]">
                Compose
              </p>
              <h2 className="mt-1 text-[18px] font-black text-[#17324D]">
                Create a post
              </h2>
            </div>
          </div>

          <div className="mt-6 rounded-[24px] border border-dashed border-[#427AB5]/24 bg-[#427AB5]/8 p-5">
            <div className="grid h-28 place-items-center rounded-[18px] bg-white">
              <ImagePlus size={28} className="text-[#427AB5]" />
            </div>
          </div>

          <div className="mt-5 rounded-[20px] border border-[#427AB5]/14 bg-[#F6FAFD] p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#5D6F8B]">
              Post Caption
            </p>
            <div className="mt-3 space-y-2">
              <div className="h-3 rounded-full bg-[#427AB5]/12" />
              <div className="h-3 w-4/5 rounded-full bg-[#427AB5]/12" />
              <div className="h-3 w-3/5 rounded-full bg-[#427AB5]/12" />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[#427AB5]/18 bg-white px-3 py-2 text-[10px] font-bold text-[#17324D]"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-[20px] border border-[#427AB5]/14 bg-[#FFF8E8] p-4">
              <div className="flex items-center gap-2 text-[#17324D]">
                <Trophy size={16} strokeWidth={2.1} />
                <p className="text-[11px] font-black">Challenge Tag</p>
              </div>
              <p className="mt-3 text-[10px] font-medium text-[#5D6F8B]">
                Link this post to an active challenge
              </p>
            </div>

            <div className="rounded-[20px] border border-[#427AB5]/14 bg-[#D8E1EB]/55 p-4">
              <div className="flex items-center gap-2 text-[#17324D]">
                <MapPin size={16} strokeWidth={2.1} />
                <p className="text-[11px] font-black">Location</p>
              </div>
              <p className="mt-3 text-[10px] font-medium text-[#5D6F8B]">
                Add venue or city
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-[20px] border border-[#427AB5]/14 bg-white p-4">
            <div className="flex items-center gap-2 text-[#17324D]">
              <Tag size={16} strokeWidth={2.1} />
              <p className="text-[11px] font-black">Audience</p>
            </div>
            <p className="mt-3 text-[10px] font-medium text-[#5D6F8B]">
              Share to everyone, followers, or selected clubs
            </p>
          </div>

          <button className="mt-6 h-12 w-full rounded-full bg-[#17324D] text-[12px] font-black text-white shadow-[0_16px_28px_rgba(23,50,77,0.24)]">
            Post Now
          </button>
        </div>
      </div>
    </Phone>
  );
}
