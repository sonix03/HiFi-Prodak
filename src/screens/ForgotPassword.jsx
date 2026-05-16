import Button from "../components/Button";

export default function ForgotPassword({ onNavigate }) {
  return (
    <main className="screen screen-pad flex flex-col justify-center">
      <section className="stack">
        <div className="stack gap-3">
          <div className="prodak-mark" aria-label="Prodak">
            <span />
            <strong>Prodak</strong>
          </div>
          <div>
            <h1 className="title">Forgot Password?</h1>
            <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--text-secondary)]">
              Enter your email and we'll send instructions to reset your password.
            </p>
          </div>
        </div>

        <div className="form-field mt-4">
          <label>Email</label>
          <input className="input !rounded-xl !border !border-[var(--text)]" type="email" />
        </div>

        <Button size="lg" className="w-full !rounded-xl bg-[var(--blue)] text-white">
          Send Reset Link
        </Button>

        <button
          className="text-center text-sm font-bold text-[var(--blue)]"
          onClick={() => onNavigate?.("login")}
        >
          Back to Login
        </button>
      </section>
    </main>
  );
}
