import { makeStyles } from '@material-ui/core';
import React from 'react';
import { HtmlContent } from '..';

const useStyles = makeStyles(() => ({
  wrapper: {
    borderRadius: '25px',
    padding: '24px 32px',
    boxShadow: '0px 4px 30px rgba(43, 43, 43, 0.13)',
    width: '100%',
  },
  wrapper0: {
    border: '2px solid #e95e2e',
  },
  wrapper1: {
    border: '2px solid #2699b0',
  },
  title0: {
    color: '#e95e2e',
    marginTop: 0,
    marginBottom: '24px',
  },
  title1: {
    color: '#2699b0',
    marginTop: 0,
    marginBottom: '24px',
  },
  timswrapper0: {
    border: '2px solid #eca93b',
  },
  timswrapper1: {
    border: '2px solid #499ea0',
  },
  timstitle0: {
    color: '#eca93b',
    marginTop: 0,
    marginBottom: '24px',
  },
  timstitle1: {
    color: '#499ea0',
    marginTop: 0,
    marginBottom: '24px',
  },
  subTitle: {
    marginTop: '-24px',
    marginBottom: '24px',
  },
}));
const Section = ({
  title, description, index, children, subTitle, tims,
}) => {
  const classes = useStyles();
  return (
    <div className={`${classes.wrapper} ${classes[tims ? `timswrapper${index % 2}` : `wrapper${index % 2}`]}`}>
      <h2 className={classes[tims ? `timstitle${index % 2}` : `title${index % 2}`]}>{title}</h2>
      {subTitle && <div className={classes.subTitle}>{subTitle}</div>}
      {description && <HtmlContent content={description} />}
      {children}
    </div>
  );
};

export default Section;
