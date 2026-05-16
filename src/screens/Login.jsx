import Button from "../components/Button";
import appleLogo from "../assets/apple-logo.png";
import facebookLogo from "../assets/facebook-logo.png";
import googleLogo from "../assets/google-logo.png";

function SocialButton({ logo, label }) {
  return (
    <button className="relative h-12 w-full rounded-xl border border-[var(--text)] bg-white px-4 text-sm font-semibold shadow-sm">
      <span className="absolute left-4 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-lg">
        <img className="h-5 w-5 object-contain" src={logo} alt="" />
      </span>
      <span className="block text-center">{label}</span>
    </button>
  );
}

export default function Login({ onNavigate }) {
  return (
    <main className="screen screen-pad flex flex-col justify-center">
      <section className="stack">
        <div className="stack gap-3">
          <div className="prodak-mark" aria-label="Prodak">
            <span />
            <strong>Prodak</strong>
          </div>
          <h1 className="title">Log in to Prodak</h1>
        </div>

        <div className="form-field mt-4">
          <label>Email</label>
          <input className="input !rounded-xl !border !border-[var(--text)]" type="email" />
        </div>

        <div className="form-field">
          <label>Password</label>
          <input className="input !rounded-xl !border !border-[var(--text)]" type="password" />
        </div>

        <button className="w-fit text-sm font-semibold text-[var(--text-secondary)] underline">Forgot Password?</button>

        <Button size="lg" className="w-full !rounded-xl bg-[var(--blue)] text-white" onClick={() => onNavigate?.("feed")}>Login</Button>

        <div className="row my-3 text-[var(--text-tertiary)]">
          <span className="h-px flex-1 bg-[var(--divider)]" />
          <span className="text-xs font-medium">or</span>
          <span className="h-px flex-1 bg-[var(--divider)]" />
        </div>

        <SocialButton logo={googleLogo} label="Continue with Google" />
        <SocialButton logo={appleLogo} label="Continue with Apple" />
        <SocialButton logo={facebookLogo} label="Continue with Facebook" />
      </section>
    </main>
  );
}
