import { Eye, ImagePlus, Lock, Mail } from "lucide-react";
import Phone from "../components/Phone";
import Logo from "../components/Logo";

const providers = [
  { name: "Google", icon: "G" },
  { name: "Apple", icon: "" },
  { name: "Facebook", icon: "f" },
];

export default function Login() {
  return (
    <Phone title="Login">
      <div className="relative isolate h-full overflow-hidden bg-[#427AB5] px-7 py-10 text-left text-white">
        <div className="pointer-events-none absolute -right-16 top-10 z-0 h-44 w-44 rounded-full bg-[#F7DD7D]/25 blur-2xl" />
        <div className="pointer-events-none absolute -left-20 bottom-16 z-0 h-56 w-56 rounded-full bg-[#406AAF]/60 blur-2xl" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-xl" />

        <div className="relative z-10 flex h-full flex-col">
          <Logo className="h-16 w-16" />
          <h2 className="mt-8 text-[1.55rem] font-black leading-tight tracking-[-0.03em]">
            Log in to Prodak
          </h2>

          <div className="mt-8 space-y-5">
            <div>
              <label className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/75">
                Email
              </label>
              <div className="mt-2 flex h-12 items-center gap-3 rounded-[18px] border border-white/25 bg-white/15 px-4 shadow-[0_12px_26px_rgba(23,50,77,0.14)] backdrop-blur-md">
                <Mail size={16} className="text-[#F7DD7D]" />
                <span className="text-[13px] text-white/70">
                  you@example.com
                </span>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/75">
                Password
              </label>
              <div className="mt-2 flex h-12 items-center gap-3 rounded-[18px] border border-white/25 bg-white/15 px-4 shadow-[0_12px_26px_rgba(23,50,77,0.14)] backdrop-blur-md">
                <Lock size={16} className="text-[#F7DD7D]" />
                <span className="text-[13px] text-white/70">********</span>
                <Eye size={15} className="ml-auto text-white/60" />
              </div>
            </div>
          </div>

          <button className="mt-4 self-start text-[12px] font-semibold text-white/85 underline decoration-white/35 underline-offset-4">
            Forgot Password?
          </button>

          <button className="mt-6 h-12 w-full rounded-full bg-white text-[12px] font-black uppercase tracking-[0.16em] text-[#427AB5] shadow-[0_16px_35px_rgba(23,50,77,0.26)]">
            Login
          </button>

          <div className="my-7 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white/65">
            <div className="h-px flex-1 bg-white/25" />
            <span>or</span>
            <div className="h-px flex-1 bg-white/25" />
          </div>

          <div className="space-y-3">
            {providers.map((provider) => (
              <button
                key={provider.name}
                className="flex h-12 w-full items-center rounded-[18px] border border-white/25 bg-white/15 px-3 text-white shadow-[0_12px_26px_rgba(23,50,77,0.12)] backdrop-blur-md"
              >
                <div className="grid h-8 w-8 place-items-center rounded-full bg-white text-[14px] font-black text-[#17324D]">
                  {provider.icon}
                </div>

                <span className="flex-1 pr-8 text-center text-[12px] font-black">
                  Continue with {provider.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Phone>
  );
}