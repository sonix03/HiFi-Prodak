import AuthSocialButton from "../components/AuthSocialButton";
import Button from "../components/Button";
import appleLogo from "../assets/apple-logo.png";
import facebookLogo from "../assets/facebook-logo.png";
import googleLogo from "../assets/google-logo.png";

export default function Registration({ onNavigate }) {
  return (
    <main className="screen screen-pad flex flex-col justify-center">
      <section className="stack">
        <div className="stack gap-3">
          <div className="prodak-mark" aria-label="Prodak">
            <span />
            <strong>Prodak</strong>
          </div>
          <h1 className="title">Create your account</h1>
        </div>

        <div className="form-field mt-4">
          <label>Full Name</label>
          <input className="input !rounded-xl !border !border-[var(--text)]" type="text" />
        </div>

        <div className="form-field">
          <label>Email</label>
          <input className="input !rounded-xl !border !border-[var(--text)]" type="email" />
        </div>

        <div className="form-field">
          <label>Password</label>
          <input className="input !rounded-xl !border !border-[var(--text)]" type="password" />
        </div>

        <Button size="lg" className="w-full !rounded-xl bg-[var(--blue)] text-white" onClick={() => onNavigate?.("feed")}>
          Register
        </Button>

        <p className="text-center text-sm font-medium text-[var(--text-secondary)]">
          Already have an account?{" "}
          <button className="font-bold text-[var(--blue)]" onClick={() => onNavigate?.("login")}>
            Login
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
