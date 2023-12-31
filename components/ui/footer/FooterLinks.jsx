import { footerLinks } from "@/content/data";

const FooterLinks = () => {
  return (
    <div className="flex flex-1 justify-between gap-8 flex-wrap">
      {footerLinks.map((section) => (
        <div key={section.title}>
          <h4 className="mb-2 font-montserrat text-lg leading-normal font-medium text-white border-b">
            {section.title}
          </h4>
          <ul>
            {section.links.map((link) => (
              <li
                className="mt-1 font-montserrat text-sm leading-normal text-white-400 hover:text-slate-gray"
                key={link.name}
              >
                <a href={link.link} target="_blank">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
