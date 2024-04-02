import React from "react";
import { Card } from "@/app/[locale]/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/[locale]/components/ui/tabs";
import { Separator } from "@/app/[locale]/components/ui/separator"
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const About = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("About");
  return (
    <Card className="col-span-3 col-start-3 row-start-2 row-span-3 lg:h-auto h-[600px] rounded-lg lg:overflow-auto">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold px-8 py-8">{t('title')}</h1>
        <span className="bg-indigo-500 w-40 h-1"></span>
      </div>     
      <p className="italic mb-5 lg:px-10 px-8">
            {t('intro1')}<strong>Matías</strong>{t('intro2')}&nbsp;            
            {t('intro3')}<strong>{t('intro4')}</strong>{t('intro5')}{" "}
              <strong>{t('intro6')}</strong> ✔️ 
            </p>
        <Tabs defaultValue="frontend" className="w-full flex justify-center items-center flex-col ">
          <Separator className="my-1 lg:w-[73%] w-[80%]" />
          <div className="flex items-center justify-center lg:flex-row flex-col">
          <p className="lg:pl-0 lg:px-6 pl-6 pr-0 py-3 font-bold text-xl">{t('title2')} 🛠️</p>
          <TabsList>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
          </TabsList>
          </div>
          <TabsContent className="px-10 py-5 bg-slate-50 dark:bg-slate-950 rounded-lg w-auto" value="frontend">
          &bull; {t('front1')}<br />&bull; {t('front2')}<br />&bull; {t('front3')}<br />&bull; {t('front4')}<br />
          </TabsContent>
          <TabsContent className="px-10 py-5 bg-slate-50 dark:bg-slate-950 rounded-lg w-auto" value="backend">&bull; {t('back1')}<br />&bull; {t('back2')}<br />&bull; {t('back3')}<br />&bull; {t('back4')}<br /></TabsContent>
        </Tabs>
    </Card>
  );
};

export default About;
