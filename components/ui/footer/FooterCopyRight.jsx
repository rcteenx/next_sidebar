const FooterCopyRight = () => {
  return (
    <div className="mt-8 py-4 flex justify-between text-white-400 border-t">
      <p className="font-montserrat text-xs">
        &copy; {new Date().getFullYear()} OTTO SOLMAZ LTD. ŞTİ. | WorkBoard
        V3.0.0
      </p>
      <p className="font-montserrat text-xs">
        <span className=" text-red-700">♥</span>&nbsp; by &nbsp;
        <a
          href="https://github.com/rcteenx"
          className="underline"
          target="_blank"
        >
          rcteenx
        </a>
      </p>
    </div>
  );
};

export default FooterCopyRight;
