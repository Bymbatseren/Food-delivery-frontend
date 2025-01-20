import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <SignedOut>
        <div className="">
          <SignInButton />
        </div>
      </SignedOut>
      <SignedIn>
        <UserButton />
        <div>{children}</div>;
      </SignedIn>
    </ClerkProvider>
  );
}
