// src/ClerkProvider.js
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

const clerkPubKey = "pk_test_aHVtb3JvdXMtd2hhbGUtNS5jbGVyay5hY2NvdW50cy5kZXYk";

export function ClerkProviderWrapper({ children }) {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedIn>
        {children}
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}