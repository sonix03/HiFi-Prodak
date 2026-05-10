import { MoreHorizontal, Send } from "lucide-react";
import Avatar from "../components/Avatar";
import Phone from "../components/Phone";
import Top from "../components/Top";

const comments = [
  ["AR", "Nice pace!", "2 min ago"],
  ["MF", "Mantap bro", "4 min ago"],
  ["TS", "Next run bareng ya", "8 min ago"],
];

export default function Comments() {
  return (
    <Phone title="Comments">
      <div className="h-full bg-[#FFE8BE]/45 pb-[104px] text-left">
        <Top title="Discussion" right={<MoreHorizontal size={16} />} />
        <div className="px-6">
          <div className="rounded-[24px] border border-[#427AB5]/20 bg-white p-4">
            <p className="text-[15px] font-black text-[#17324D]">Morning tempo ride</p>
            <p className="mt-1 text-[12px] leading-6 text-[#5D6F8B]">
              18 kudos and 3 comments
            </p>
          </div>

          <div className="mt-5 space-y-4">
            {comments.map(([initials, comment, time], index) => (
              <div key={comment} className="flex gap-3">
                <Avatar
                  initials={initials}
                  size="sm"
                  tone={index === 1 ? "blue" : "cream"}
                />
                <div className="min-w-0 flex-1 rounded-[20px] border border-[#427AB5]/20 bg-white px-4 py-3">
                  <p className="text-[13px] font-black text-[#17324D]">{comment}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#5D6F8B]">
                    {time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-30 border-t border-[#427AB5]/20 bg-white px-6 py-4">
          <div className="flex h-12 items-center gap-2 rounded-full bg-[#FFE8BE]/45 px-4">
            <span className="text-[14px] text-[#5D6F8B]">Write a comment...</span>
            <Send className="ml-auto text-[#427AB5]" size={16} />
          </div>
        </div>
      </div>
    </Phone>
  );
}
