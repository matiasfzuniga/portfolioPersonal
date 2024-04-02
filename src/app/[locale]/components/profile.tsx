import React from "react";
import { MapPin, Mail, CalendarDays,Download } from "lucide-react";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import {
  Card,
} from "@/app/[locale]/components/ui/card";
import { Separator } from "@/app/[locale]/components/ui/separator"
import { Button } from "@/app/[locale]/components/ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import SpinningText from "@/app/[locale]/components/spinning";

type Props = {
  params: { locale: string };
};


const Profile = ({ params: { locale } }: Props) => {
  const t = useTranslations("Profile");

  let cv = () => {
    if(locale == `es`) return '/cvES_MatiasZuñiga.pdf'
    return '/cvEN_MatiasZuñiga.pdf'
  }

  return (
    <Card className="col-span-2 row-start-2 row-span-3 lg:pt-20 pt-20 rounded-lg lg:shadow-lg shadow-none flex justify-center items-center flex-col lg:relative lg:h-auto h-[500px]">
      <h1 className="pb-2 font-semibold text-3xl">Matias Zuñiga</h1>
        <p>{t("title")}</p>
      <div className="p-2 flex justify-around rounded-lg gap-2">
      <Link href={"https://www.linkedin.com/in/matiasfzuniga/"}>
        <Button variant="profile" size="social">
          <GrLinkedinOption
            className={`transition-transform duration-300 transform shadow-xl lg:hover:scale-105 h-5 w-5`}
          />
        </Button>
      </Link>
      <Link href={"https://github.com/matiasfzuniga/"}>
        <Button variant="profile" size="social">
          <FaGithub
            className={`transition-transform duration-300 transform shadow-xl lg:hover:scale-105 h-5 w-5`}
          />
        </Button>
        </Link>
      </div>
      <Card className="m-2 w-72 h-32 rounded-lg shadow-none flex flex-col justify-center items-center border-none bg-slate-50 dark:bg-slate-950">
        <div>
          <div className="flex">
            <Mail className="p-1" />
            <p> matiaszuniga93@gmail.com</p>
          </div>
          <div className="flex justify-center items-center">
            <Separator className="my-1 w-[80%]" />
          </div>
          <div className="flex">
            <MapPin className="p-1" />
            <p> Mendoza, Argentina</p>
          </div>
          <div className="flex justify-center items-center">
            <Separator className="my-1 w-[80%]" />
          </div>
          <div className="flex">
            <CalendarDays className="p-1" />
            <p>{t('age')}</p>
          </div>
        </div>
      </Card>
      <Link href={cv()}  target="_blank" rel="noopener noreferrer" locale={false}>
      <Button variant="profile" className="lg:p-4 mt-2">
      {t('buttom')} <Download className="p-1" />
      </Button>
      </Link>
      <section className="absolute lg:-top-20 -top-4 m-8 lg:m-auto rounded-lg lg:w-[200px] w-[170px] h-[170px] lg:h-[200px] overflow-hidden">
       <div className="flex justify-center items-center lg:p-4 p-2">
        <SpinningText text={` FRONTEND - BACKEND - ${t('dev')} -`}> 
        <Image
          priority={true}
          src={"/image-perfil.jpg"}
          alt="image-perfil"
          width={600}
          height={600}
          className="rounded-full"
        /></SpinningText>
        </div>
      </section>
    </Card>
  );
};

export default Profile;
