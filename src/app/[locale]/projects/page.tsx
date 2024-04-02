import React from "react";
import { Card } from "@/app/[locale]/components/ui/card";
import { Button } from "@/app/[locale]/components/ui/button";
import Link from "next/link";
import "../globals.css";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const Projects = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Projects')
  
  return (
    <Card className="col-span-3 col-start-3 row-start-2 row-span-3 lg:h-auto h-[600px] rounded-lg">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold px-8 py-8">{t('title')}</h1>
        <span className="bg-indigo-500 w-40 h-1"></span>
      </div>
      <div className="grid gap-4 justify-center lg:pt-7 pt-20">
        <Link href={"https://github.com/matiasfzuniga/portfolioPersonal"} className="group relative flex">
          <Button
            variant="profile"
            className="h-20 lg:w-96 w-60 rounded-r-none dark:hover:bg-slate-900 hover:bg-indigo-100 group relative"
          >
            <span className="group-hover:hidden lg:inline hidden"><strong>{t('option1')}</strong></span>
            <span className="lg:hidden group-hover:block">
           <strong>{t('p1')}</strong>
            <br />
              {t('p1Detail')}
            </span>
          </Button>
          <span className="bg-indigo-500 dark:bg-blue-900 p-1 h-full hidden group-hover:absolute group-hover:block group-hover:right-0"></span>
        </Link>
        <Link href={"https://github.com/matiasfzuniga/dosgecontenidos"} className="group relative flex">
          <Button
            variant="profile"
            className="h-20 lg:w-96 w-60 rounded-r-none dark:hover:bg-slate-900 hover:bg-indigo-100 group relative"
          >
            <span className="group-hover:hidden lg:inline hidden"><strong>{t('option2')}</strong></span>
            <span className="lg:hidden group-hover:block">
            <strong>{t('p2')}</strong><br />
              {t('p2Detail')}
            </span>
          </Button>
          <span className="bg-indigo-500 dark:bg-blue-900 p-1 h-full hidden group-hover:absolute group-hover:block group-hover:right-0"></span>
        </Link>
        <Link href={"https://github.com/matiasfzuniga/crono-app"} className="group relative flex">
          <Button
            variant="profile"
            className="h-20 lg:w-96 w-60 rounded-r-none dark:hover:bg-slate-900 hover:bg-indigo-100 lg:group relative">
            <span className="group-hover:hidden lg:inline hidden"><strong>{t('option3')}</strong></span>
            <span className="lg:hidden group-hover:block">
            <strong>{t('p3')}</strong><br />
              {t('p3Detail')}
            </span>
          </Button>
            <span className="bg-indigo-500 dark:bg-blue-900 p-1 h-full hidden group-hover:absolute group-hover:block group-hover:right-0"></span>
        </Link>
      </div>
    </Card>
  );
};

export default Projects;
