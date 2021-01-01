import { conatinerFluid } from "assets/jss/nextjs-material-kit.ts";

import imagesStyle from "assets/jss/nextjs-material-kit/imagesStyles.ts";

const exampleStyle = {
  section: {
    padding: "70px 0"
  },
  container: {
    ...conatinerFluid,
    textAlign: "center !important"
  },
  ...imagesStyle,
  link: {
    textDecoration: "none"
  }
};

export default exampleStyle;
