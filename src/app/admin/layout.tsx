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
        <span>
          <SignInButton />
        </span>
      </SignedOut>
      <SignedIn>
        <span className="w-4">
          <UserButton />
        </span>
        <div>{children}</div>;
      </SignedIn>
    </ClerkProvider>
  );
}
