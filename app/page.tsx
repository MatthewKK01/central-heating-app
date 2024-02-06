import Image from "next/image";
import woman from "../public/woman.png";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="hero justify-between items-center flex">
        <div className="flex flex-col">
          <h1>Make your business powerful with Shade.</h1>
          <p>
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within few minutes.
          </p>
          <button className="bg-[#473BF0] w-[200px] h-[257px]">
            Make a free Quote
          </button>
          <p>Watch how we can help</p>
        </div>
        <Image src={woman} alt={"Woman in suit"} />
      </section>
    </main>
  );
}
