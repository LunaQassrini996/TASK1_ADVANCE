import "./OurHistorySection.css";
import Button from "../Button/Button";
import TitleAndDiv from "../TitleAndDiv/TitleAndDiv";
import { HistorySectionData } from "../../Data/HistorySectionData";

export default function OurHistorySection() {
  return (
    <>
      <section className="history-section">
        <div className="history-section-title">
          <Button Baio="Our Progressive Journey" />
          <TitleAndDiv
            show={true}
            LqTitle="Our History"
            explain="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
          />
        </div>
        <div className="history-container">
          <div className="time-line-pattern">
            {HistorySectionData.map((item)=>(
                <div>
                <div key={item.id} className="gg">
                  <div className="box-year">
                    <img src="/assets/images/About page image/Abstract Design.svg" />
                    <p>{item.year1}</p>
                  </div>
  
                  <div className="history-title">
                    <p className="title1">{item.title1}</p>
                    <p className="title2">
                      {item.info1}
                    </p>
                  </div>
                </div>
              </div> 
            ))}
           

            <div className="time-line-circle"></div>
            <div className="time-line-container">
              <div className="time-line"></div>
            </div>
            <div className="time-line-circle2"></div>

            <div className="time-line-circle3"></div>
            <div className="time-line-container1">
              <div className="time-line"></div>
            </div>
            <div className="time-line-circle4"></div>

            <div className="time-line-circle5"></div>
            <div className="time-line-container2">
              <div className="time-line"></div>
            </div>
            <div className="time-line-circle6"></div>

            <div className="time-line-circle7"></div>
            <div className="time-line-container3">
              <div className="time-line"></div>
            </div>
            <div className="time-line-circle8"></div>
          </div>
        </div>
      </section>
    </>
  );
}
