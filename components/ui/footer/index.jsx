import FooterCopyRight from "@/components/ui/footer/FooterCopyRight";
import FooterInfo from "@/components/ui/footer/FooterInfo";
import FooterLinks from "@/components/ui/footer/FooterLinks";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="container mx-auto container-p mt-16 bg-black md:rounded-t-2xl"
    >
      <div className="px-2 pt-12 flex justify-between items-start gap-12 flex-wrap max-lg:flex-col">
        <FooterInfo />
        <FooterLinks />
      </div>

      <FooterCopyRight />
    </footer>
  );
};

export default Footer;
