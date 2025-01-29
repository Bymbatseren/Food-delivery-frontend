import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Navigation from "./components/navigation";

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
        <div className="flex">
          <Navigation />
          <div>{children}</div>
        </div>
      </SignedIn>
    </ClerkProvider>
  );
}
