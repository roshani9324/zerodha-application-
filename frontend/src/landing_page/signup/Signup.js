import { useState } from "react";

const styles = {
  page: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "'Inter', sans-serif",
    backgroundColor: "#f5f5f5",
  },
  left: {
    flex: 1,
    background: "#387ED1",
    padding: "48px 40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "white",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "600",
    letterSpacing: "-0.5px",
    marginBottom: "48px",
  },
  logoMuted: {
    opacity: 0.7,
    fontWeight: "400",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "500",
    lineHeight: 1.35,
    marginBottom: "14px",
  },
  subtext: {
    fontSize: "14px",
    opacity: 0.85,
    lineHeight: 1.7,
    marginBottom: "36px",
  },
  statRow: {
    display: "flex",
    gap: "16px",
  },
  statCard: {
    background: "rgba(255,255,255,0.15)",
    borderRadius: "10px",
    padding: "14px 18px",
    flex: 1,
  },
  statNum: {
    fontSize: "20px",
    fontWeight: "600",
  },
  statLabel: {
    fontSize: "12px",
    opacity: 0.75,
    marginTop: "2px",
  },
  right: {
    flex: 1.2,
    background: "white",
    padding: "48px 40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  formTitle: {
    fontSize: "22px",
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: "6px",
  },
  formSub: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "28px",
  },
  formRow: {
    display: "flex",
    gap: "12px",
  },
  formGroup: {
    flex: 1,
    marginBottom: "16px",
  },
  label: {
    display: "block",
    fontSize: "13px",
    fontWeight: "500",
    color: "#444",
    marginBottom: "6px",
  },
  input: {
    width: "100%",
    padding: "10px 14px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "14px",
    color: "#1a1a1a",
    outline: "none",
    transition: "border 0.15s, box-shadow 0.15s",
    boxSizing: "border-box",
  },
  inputFocus: {
    borderColor: "#387ED1",
    boxShadow: "0 0 0 3px rgba(56,126,209,0.12)",
  },
  otpNote: {
    fontSize: "12px",
    color: "#999",
    marginTop: "-10px",
    marginBottom: "16px",
  },
  checkRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "8px",
    marginBottom: "18px",
  },
  checkLabel: {
    fontSize: "12.5px",
    color: "#555",
    lineHeight: 1.5,
  },
  link: {
    color: "#387ED1",
    textDecoration: "none",
  },
  btnPrimary: {
    width: "100%",
    padding: "12px",
    background: "#387ED1",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background 0.15s",
  },
  divider: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "20px 0",
  },
  dividerLine: {
    flex: 1,
    border: "none",
    borderTop: "1px solid #eee",
  },
  dividerText: {
    fontSize: "12px",
    color: "#aaa",
  },
  loginLink: {
    textAlign: "center",
    fontSize: "13px",
    color: "#666",
  },
  terms: {
    fontSize: "11.5px",
    color: "#aaa",
    textAlign: "center",
    marginTop: "14px",
    lineHeight: 1.6,
  },
};

function InputField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={styles.formGroup}>
      <label style={styles.label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...styles.input,
          ...(focused ? styles.inputFocus : {}),
        }}
      />
    </div>
  );
}

export default function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    if (!form.firstName || !form.mobile || !form.email || !form.password) {
      alert("Please fill in all fields.");
      return;
    }
    if (!form.agreed) {
      alert("Please agree to the Terms & Conditions.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          ...styles.page,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
          <h2 style={{ fontSize: "22px", fontWeight: "600", color: "#1a1a1a" }}>
            OTP send!
          </h2>
          <p style={{ color: "#666", marginTop: "8px" }}>
            {form.mobile} Check the OTP on
            your phone.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      {/* Left Panel */}
      <div style={styles.left}>
        <div style={styles.logo}>
          zerodha <span style={styles.logoMuted}>kite</span>
        </div>
        <h1 style={styles.heading}>
          India's largest
          <br />
          stock broker
        </h1>
        <p style={styles.subtext}>
          Free equity investments. ₹20 flat fee on intraday & F&O trades. 1.5
          crore+ investors trust us.
        </p>
        <div style={styles.statRow}>
          {[
            { num: "1.5 Cr+", label: "Active investors" },
            { num: "₹0", label: "Account opening" },
            { num: "₹20", label: "Flat per trade" },
          ].map((s) => (
            <div key={s.label} style={styles.statCard}>
              <div style={styles.statNum}>{s.num}</div>
              <div style={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div style={styles.right}>
        <h2 style={styles.formTitle}>open your Account</h2>
        <p style={styles.formSub}>Open your Demat & Trading account now</p>

        <div style={styles.formRow}>
          <InputField
            label="First name"
            placeholder="Rahul"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
          />
          <InputField
            label="Last naam"
            placeholder="Sharma"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
          />
        </div>

        <InputField
          label="Mobile number"
          type="tel"
          placeholder="+91 98765 43210"
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
        />
        <p style={styles.otpNote}>OTP will be sent to this number</p>

        <InputField
          label="Email address"
          type="email"
          placeholder="rahul@example.com"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <InputField
          label="Password "
          type="password"
          placeholder="Minimum 8 characters"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <div style={styles.checkRow}>
          <input
            type="checkbox"
            id="agree"
            name="agreed"
            checked={form.agreed}
            onChange={handleChange}
            style={{ marginTop: "2px", accentColor: "#387ED1" }}
          />
          <label htmlFor="agree" style={styles.checkLabel}>
            I am also satisfied with{" "}
            <a href="/" style={styles.link}>
              Terms & Conditions
            </a>
            and
            <a href="/" style={styles.link}>
              Privacy Policy
            </a>
          </label>
        </div>

        <button
          onClick={handleSubmit}
          style={styles.btnPrimary}
          onMouseEnter={(e) => (e.target.style.background = "#2d6bb5")}
          onMouseLeave={(e) => (e.target.style.background = "#387ED1")}
        >
          OTP send →
        </button>

        <div style={styles.divider}>
          <hr style={styles.dividerLine} />
          <span style={styles.dividerText}>or</span>
          <hr style={styles.dividerLine} />
        </div>

        <p style={styles.loginLink}>
          Create account?{" "}
          <a href="/login" style={styles.link}>
            Login
          </a>
        </p>

        <p style={styles.terms}>
          This platform is SEBI-registered. Your data is safe.
        </p>
      </div>
    </div>
  );
}
