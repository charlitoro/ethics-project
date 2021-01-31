import { title } from "../../../../nextjs-material-kit";
import customCheckboxRadioSwitch from "../../../customCheckboxRadioSwitch";

const lawStyles = {
    section: {
        padding: "70px 0",
        textAlign: "center"
    },
    title: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    description: {
        color: "#999"
    },
    card: {
        maxWidth: 345,
        flexGrow: 1
    },
    gridScroll: {
        overflowY: "scroll",
        height: 600,
    },
    ...customCheckboxRadioSwitch
};

export default lawStyles;
