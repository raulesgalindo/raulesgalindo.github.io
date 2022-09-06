import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Thumbnail from "../../components/thumbnail";
import Content from "../../components/content";
import Skill from "../../components/skill";
import aboutData from '../../data/about-me'

const AboutMe = ({type}) => {
    return (
        <div className={type !== 'page' ? 'section-padding section' : null}>
            <Container>
                <Row className={'align-items-center'}>
                    <Col lg={6}>
                        <Thumbnail classes={'about-thumbnail mb-md-30 mb-sm-30 mb-xs-30'} thumb={`about/${aboutData.thumb}`}/>
                    </Col>

                    <Col lg={6}>
                        <Content classes={'about-content'}>
                            {type !== 'page' ? (<h3 className="block-title">ABOUT ME</h3>) : null}
                            <p>{aboutData.bio}</p>
                            <ul className="personal-info">
                                <li><span>Discord:</span>{aboutData.discord}</li>
                                <li><span>Freelance:</span>{aboutData.availability ? 'Available' : 'Not Available'}</li>
                                <li>
                                    <span>Language:</span>
                                    {aboutData.languages.map((language, index) => (
                                        <p key={index} style={{display: 'inline-block'}}>{`${language},  `}</p>
                                    ))}
                                </li>
                            </ul>

                            <h3 className="block-title">Tech stack I'm fluent and have used recently</h3>

                            <div className="skill-wrap">
                                {aboutData.skills.map(skill => (
                                    <Skill
                                        key={skill.id}
                                        title={skill.title}
                                        percentage={skill.percentage}
                                    />
                                ))}
                            </div>

                            <h3 className="block-title">Known tech stack but haven't used recently nor frequently</h3>

                            {aboutData.knowledge_drops.map((knowledge_drop, index) => (
                                <p key={index} style={{display: 'inline-block'}}>{`${knowledge_drop},  `}</p>
                            ))}
                        </Content>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutMe;