import { SignInButton } from "@clerk/nextjs";
export function UserLogIn() {
  return (
    <>
      <div className="flex gap-20 justify-center h-screen items-center ">
        <div className="flex flex-col justify-center w-[416px]">
          <button className="w-[35px] h-[35px] bg-white border rounded-md mb-7"></button>
          <p className="font-semibold text-[24px] mb-2">Create your account</p>
          <p className="text-[#71717A] text-[16px] mb-6">
            Sign up to explore your favorite dishes.
          </p>
          <input
            placeholder="Enter your email address"
            className="mb-6 p-2 text-[14px] border-[#E4E4E7] border rounded-sm"
          />
          <button className="mb-5 bg-[#18181B] text-white p-2 rounded-md">
            Let's Go
          </button>
          <div className="flex justify-center text-[#71717A] gap-4">
            <p className="text-[#71717A] text-[16px]">
              Already have an account?
            </p>
            <p className="text-[#2563EB]">
              <SignInButton />
            </p>
          </div>
        </div>
        <img src="/frame.png" className="w-[856px] h-[904px]" />
      </div>
    </>
  );
}
