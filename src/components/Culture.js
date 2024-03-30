import faqData from "../data/faqData";
import { useState } from "react";
const Faq = ({ faq, index, isVisible, setVisibleSection }) => {
  return (
    <div className="faq">
      <div>
        <label class="flex felx-wrap">
          <h2 class="text-xl m-2 font-bold text-gray-700">Q.{faq.question}</h2>
          {isVisible ? (
            <button class="m-2" onClick={() => setVisibleSection(-1)}>
              HIDE
            </button>
          ) : (
            <button class="m-2" onClick={() => setVisibleSection(index)}>
              SHOW
            </button>
          )}
        </label>
      </div>
      {isVisible && <p class="m-2 text-gray-600 my-2">{faq.answer}</p>}
      <hr class="m-2" />
    </div>
  );
};
const Culture = () => {
  const [visibleSection, setVisibleSection] = useState(-1);
  return (
    <div>
      <h2 class="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">
        Culture
      </h2>
      <p class=" text-gray-600 text-xl m-2 w-[95%] text-center">
        LNMIIT's coding culture thrives on the symbiotic relationship between
        seniors and juniors, characterized by mutual respect and collaborative
        mentorship. Seniors actively engage juniors by assigning projects,
        fostering hands-on learning experiences. This culture of selfless
        knowledge sharing and support not only enhances skill development but
        also contributes to LNMIIT's exceptional placement outcomes. LNMCreate,
        our dedicated platform, further strengthens this culture by facilitating
        seamless collaboration and project pitching, ensuring that the spirit of
        innovation and learning flourishes within our community.
      </p>
      <hr class="m-3 border-solid border-2 border-black" />
      {/* Collapsable according logic, here I transferred the state control from child
      to parent. setVisibleSection is passed from parent to child, so that button
      can set the visible section index and -1 if it wants to hide the section.
      Depending on the visibleSection index value, isVisible is set, so that the 
      right section is displayed. */}
      {faqData.map((faq, index) => {
        const isVisible = false || visibleSection == index;
        const props = { faq, index, isVisible, setVisibleSection };
        return <Faq key={index} {...props} />;
      })}
    </div>
  );
};
export default Culture;
