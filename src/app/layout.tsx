import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: '100',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Projeto Nivo - For Velltri",
  description: "Criado por João Henrique Soares",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
