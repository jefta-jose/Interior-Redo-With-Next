import { Sen } from "next/font/google";
import "./globals.css";

//Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

//toast
import { Toaster } from "react-hot-toast";


//Theme Provider
import { ThemeProvider } from "@/components/ThemeProvider";

const Josef = Sen({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap" 
});

export const metadata = {
  title: "Home Axil Interiors",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={Josef.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
            {children}
          <Footer />

          <Toaster
              position="top-center"
              reverseOrder={false}
              gutter={8}
              containerClassName=""
              toastOptions={{
                style: {
                  backgroundColor: "black",
                  color: "white",
                  icon: '👏',
                },
              }}
        />
        </ThemeProvider>
      </body>
    </html>
  );
}
