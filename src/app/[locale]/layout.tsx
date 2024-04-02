import {Urbanist} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/[locale]/components/theme-provider";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { locales } from "../../config";
import Menu from "@/app/[locale]/components/menu";
import Toggle from "@/app/[locale]/components/toggle";
import Profile from "@/app/[locale]/components/profile";
import Themes from "@/app/[locale]/components/themes";


type Props = {
  children: ReactNode;
  params: { locale: string };
};
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("title"),
  };
}

const inter = Urbanist({ subsets: ["latin"] });

export default function RootLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale} suppressHydrationWarning>
      <link rel="icon" href="/logoMini.png" sizes="any" />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="lg:grid grid-cols-6 grid-rows-4 gap-4 lg:w-[100%] lg:h-[100vh] lg:p-10 pt-20">
            <Profile params={{locale}}/>
            <Menu />
            {children}
            <Themes />
            <Toggle params={{ locale }} />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
