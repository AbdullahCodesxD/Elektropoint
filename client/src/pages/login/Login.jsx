import { useState } from "react";
import Button from "../../components/Button";
import { createUser, login } from "../../utils/userApi";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    login({
      email,
      password,
    });
  }
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-[700px]  bg-white p-5 rounded-md "
      >
        <div className="mb-1 flex flex-col gap-2">
          <label
            required
            htmlFor="email"
            className="mt-1 pl-0.5 -mb-2 text-base font-medium"
          >
            Email
          </label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            className="w-full max-w-[700px] px-3 py-2.5 rounded-lg outline-none border border-dark/60"
          />
        </div>
        <div className="mb-1 flex flex-col gap-2">
          <label
            htmlFor="password"
            className="mt-1 pl-0.5 -mb-2 text-base font-medium"
          >
            Password
          </label>
          <div className="relative w-full rounded-lg overflow-hidden">
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type={!show ? "password" : "text"}
              className="w-full max-w-[700px] pr-[75px] px-3 py-2.5 rounded-lg outline-none border border-dark/60"
            />

            {password.length > 0 && (
              <Button
                buttonType="button"
                handler={(e) => {
                  e.preventDefault();
                  setShow(!show);
                }}
                extraClasses="w-[70px] bg-main text-dark absolute top-0 right-0 h-full"
              >
                {!show ? "Show" : "Hide"}
              </Button>
            )}
          </div>
        </div>
        <Button
          buttonType="submit"
          extraClasses="ml-auto block w-fit bg-main text-white px-12 py-1.5 rounded-md mt-3  transition-all hover:opacity-80"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
