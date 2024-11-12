import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "./ReduxProvider";

export const metadata: Metadata = {
  title: "To-do App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
