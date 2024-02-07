"use client";
import Image from "next/image";
import woman from "../public/woman.png";
import play from "../public/Icon.svg";

import preview from "../public/preview.png";
import repair from "../public/repair.jpg";
import buy from "../public/buy.jpg";
import sell from "../public/sell.jpg";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isPhoneActive, setIsPhoneActive] = useState<boolean>(false);
  return (
    <main className="">
      <section className="hero justify-between items-center flex px-24">
        <div className="flex flex-col">
          <h1 className="text-4xl w-[60%] leading-tight">
            გაზარდეთ თქვენი კომფორტი ჩვენი ცენტრალური გათბობის სერვისით.
          </h1>
          <p className="text-lg font-thin w-[50%] mb-7 mt-4">
            მიიღეთ შეუდარებელი სითბო და ეფექტურობა ჩვენი ყოვლისმომცველი
            ცენტრალური გათბობის მომსახურებით. დაემშვიდობეთ ცივ ზამთარს და
            მიესალმეთ მყუდრო, თანმიმდევრულ სითბოს.
          </p>

          <Link
            className="bg-[#473BF0] mb-7 w-[200px] text-center flex justify-center items-center h-[59px] rounded-lg text-white"
            href="https://www.facebook.com/centraluri.gatbobis.servisi"
            target="_blank"
          >
            შემოგვიერთდით facebook-ზე
          </Link>
        </div>
        <Image src={woman} alt={"Woman in suit"} />
      </section>
      <div className="bg-[#161C2D]  gap-4 py-8 w-full flex justify-center items-center">
        <Image src={play} alt={"Play icon"} />
        <p className="text-white">
          დაინტერესებული ხარ თუ როგორ მუშაობს ჩვენი სერვისი?{" "}
          <span className="underline cursor-pointer">
            უყურე ერთ წუთიან ვიდეოს
          </span>
        </p>
      </div>
      <section className="advices py-32 flex items-center justify-center">
        <article className="w-1/4 mr-14">
          <p className="font-bold text-3xl ">
            გამოცდილი ექსპერტები გვირჩევენ თუ უპირატესობები აქვს ჩვენს სერვისს
          </p>
          <p className="text-lg font-thin  mb-7 mt-4">
            გაყიდე, შეიძინე ან შეაკეთე გათბობის სისტემები შეღავათიან ფასებში
          </p>

          <Link
            href="tel:+995551642404"
            className="bg-[#473BF0] mb-7 w-[200px] flex justify-center items-center h-[59px] rounded-lg text-white"
          >
            დაგვირეკეთ
          </Link>
        </article>
        <div className="w-[308px] relative h-[419px] ">
          <Image
            src="/mo.jpg"
            className="object-contain"
            fill
            alt="central heater service"
          />
        </div>
        <article className="flex flex-col justify-between gap-8 ml-20 w-1/5">
          <div className="flex flex-col">
            <p className="font-bold text-3xl w-10">1000+</p>
            <p className="text-base font-thin ">
              მომხმარებელი ყოველთვე სტუმრობს ჩვენს საიტს რათა სერვისი უფრო
              ხელმისაწვდომი გახდეს
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-3xl w-10">100%</p>
            <p className="text-base font-thin ">
              პოზიტიური მაჩვენებელი ჩვენი ერთგული მომხმარებლებისგან
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-3xl w-10">5.0/5.0</p>
            <p className="text-base font-thin ">
              საშუალო სამომხმარებლო რეიტინგი მთელი ინტერნეტის მასშტაბით
            </p>
          </div>
        </article>
      </section>

      <section className="services flex bg-[#F4F7FA] py-16 justify-between flex-col">
        <p className="text-center mb-14 text-4xl">
          სერვისები რომლებსაც ჩვენ გთავაზობთ
        </p>
        <div className="wrapper flex flex-row items-start justify-between gap-10 max-w-7xl m-auto">
          <div className="card">
            <p>გაყიდვა</p>
            <div className="w-[300px] h-[250px]">
              {" "}
              <Image
                className="object-contain"
                src={sell}
                alt="central heating boiler sell"
              />
            </div>
            <p className="text-sm  mt-2">
              აპირებთ ძველი ცენტრალური გათბობის ქვაბის შეცვლას ? ჩვენი კომპანია
              მზადაა თქვენთვის ხელსაყრელ ფასად შევიძინოთ იგი.
            </p>
          </div>
          <div className="card">
            <p>ჩაბარება</p>
            <div>
              <div className="w-[300px] h-[250px]">
                <Image
                  className="object-contain"
                  src={buy}
                  alt="central heating boiler buy"
                />
              </div>
              <p className="text-sm mt-2">
                გსურთ ცენტრალური გათბობის სისტემისა და გამათბობელი ქვაბის
                დაყენება? ჩვენი კომპანია გთავაზობთ მაღალი ხარისხის მომსახურეობას
                საუკეთესო პროდუქტით თქვენთვის მორგებულ ფასად
              </p>
            </div>
          </div>
          <div className="card">
            <p>შეკეთება</p>
            <div className="w-[300px] h-[250px]">
              <Image
                className="object-contain"
                src={repair}
                alt="central heating boiler repair"
              />
            </div>
            <p className="text-sm mt-2">
              გჭირდებათ ცენტრალური გათბობის სისტემის შეცვლა ? ჩვენი სანდო და
              გამოცდილი ტექნიკოსები მზად არიან მოაგვარონ ნებისმიერი პრობლემა
              სწაფად და ეფექტურათ თქვენთვის მისაღებ ფასად
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
