import React, {useContext, useState} from 'react';
import classnames from 'classnames'
import {ThemeContext} from '../../context/ThemeContext'
import {withStyles} from '@material-ui/core/styles'
import styles from './ContactStyles'

function Contact({classes, addAnim}) {
    const {isDarkMode} = useContext(ThemeContext);
    const [status, setStatus] = useState('');

    const submitForm = (ev)=>{
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            setStatus("SUCCESS")
          } else {
            setStatus("ERROR")
          }
        };
        xhr.send(data);
      }

    return (
        <div className={classes.root}>
            <div className={classnames(classes.contactLeft, !isDarkMode ? classes.bgDark : undefined)}>
                <h1>
                  <span onMouseOver={addAnim}>C</span>
                  <span onMouseOver={addAnim} className={classes.mLeft}>o</span>
                  <span onMouseOver={addAnim} className={classes.mLeft}>n</span>
                  <span onMouseOver={addAnim} className={classes.mLeft}>t</span>
                  <span onMouseOver={addAnim} className={classes.mLeft}>a</span>
                  <span onMouseOver={addAnim} className={classes.mLeft}>c</span>
                  <span onMouseOver={addAnim} className={classes.mLeft}>t</span>
                </h1>
                <p className={isDarkMode ? classes.textLight : undefined}>Feel free to contact me. I am interested in gaining more opportunities about web and app development.</p> 
                <form onSubmit={submitForm} className={isDarkMode ? classes.formDark : undefined} action="https://formspree.io/f/mnqodqor" method="POST">
                    <input type="text" className={classes.inputHalf} placeholder="Name" name="name" required />
                    <input type="email" className={classes.inputHalf} placeholder="Email" name="email" required />
                    <input type="text" placeholder="Subject" name="subject" />
                    <input type="text" placeholder="Message" name="message" required />
                    {status === "SUCCESS" ? 
                    <p className={classes.status}>Thanks!</p> : 
                    <button type="submit" className={isDarkMode ? classes.buttonDark : undefined}>Send</button>
                    }
                    {status === "ERROR" && <p className={classes.status}>Ooops! There was an error.</p>}
                </form>
            </div>
        </div>
    )
}

export default withStyles(styles)(Contact)