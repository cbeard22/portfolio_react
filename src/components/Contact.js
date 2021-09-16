import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import img from '../img/chrisBeard2.JPG';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Chris Beard</h2>
                        <img
                            src={img}
                            alt="Chris Beard"
                            style={{ height: '250px' }}
                            className="chrisBeard2"
                        />
                        <p style={{ width: "75%", fontSize:'18px', margin: "auto", paddingTop: "2em" }}> Please feel free to contact me, and I will get back to you as soon as I am available.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: "anton", paddingTop:'1em'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (952)-221-8280
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: "anton" }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        mr.chrisbeard@gmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}
export default Contact;