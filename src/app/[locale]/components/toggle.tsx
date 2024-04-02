'use client'
import React from 'react'
import { Link } from "@/navigation";
import { usePathname } from 'next/navigation'

type Props = {
  params: { locale: string };
};

const Toggle = ({ params: { locale } }: Props) => {
  const pathname = usePathname()
  let path = pathname.split("/")
  return (
    <div className="flex absolute lg:top-3 lg:left-3 top-6 left-3">
        <Link
          href={`/${path[2]}`}
          locale="es"
          className={`${
            locale === "es" ? "text-indigo-600" : "text-gray-300"
          } font-bold`}
        >
          ESP
        </Link>
        <span className="text-gray-300 font-bold"> | </span>
        <Link
          href={`/${path[2]}`}
          locale="en"
          className={`${
            locale === "en" ? "text-indigo-600" : "text-gray-300"
          } font-bold`}
        >
          ENG
        </Link>
      </div>
  )
}

export default Toggle