import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pos: {
    marginBottom: 12,
  },
});

const ScheduleItem = ({ schedule }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {schedule.court}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {schedule.date}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {schedule.time}
        </Typography>
        <Typography variant="body2" component="p">
          Players: {schedule.players.join(', ')}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ScheduleItem;
