import DentalNotationTest from "@/component/DentalNotationTest";
import DentalNotationTypes from "@/component/DentalNotationTypes";
import Installing from "@/component/Installing";
import Introduction from "@/component/Introduction";

export default function Home() {
  return (
    <>
      <header>
        <div className="headerWrap">
          <h1>Dental Notation</h1>
        </div>
      </header>

      <main>
        {/* Introduction to Dental Notation Packages */}
        <Introduction />
        {/* Installing */}
        <Installing />
        {/* Dental Notation Types */}
        <DentalNotationTypes />
        {/* Try it out yourself */}
        <DentalNotationTest />
      </main>
    </>
  );
}
