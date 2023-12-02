import { initGetTotal } from "./fbModules";
import imageLoaded from "./imageLoaded";

const loadedPage = () => {
  initGetTotal();

  imageLoaded();
};

export default loadedPage;
