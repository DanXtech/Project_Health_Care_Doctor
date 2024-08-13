<div className="flex gap-[66px] self-stretch md:flex-col w-ful">
  <Suspense fallback={<div>Lading fee...</div>}>
    {enhancedServiceOptionLst.map((item, index) => (
      <div
        key={index}
        className={`flex flex-col items-center w-[32%] md:w-full px-5 py-12 md:py-5 rounded-[30px] shadow ${item.backgroundColor}`}
      >
        <img
          src={item.ServiceImg}
          className="mt-11 h-[162px] w-[162px] object-cover "
          alt=""
        />
        {/* <h3 className={`mt-[52px] self-start text-3xl font-semibold ${item.textColors}`}>{item.chatTtle}</h3> */}
        {/* <h3 className={`${item.textColor} ${item.textSize}`}>{item.chatTtle}</h3> */}
        <h3 className={`${item.textColor} ${item.textSize} font-bold`}>
          {item.chatTtle}
        </h3>

        <h3
          className={`${item.textColor} font-semibold mt-5 w-[96%] leading-[45px]`}
        >
          {item.descriptionText}
        </h3>
        {/* <p className='mt-5 w-[96%] leading-[45px]'>{item.descriptionText}</p> */}
      </div>
    ))}
  </Suspense>
</div>;

<div className="shadow-md  w-full fixed top-0 left-0  z-50 lg:hidden block ">
  <div className="md:flex items-center justify-between bg-white py-4  px-5">
    {/* logo section */}
    <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
      {/* <BookOpenIcon className='w-7 h-7 text-blue-600' /> */}
      <Link to="/" className="design font-bold text-lg ">
        Roduct🎉<span className="text-rose-600">Shoply</span>
      </Link>
    </div>
    {/* Menu icon */}
    <div
      onClick={() => setOpen(!open)}
      className="absolute right-5 top-6 cursor-pointer md:hidden w-7 h-7"
    >
      {open ? <span>*</span> : <span>Bar</span>}
    </div>
    {/* linke items */}
    <ul
      className={` md:flex md:items-center md:pb-0 pb-12 pt-5  absolute md:static bg-white shadow-md md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 p-9 transition-all duration-500 ease-in ${
        open ? "top-12" : "top-[-490px]"
      }`}
    >
      <li className=" font-semibold borderDesign">
        <a className="cursor-pointer font-semibold text-sm" to="/">
          Home{" "}
        </a>
      </li>
    </ul>
    {/* button */}
  </div>
</div>;
