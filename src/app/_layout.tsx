import { Slot } from "expo-router";
import "../global.css";
import { tokenCache } from "@clerk/clerk-expo/token-cache";

export default function Layout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <Slot />
    </ClerkProvider>
  )
}


import { ClerkProvider } from '@clerk/clerk-expo';

