import React from "react";
import Link from "next/link";
import Image from "next/image";


function page() {
  return (
    <div>
      
      <div className=" w-full">
        <Image
          src={"/Group 78 (2).png"}
          alt={"#"}
          width={1360}
          height={316}
        ></Image>
      </div>
      <div className="md:w-full sm:flex w-auto h-auto  lg:flex md:flexflex-col">
        <div className="md:w-full h-auto w-auto pt-6 md:pl-6 pl-3">
          <Image
            src={"/Rectangle 68.png"}
            alt={"#"}
            width={617}
            height={500}
          ></Image>
          <div className="flex gap-2 text-gray-400">
            <i className="bi bi-person-lines-fill"></i>
            <p>Admin</p>
            <i className="bi bi-calendar-check"></i>
            <p>Calender</p>
            <i className="bi bi-phone-landscape"></i>
            <p>wood</p>
          </div>
          <h1 className="text-3xl">Going all-in with millennial design</h1>

          <p className="text-gray-400 flex justify-between ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
            mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
            sollicitudin aliquam ultrices. Morbi blandit cursus risus at
            ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
            Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis
            nunc sed blandit libero. Pellentesque elit ullamcorper dignissim
            cras tincidunt. Pharetra et ultrices neque ornare aenean euismod
            elementum.
          </p>
          <p className="pt-4">Read More</p>
          <hr></hr>
        </div>

        <div className="w-[397px] h-[537px] pl-10 p-6">
          <button className="border-2 border-[#B88E2F] rounded-lg  h-[58px] w-[311px] p-3 ">
            <i className="bi bi-search pl-32"></i>{" "}
          </button>
          <h1 className="flex justify-center pt-5 text-3xl">Categories</h1>
          <div className="md:flex justify-between gap- text-gray-400 md:pl-7 pl-0">
            <ul className="pt-2">
              <li className="pt-4">Craft</li>
              <li className="pt-4">Desing</li>
              <li className="pt-4">Homemade</li>
              <li className="pt-4">interior</li>
              <li className="pt-4">Wood</li>
            </ul>
            <ul className="pt-2 hidden md:block">
              <li className="pt-4">2</li>
              <li className="pt-4">8</li>
              <li className="pt-4">7</li>
              <li className="pt-4">1</li>
              <li className="pt-4">6</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:w-full w-auto h-auto sm:flex   lg:flex md:flexflex-col">
        <div className="sm:w-[820px] sm:h-[794px] lg:w-[820px] md:h-[794px] md:w-[820px] lg:h-[794px] h-auto w-auto pt-6 pl-6">
          <Image
            src={"/Rectangle 68 (1).png"}
            alt={"#"}
            width={817}
            height={500}
          ></Image>
          <div className="flex gap-2 text-gray-400">
            <i className="bi bi-person-lines-fill"></i>
            <p>Admin</p>
            <i className="bi bi-calendar-check"></i>
            <p>Calender</p>
            <i className="bi bi-phone-landscape"></i>
            <p>wood</p>
          </div>
          <h1 className="text-3xl">Exploring new ways of decorating</h1>

          <p className="text-gray-400 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
            mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
            sollicitudin aliquam ultrices. Morbi blandit cursus risus at
            ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
            Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis
            nunc sed blandit libero. Pellentesque elit ullamcorper dignissim
            cras tincidunt. Pharetra et ultrices neque ornare aenean euismod
            elementum.
          </p>
          <p className="pt-4">Read More</p>
          <hr></hr>
        </div>

        <div className="w-[393px] h-[650px] pl-10 p-6 flex gap-2">
            <div className="w-[80px]">
            
                <Image
            src={"/Rectangle 69 (1).png"}
            alt={"#"}
            width={80}
            height={80}
            className="pt-4"
          ></Image>
          <Image
            src={"/Rectangle 69.png"}
            alt={"#"}
            width={80}
            height={80}
            className="pt-4"
          ></Image>
          <Image
            src={"/Rectangle 69 (2).png"}
            alt={"#"}
            width={80}
            height={80}
            className="pt-4"
          ></Image>
          <Image
            src={"/Rectangle 69 (3).png"}
            alt={"#"}
            width={80}
            height={80}
            className="pt-4"
          ></Image>
          <Image
            src={"/Rectangle 69 (3).png"}
            alt={"#"}
            width={80}
            height={80}
            className="pt-4"
          ></Image>
            </div>
            <div>
                <p className="pt-4">Going all-in<br/> with millennial design<br/>
                03 Aug 2022</p>
                <p className="pt-8">Exploring new ways<br/> of decorating<br/>
                03 Aug 2022</p>
                <p className="pt-8">Handmade pieces that <br/>took time to make<br/>
                03 Aug 2022</p>
                <p className="pt-8">Modern home<br/> in Milan<br/>
                03 Aug 2022</p>
                <p className="pt-8">Colorful office<br/> redesign
                03 Aug 2022</p>
            </div>
          </div>
        
      </div>
      <div className="sm:w-[820px] sm:h-[794px] lg:w-[820px] md:h-[794px] md:w-[820px] lg:h-[794px] h-auto w-auto pt-6 pl-6">
          <Image
            src={"/Rectangle 68 (2).png"}
            alt={"#"}
            width={817}
            height={500}
          ></Image>
          <div className="flex gap-2 text-gray-400">
            <i className="bi bi-person-lines-fill"></i>
            <p>Admin</p>
            <i className="bi bi-calendar-check"></i>
            <p>Calender</p>
            <i className="bi bi-phone-landscape"></i>
            <p>wood</p>
          </div>
          <h1 className="text-3xl">Handmade pieces that took time to make</h1>

          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
            mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
            sollicitudin aliquam ultrices. Morbi blandit cursus risus at
            ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
            Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis
            nunc sed blandit libero. Pellentesque elit ullamcorper dignissim
            cras tincidunt. Pharetra et ultrices neque ornare aenean euismod
            elementum.
          </p>
          <p className="pt-4">Read More</p>
          <hr></hr>
        </div>
        <div className="flex justify-center pt-6 gap-8">
        <button className="border-2 h-[50px] w-[50px] bg-[#B88E2F]  rounded-lg">
              1
            </button>
            <button className="border-2 h-[50px] w-[50px] border-[#F9F1E7]  bg-[#F9F1E7] rounded-lg">
            2
            </button>
            <button className="border-2 h-[50px]  border-[#F9F1E7]  bg-[#F9F1E7] w-[50px] rounded-lg">
              3{" "}
            </button>
            <button className="border-2 h-[60px]  border-[#F9F1E7]  bg-[#F9F1E7] w-[90px] rounded-lg">
              next{" "}
            </button>

        </div>
        <div className="md:h-[100px] bg-[#F9F1E7]  md:w-full  w-auto">
          <div className="flex w-auto h-[100px]  justify-center items-center md:gap-12  gap-2 ">
            <div className="">
              <i className="bi bi-trophy p-6"></i>
              <h1 className="">High Quality </h1>
              <p className="text-gray-400 ">crafted from top materials</p>
            </div>
            <div className="hidden md:block">
              <i className="bi bi-patch-check p-6"></i>
              <h1 className="">warranty Protection </h1>
              <p className="text-gray-400 ">Over 2 years</p>
            </div>
            <div className="">
              <i className="bi bi-truck p-6"></i>
              <h1 className="">Free shipping </h1>
              <p className="text-gray-400 ">Over 2 years</p>
            </div>
            <div className="hidden md:block">
              <i className="<i bi bi-file-lock-fill p-6"></i>
              <h1 className="">24 / 7 Support </h1>
              <p className="text-gray-400 ">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
        
  
  );
}

export default page;
