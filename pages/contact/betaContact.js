import React from "react";
import { Text } from "../../components";
import { makeStyles } from "@material-ui/core";

const BetaContact = () => {
  const useStyles = makeStyles((theme) => ({
    title: {
      color: "#2699b0",
    },
    button: {
      height: "38px",
      backgroundColor: "#000091",
      width: "fit-content",
      "&:hover": {
        backgroundColor: "#2323ff",
      },
      borderRadius: "4px",
    },
    linkContainer: {
      marginTop: "4px",
    },
    link: {
      padding: "16px",
      color: "white",
      textDecoration: "none",
    },
    cta: {
      marginTop: "24px",
      display: "flex",
      gap: "32px",
      alignItems: "center",
      flexWrap: "wrap-reverse",
    },
    image: {
      width: "250px",
    },
  }));
  const classes = useStyles();

  return (
    <Text size="body1">
      <span className={classes.title}>
        Accompagnateurs et professionnels de l’insertion
      </span>
      , des questions autour des solutions de mobilité inclusive et solidaire ?
      Nos équipes vous répondent sur le{" "}
      <a
        href="https://communaute.inclusion.beta.gouv.fr/"
        target="_blank"
        rel="noopener noreferrer"
      >
        forum
      </a>{" "}
      de la communauté de l’inclusion.
      <div className={classes.cta}>
        <div className={classes.button}>
          <div className={classes.linkContainer}>
            <a
              href="https://communaute.inclusion.beta.gouv.fr/forum/espace-d%C3%A9changes-113/topic/create/?from:mobin"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              Laisser un message
            </a>
          </div>
        </div>
        <img
          className={classes.image}
          src="/static/svg/logo-communaute-inclusion.svg"
          alt="Logo de la communauté de l'inculistion"
        />
      </div>
    </Text>
  );
};

export default BetaContact;
