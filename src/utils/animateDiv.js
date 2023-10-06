
import "./animateCSS.css"
export const applyAnimationEffect = (id, elementClass) => {
  var element = document.getElementById(id);
  if (element) {
    element.classList.remove(elementClass);
    void element.offsetWidth;
    element.classList.add(elementClass);
  }
};
