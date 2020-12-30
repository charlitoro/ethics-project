import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
    grid: {
        marginRight: "-15px",
        marginLeft: "-15px",
        width: "auto"
    }
};

const useStyles = makeStyles(styles);
interface Props {
    children?: any;
    className?: string;
    justify?: any;
}

export default function GridContainer(props: Props) {
    const classes = useStyles();
    const { children, className, justify } = props;
    return (
        <Grid container justify={justify} className={classes.grid + " " + className}>
            {children}
        </Grid>
    );
}

GridContainer.defaultProps = {
    className: ""
};

GridContainer.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};
