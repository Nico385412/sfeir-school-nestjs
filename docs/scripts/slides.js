import { SfeirThemeInitializer } from "../web_modules/sfeir-school-theme/sfeir-school-theme.mjs";
import { dayOneSlides } from "./day-one.js";

const trainingMode = document
  .querySelector(".reveal .slides")
  .getAttribute("data-theme-slides");

function constructSlideFlow(slides) {
  return slides.map((slidePath) => ({ path: slidePath }));
}

function sfeirInstitute() {
  const formationSlide = dayOneSlides();
  return constructSlideFlow(formationSlide);
}

function sfeirSchoolInitiation() {
  return constructSlideFlow(dayOneSlides());
}

trainingMode === "institue"
  ? SfeirThemeInitializer.init(sfeirInstitute)
  : SfeirThemeInitializer.init(sfeirSchoolInitiation);
