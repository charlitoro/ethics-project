import { title } from "../../../../nextjs-material-kit";

const landingPageStyles = {
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
        marginBottom: "20px",
        flexGrow: 1
    },
    playerWrapper:{
        position: "relative",
        paddingTop: "56.25%"
    },
    reactPlayer:{
        position: "absolute",
        top: 0,
        left: 0,
    }
};

export default landingPageStyles;
