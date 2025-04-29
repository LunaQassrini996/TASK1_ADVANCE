import "./FrequentlySection.css";
import FrequentlyItem from "../FrequentlyItem/FrequentlyItem";
import TitleAndDiv from "../TitleAndDiv/TitleAndDiv";
import { useState } from "react";
import { Data } from "../../Data/OccordionData";
export default function FrequentlySection() {
  const [OpenOccordion, setOpenOccordion] = useState(null);
  const HandleOccordionWithId = (id) => {
    setOpenOccordion((CurrentId) => (CurrentId === id ? null : id));
  };

  return (
    <>
      <section className="frequently-section">
        <div className="frequently-title">
          <TitleAndDiv
            Baio="Solutions For The Doubts"
            LqTitle="Frequently Asked Questions"
            explain="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
          />
        </div>
        <div className="accordion-contain">
          <div className="occordion">
            {Data.slice(0, 4).map((item) => (
              <FrequentlyItem
                key={item.id}
                id={item.id}
                Question={item.question}
                Answer={item.answer}
                IsOpen={OpenOccordion === item.id}
                onClick={HandleOccordionWithId}
              />
            ))}
          </div>
          
            <div className="Accordion">
              {Data.slice(4).map((item) => (
                <FrequentlyItem
                  key={item.id}
                  id={item.id}
                  Question={item.question}
                  Answer={item.answer}
                  IsOpen={OpenOccordion === item.id}
                  onClick={HandleOccordionWithId}
                />
              ))}
            </div>
          
        </div>
      </section>
    </>
  );
}
