import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Section from './Section';

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '600px',
    margin: 'auto',
  },
}));

const Qualiopi = ({ index }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Section
        index={index}
        title="Infos pratiques : Organisme de formation Mob’In."
        maxWidth={500}
      >
        <Grid container alignItems="center" spacing={2}>
          <Grid container item xs={12} sm={4} justify="center">
            <img
              src="/static/illus/qualiopi.jpeg"
              alt="Qualiopi"
              style={{ maxWidth: '300px', width: '100%' }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            Certificat Qualiopi n°
            {' '}
            <b>FRCM22136</b>
            <br />
            Numéro de déclaration d&lsquo;activité d&lsquo;organisme
            de formation
            {' '}
            <b>11756193875</b>
            <br />
            Numéro siren Mob&lsquo;In France
            {' '}
            <b>880859707</b>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
};

export default Qualiopi;
