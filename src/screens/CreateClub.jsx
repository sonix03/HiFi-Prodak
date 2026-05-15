import { Building2, MapPin, Sparkles, Users2 } from "lucide-react";
import Phone from "../components/Phone";

const fields = ["Club Name", "Category", "Location", "Short Description"];

export default function CreateClub() {
  return (
    <Phone title="Create a Club">
      <div className="relative h-full overflow-hidden bg-[#F6FAFD] px-6 pb-8 pt-8 text-left">
        <div className="rounded-[30px] border border-[#427AB5]/18 bg-white p-6 shadow-[0_20px_44px_rgba(64,106,175,0.1)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#427AB5]">
                Club Setup
              </p>
              <h2 className="mt-1 text-[18px] font-black text-[#17324D]">
                Create a club
              </h2>
            </div>

            <div className="grid h-14 w-14 place-items-center rounded-[18px] bg-[#427AB5] text-white shadow-[0_14px_30px_rgba(64,106,175,0.24)]">
              <Building2 size={26} strokeWidth={2.1} />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-[22px] border border-[#427AB5]/14 bg-[#FFF8E8] p-4">
              <Users2 size={18} className="text-[#17324D]" />
              <p className="mt-4 text-[11px] font-black text-[#17324D]">
                Member Target
              </p>
              <p className="mt-1 text-[10px] font-medium text-[#5D6F8B]">
                20 - 150 members
              </p>
            </div>

            <div className="rounded-[22px] border border-[#427AB5]/14 bg-[#D8E1EB]/55 p-4">
              <MapPin size={18} className="text-[#17324D]" />
              <p className="mt-4 text-[11px] font-black text-[#17324D]">
                Coverage
              </p>
              <p className="mt-1 text-[10px] font-medium text-[#5D6F8B]">
                Hybrid local community
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {fields.map((field) => (
              <div
                key={field}
                className="rounded-[18px] border border-[#427AB5]/14 bg-[#F6FAFD] px-4 py-4"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#5D6F8B]">
                  {field}
                </p>
                <div className="mt-3 h-4 w-28 rounded-full bg-[#427AB5]/12" />
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-[22px] border border-dashed border-[#427AB5]/24 bg-white p-5">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-[14px] bg-[#F7DD7D]/45 text-[#17324D]">
                <Sparkles size={18} strokeWidth={2.1} />
              </div>
              <div>
                <p className="text-[11px] font-black text-[#17324D]">
                  Cover and identity
                </p>
                <p className="mt-1 text-[10px] font-medium text-[#5D6F8B]">
                  Upload logo, hero image, and club color
                </p>
              </div>
            </div>
          </div>

          <button className="mt-6 h-12 w-full rounded-full bg-[#17324D] text-[12px] font-black text-white shadow-[0_16px_28px_rgba(23,50,77,0.24)]">
            Publish Club
          </button>
        </div>
      </div>
    </Phone>
  );
}
