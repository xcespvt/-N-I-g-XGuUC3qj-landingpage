
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Poppins, PT_Sans } from 'next/font/google'
import { ToastProvider } from '@/components/ui/toast';

export const metadata: Metadata = {
  title: 'Crevings Landing',
  description: 'Good Food, Fair Prices, Delivered to You',
};

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700']
})

const ptSans = PT_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pt-sans',
  weight: ['400', '700']
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`font-body antialiased relative ${poppins.variable} ${ptSans.variable}`}>
        <ToastProvider>
          {children}
        </ToastProvider>
        <Toaster />
      </body>
    </html>
  );
}
