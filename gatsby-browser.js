import "bootstrap/dist/css/bootstrap.min.css";
export { wrapRootElement } from "./gatsby/wrapRootElement";

export const onInitialClientRender = () => {
  setTimeout(() => {
    document.getElementById("___loader").style.transition = "all 1s";
    document.getElementById("___loader").style.opacity = 0;
    setTimeout(() => {
      document.getElementById("___loader").style.display = "none";
    }, 1000);
  }, 1500);
};
