import loginIntroBg from "../assets/login-intro.png";

export default function LoginIntro({ onNavigate }) {
  return (
    <main className="screen relative overflow-hidden bg-[var(--blue)] text-white">
      <img className="absolute inset-0 h-full w-full object-cover" src={loginIntroBg} alt="" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.68)_0%,rgba(37,99,235,0.08)_38%,rgba(37,99,235,0.74)_100%)]" />
      <section className="relative z-10 flex min-h-full flex-col px-6 pb-8 pt-9">
        <div className="flex items-center gap-2 text-[var(--text)]" aria-label="Prodak">
          <span className="block h-7 w-7 rounded-full border-[5px] border-[var(--text)] border-r-[var(--blue)]" />
          <strong className="text-[16px] font-extrabold tracking-normal">Prodak</strong>
        </div>

        <div className="flex flex-1 flex-col justify-center pt-28">
          <h1 className="max-w-[340px] text-[32px] font-black leading-[1.05] tracking-normal text-white">
            Connecting the
            <br />
            world's productivity.
          </h1>
        </div>

        <div>
          <button
            className="h-12 w-full rounded-xl bg-white text-[13px] font-bold text-[var(--blue)] shadow-[0_16px_34px_rgba(15,23,42,0.18)] active:scale-[0.99]"
            onClick={() => onNavigate?.("login")}
          >
            Log In
          </button>
        </div>
      </section>
    </main>
  );
}
