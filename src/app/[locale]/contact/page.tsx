import React from 'react'
import { Card } from "@/app/[locale]/components/ui/card";
import Form from '@/app/[locale]/components/form';
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};


const Contact = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  
  const t = useTranslations("Contact");
  let title = [t('title1'),t('title2'),t('name1'),t('name2'),t('mail1'),t('mail2'),t('message'),t('buttom')]
  let alert = [t('alert1')]
  return (
    <Card className="col-span-3 col-start-3 row-start-2 row-span-3 lg:h-auto h-[600px] rounded-lg">
      <Form title={title} alert={alert}/>
    </Card>
  )
}

export default Contact