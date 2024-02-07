import Image from "next/image";
import woman from "../public/woman.png";
import play from "../public/Icon.svg";
import IMG from "../public/mo.jpg";
import preview from "../public/preview.png";
import Link from "next/link";
export default function Home() {
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

          <p className="font-bold">Watch how we can help</p>
        </div>
        <Image src={woman} alt={"Woman in suit"} />
      </section>
      <div className="bg-[#161C2D]  gap-4 py-8 w-full flex justify-center items-center">
        <Image src={play} alt={"Play icon"} />
        <p className="text-white">
          Interested how our software works for you?{" "}
          <span className="underline cursor-pointer">
            Watch our 1 minute video
          </span>
        </p>
      </div>
      <section className="advices py-32 flex items-center justify-center">
        <article className="w-1/4 mr-14">
          <p className="font-bold text-3xl ">
            Experienced expoerts are giving advices
          </p>
          <p className="text-lg font-thin  mb-7 mt-4">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>

          <Link
            className="bg-[#473BF0] mb-7 w-[200px] flex justify-center items-center h-[59px] rounded-lg text-white"
            href="tel:+995571777401"
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
        <article className="flex flex-col justify-between gap-16 ml-20 w-1/5">
          <div className="flex gap-3 flex-col">
            <p className="font-bold text-3xl w-10">1M+</p>
            <p className="text-base font-thin ">
              Customers visit Albino every month to get their service done.
            </p>
          </div>
          <div className="flex gap-3 flex-col">
            <p className="font-bold text-3xl w-10">92%</p>
            <p className="text-base font-thin ">
              Satisfaction rate comes from our awesome customers.
            </p>
          </div>
          <div className="flex gap-3 flex-col">
            <p className="font-bold text-3xl w-10">4.9/5.0</p>
            <p className="text-base font-thin ">
              Average customer ratings we have got all over internet.
            </p>
          </div>
        </article>
      </section>

      <section className="services flex bg-[#F4F7FA] py-16 justify-between flex-col">
        <p className="text-center mb-14 text-4xl">
          სერვისები რომლებსაც ჩვენ გთავაზობთ
        </p>
        <div className="wrapper flex flex-row justify-between gap-10 max-w-7xl m-auto">
          <div className="card">
            <p>გაყიდვა</p>
            <Image src={preview} alt="central heating boiler sell" />
            <p className="text-sm  mt-2">
              ააპირებთ ძველი ცენტრალური გათბობის ქვაბის შეცვლას ? ჩვენი კომპანია
              მზადაა თქვენთვის ხელსაყრელ ფასად შევიძინოთ იგი.
            </p>
          </div>
          <div className="card">
            <p>ჩაბარება</p>
            <div>
              <Image src={preview} alt="central heating boiler buy" />
              <p className="text-sm mt-2">
                გსურთ ცენტრალური გათბობის სისტემისა და გამათბობელი ქვაბის
                დაყენება? ჩვენი კომპანია გთავაზობთ მაღალი ხარისხის მომსახურეობას
                საუკეთესო პროდუქტით თქვენთვის მორგებულ ფასად
              </p>
            </div>
          </div>
          <div className="card">
            <p>შეკეთება</p>
            <Image src={preview} alt="central heating boiler repair" />
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
