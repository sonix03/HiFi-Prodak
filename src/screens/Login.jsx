import { Eye, Lock, Mail, Navigation } from "lucide-react";
import Phone from "../components/Phone";

const providers = ["Google", "Apple", "Facebook"];

export default function Login() {
  return (
    <Phone title="Login">
      <div className="h-full bg-[#FFE8BE]/45 px-6 pt-12 text-left">
        <div className="grid h-16 w-16 place-items-center rounded-[22px] bg-[#427AB5] text-white shadow-[0_16px_30px_rgba(66,122,181,0.24)]">
          <Navigation size={28} />
        </div>
        <h2 className="mt-8 text-[2rem] font-black leading-[1.02] tracking-[-0.03em] text-[#17324D]">
          Ready for your next effort?
        </h2>
        <p className="mt-3 text-[13px] leading-6 text-[#5D6F8B]">
          Log in and pick up from your last run, ride, or club challenge.
        </p>

        <div className="mt-8 space-y-4">
          <div>
            <label className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5D6F8B]">
              Email
            </label>
            <div className="mt-2 flex h-13 items-center gap-3 rounded-[18px] border border-[#427AB5]/20 bg-white px-4">
              <Mail size={16} className="text-[#406AAF]" />
              <span className="text-[14px] text-[#5D6F8B]">you@example.com</span>
            </div>
          </div>
          <div>
            <label className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5D6F8B]">
              Password
            </label>
            <div className="mt-2 flex h-13 items-center gap-3 rounded-[18px] border border-[#427AB5]/20 bg-white px-4">
              <Lock size={16} className="text-[#406AAF]" />
              <span className="text-[14px] text-[#5D6F8B]">********</span>
              <Eye size={15} className="ml-auto text-[#5D6F8B]" />
            </div>
          </div>
        </div>

        <button className="mt-6 h-12 w-full rounded-full bg-[#427AB5] text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-[0_14px_28px_rgba(66,122,181,0.25)]">
          Log in
        </button>

        <div className="my-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#5D6F8B]">
          <div className="h-px flex-1 bg-[#427AB5]/20" />
          or
          <div className="h-px flex-1 bg-[#427AB5]/20" />
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {providers.map((provider) => (
            <button
              key={provider}
              className="h-11 rounded-[18px] border border-[#427AB5]/20 bg-white text-[11px] font-black uppercase tracking-[0.08em] text-[#17324D]"
            >
              {provider}
            </button>
          ))}
        </div>
      </div>
    </Phone>
  );
}
