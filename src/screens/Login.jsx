import AuthSocialButton from "../components/AuthSocialButton";
import Button from "../components/Button";
import appleLogo from "../assets/apple-logo.png";
import facebookLogo from "../assets/facebook-logo.png";
import googleLogo from "../assets/google-logo.png";
import prodakLogo from "../assets/prodak-logo.png";

export default function Login({ onNavigate }) {
  return (
    <main className="screen screen-pad flex flex-col justify-center">
      <section className="stack">
        <div className="stack gap-3">
          <div className="flex items-center gap-2" aria-label="Prodak">
            <img className="h-10 w-10 object-contain" src={prodakLogo} alt="" />
            <strong className="text-[16px] font-extrabold tracking-normal">Prodak</strong>
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

        <button
          className="w-fit text-sm font-semibold text-[var(--text-secondary)] underline"
          onClick={() => onNavigate?.("forgotPassword")}
        >
          Forgot Password?
        </button>

        <Button size="lg" className="w-full !rounded-xl bg-[var(--blue)] text-white" onClick={() => onNavigate?.("feed")}>Login</Button>

        <p className="text-center text-sm font-medium text-[var(--text-secondary)]">
          Don't have an account?{" "}
          <button className="font-bold text-[var(--blue)]" onClick={() => onNavigate?.("registration")}>
            Register
          </button>
        </p>

        <div className="row my-3 text-[var(--text-tertiary)]">
          <span className="h-px flex-1 bg-[var(--divider)]" />
          <span className="text-xs font-medium">or</span>
          <span className="h-px flex-1 bg-[var(--divider)]" />
        </div>

        <AuthSocialButton logo={googleLogo} label="Continue with Google" />
        <AuthSocialButton logo={appleLogo} label="Continue with Apple" />
        <AuthSocialButton logo={facebookLogo} label="Continue with Facebook" />
      </section>
    </main>
  );
}
