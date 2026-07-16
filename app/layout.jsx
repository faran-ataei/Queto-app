import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Get Some Quote",
  description:
    "A lightweight app showcasing motivational quotes from the greatest thinkers and leaders throughout history.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <SidebarProvider>
            <Header />
            {children}
            <Footer />
          </SidebarProvider>
        </main>
      </body>
    </html>
  );
}
