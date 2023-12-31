import Link from "next/link";
import smd from "@/content/data/siteMetaData";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Sidebar from "@/components/ui/Sidebar";

export async function generateMetadata() {
  return {
    title: smd.title,
  };
}

export default function Home() {
  return (
    <>
      <main className="flex">
        <Sidebar />
        <div className="p-4 lg:p-8 w-full">
          <nav className="flex items-start justify-between font-bold text-dark-purple">
            <h1 className="text-2xl font-semibold">Pages</h1>
            <div className="">xxx</div>
          </nav>
        </div>
      </main>
    </>
  );
}
