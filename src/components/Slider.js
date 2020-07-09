import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 850,
    marginLeft:'8%'
  },
});

export default function Slider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" component="h3" gutterBottom style={{color:"maroon"}}>
      How to Protect yourself ?
      </Typography>
     
      
      <Typography variant="subtitle1" gutterBottom>
      Clean your home regularly, particularly frequently touched surfaces like;
      </Typography>
    
      <Typography variant="body2" gutterBottom>
        <li> Stay home stay safe.</li>
        <li> Stay physically fit. Exercise regulary. Eat a nutritious diet. Don’t smoke.</li>
        <li> Follow the Golden Rule. Wash your hands frequently with soap and water or use alchohol based hand-rub.</li>
        <li> If you show symptoms of COVID-19, self isolate yourself, wear a mask around others and seek medical advice.</li>
        <li> Stay positive. Avoid alarmist news. Be connected to friends and family. Have a hobby.</li>
        <li> If any member of the household shows symptoms of Covid-19, seek medical advice and follow your local health authority's guidance.</li>
        <li> Avoid touching your face, especially your eyes, nose and mouth.</li>
        <li> Seek immediate medical advice if you have fever, cough or are experiencing breathing difficulties.</li>
        <li> If you have cough, fever, and difficulty in breathing, wear a mask correctly and seek medical advice.</li>
      </Typography>
      
      <Typography variant="caption" display="inline" gutterBottom>
      " Maintain distance of at least 1 metre from someone who is coughing or sneezing."
      </Typography>
      
    </div>
  );
}
