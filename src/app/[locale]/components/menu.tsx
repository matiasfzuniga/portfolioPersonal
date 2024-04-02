'use client'
import { User, BriefcaseBusiness, Send } from "lucide-react";
import { Button } from "@/app/[locale]/components/ui/button";
import { Card } from "@/app/[locale]/components/ui/card";
import { Link } from "@/navigation";
import { usePathname } from 'next/navigation'
const Menu = () => {
  const pathname = usePathname()
  return (
    <section
    id="sticky"
    className="grid lg:grid-cols-3 lg:grid-rows-3 col-span-1 row-start-2 row-span-2 lg:w-auto lg:h-auto w-full h-10 sticky top-0"
  >
    <Card className="col-span-1 row-start-1 row-span-2 rounded-lg lg:shadow-lg shadow-none flex lg:flex-col justify-center items-center gap-4">
        <Link href="/about">
      <Button variant="outline" size="icon" className={`${pathname.split("/")[2]}` === 'about' ? 'ring-1 ring-indigo-400 bg-gray-50 hover:bg-gray-50 dark:bg-slate-900' : 'ring-0'}>
        <User className="h-4 w-4" />
      </Button>
        </Link>
      <Link href="/projects">
      <Button variant="outline" size="icon" className={`${pathname.split("/")[2]}` === 'projects' ? 'ring-1 ring-indigo-400 bg-gray-50 hover:bg-gray-50 dark:bg-slate-900' : 'ring-0'}>
        <BriefcaseBusiness className="h-4 w-4" />
      </Button>
        </Link>
      <Link href="/contact">
      <Button variant="outline" size="icon" className={`${pathname.split("/")[2]}` === 'contact' ? 'ring-1 ring-indigo-400 bg-gray-50 hover:bg-gray-50 dark:bg-slate-900' : 'ring-0'}>
        <Send className="h-4 w-4" />
      </Button>
      </Link>
    </Card>
  </section>
  )
}

export default Menu
