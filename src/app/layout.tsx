import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Workspace - Admin Dashboard",
  description: "A modern admin dashboard for managing your workspace",
  icons: {
    icon: [
      { url: "/images/workspace-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/workspace-logo.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [
      { url: "/images/workspace-logo.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: [{ url: "/images/workspace-logo.png" }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
} 