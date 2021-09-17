import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import img from '../img/chrisbeard.jpg';
import Pdf from '../img/resume.pdf';

class Resume extends Component {
    render() {
        return (
            <div>

                <Grid className='resume-body'>
                    <Cell col={4}>
                        <div style={{ textAlign: "center" }}>
                            <img
                                src={img}
                                alt="Chris Beard"
                                className="pictureofMe"
                                style={{ height: "300px" }} />
                            <h2 >Chris Beard</h2>
                            <h4 style={{ color: 'grey' }}>Full Stack Developer</h4>
                            <hr style={{ borderTop: '3px solid #212121', width: '100%' }} />
                            <h5>Address</h5>
                            <p>3541 Livingston Avenue, Wayzata, MN 55391</p>
                            <h5>Phone</h5>
                            <p>(952)221-8280</p>
                            <h5>Email</h5>
                            <p>mr.chrisbeard@gmail.com</p>
                            <a href={Pdf} rel='noreferrer' target="_blank"><i class="fas fa-file-pdf"></i></a>
                        </div>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={"April 2021"}
                            endYear={"October 2021"}
                            schoolName={"University of Minnesota"}
                            schoolDescription={"Full Stack Web Development - Bootcamp"} />
                        <Education
                            startYear={"September 2008"}
                            endYear={"April 2012"}
                            schoolName={"St. John's University/College of Saint Benedict"}
                            schoolDescription={"BA in Elementary Education, Mathematics Concentration"} />
                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Experience</h2>
                        <Experience
                            startYear={2021}
                            endYear={"Present"}
                            jobName="3rd Grade Teacher"
                            jobLocation="Holy Name of Jesus, Wayzata, MN"
                            jobDescription="Collaborated with Team members to develop new learning experiences. Assisted teachers in implimenting new technology into the classroom. " />
                        <Experience
                            startYear={2020}
                            endYear={2021}
                            jobName="Director of Distance Learning"
                            jobLocation="Holy Name of Jesus, Wayzata, MN"
                            jobDescription="Developed curriculum and implimented technolgy to assess distance learning students. Coordinated meetings with students and classes to create successful learning environments." />
                        <Experience
                            startYear={2019}
                            endYear={2020}
                            jobName="3rd Grade Teacher"
                            jobLocation="Holy Name of Jesus, Wayzata, MN"
                            jobDescription="Utilized technology to engages students in meaningful lessons. Created and collaborated on engaging lessons across grades and classrooms." />
                        <Experience
                            startYear={2018}
                            endYear={2019}
                            jobName="6th Grade Teacher"
                            jobLocation="Holy Name of Jesus, Wayzata, MN"
                            jobDescription="Facilitated learning experiences and Wolf Ridge Conservation Center retreat. Utilized technology on a daily basis in the classroom." />
                        <Experience
                            startYear={2017}
                            endYear={2018}
                            jobName="4th Grade Teacher"
                            jobLocation="Holy Name of Jesus, Wayzata, MN"
                            jobDescription="Explored a variety of technologies and websites to meet different learning styles." />
                        <Experience
                            startYear={2012}
                            endYear={2017}
                            jobName="2nd Grade Teacher"
                            jobLocation="Holy Name of Jesus, Wayzata, MN"
                            jobDescription="Organized and lead Google Pioneer Expedition for grades 2-6. Worked with leveled groups to impliment recognition, decoding, and phonemic awareness." />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill="javascript"
                            progress={45}
                        />
                        <Skills
                            skill="React"
                            progress={25}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={50}
                        />
                    </Cell>
                </Grid>

            </div>
        )
    }
}
export default Resume;