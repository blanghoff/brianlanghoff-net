import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout'

import brian from '../images/brian.jpg'

const StyledHref = styled.a`
  text-decoration: none;
  color: #1bc6b4;
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #1bc6b4;
`

const Image = styled.img`
  width: 10%;
`

const About = () => (
  <Layout>
    <center>
    <Image alt="Brian Langhoff" src={brian} />
    </center>
    <Title>Brian Langhoff is foremost a technologist.</Title>
    <blockquote>
      <strong>technologist</strong> /tekˈnäləjəst/
      <br />
      An expert in a particular field of technology.
    </blockquote>
    <h3>
      With over a decade of experience in applied technology, Brian seeks to
      apply technology to situations and seeks to never lose sight of humanity
      in the process.
    </h3>
    <br />
    <h3>
      Working with a team of developers, educators, and designers, he leads the
      creation of{' '}
      <StyledHref
        href="https://intelligent.education"
        rel="noopener noreferrer"
        target="_blank"
      >
        <strong>Intelligent Education</strong>
      </StyledHref>
      .
    </h3>
    <h3>
      He also works with{' '}
      <StyledHref
        href="https://academicinfluence.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <strong>Academic Influence</strong>
      </StyledHref>
      , a team of data scientists and academics to provide real-time objective
      rankings of people, places, and institutions.
      <br />
    </h3>
    <h3>Brian lives and works from his family ranch in Texas.</h3>
  </Layout>
)

export default About;
