import NavBar from './_components/NavBar';
import './globals.css'

export const metadata = {
  title: 'Varun\'s Cute Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-[#f1e1a7] w-full h-full text-[#2c2d68] font-mono overflow-x-hidden'>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
