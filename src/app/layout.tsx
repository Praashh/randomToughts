import "~/styles/globals.css";


import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/lib/utils";
import { AppProvider, ThemeProvider } from "./_provider";
import { fontSans } from "~/lib/fonts";
import { Navbar } from "~/components/layout/navbar";

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar/>
      <div
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
       <AppProvider>{children}</AppProvider>
      </div>
    </div>
  );
}
