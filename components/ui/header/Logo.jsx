import Link from "next/link";
import smd from "@/content/data/siteMetaData";

const HeaderLogo = () => {
  return (
    <Link id="platform" href="/" className="">
      <div className="pt-2 md:pt-3 w-10 md:w-16 xl:w-24 z-50">
        <img src={smd.siteOwner} alt={smd.title} className="p-0.5 " />
      </div>
    </Link>
  );
};

export default HeaderLogo;
