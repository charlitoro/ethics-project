import { title } from "../../../../nextjs-material-kit";
import customCheckboxRadioSwitch from "../../../customCheckboxRadioSwitch";
import {green} from "@material-ui/core/colors";

const lawStyles = (theme) => ({
    ...customCheckboxRadioSwitch,
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
    searchIcon: {
        width: "20px",
        height: "20px",
        color: "inherit"
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
        alignItems: 'center'
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    }
});

export default lawStyles;
