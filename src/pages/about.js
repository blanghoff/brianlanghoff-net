import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

const StyledHref = styled.a`
  text-decoration: none;
  color: #1BC6B4;
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #1BC6B4;
`;

export default () => (
  <Layout>
      <Title>
        Brian Langhoff is foremost a technologist.
      </Title>
      <blockquote>
      <strong>technologist</strong> /tekˈnäləjəst/ 
      <br />
      An expert in a particular field of technology.
      </blockquote>
      <h3>
      With over a decade of experience in applied technology, Brian seeks to apply technology to situations and seeks to never lose sight of humanity in the process.
      </h3>
      <br />
      <h3>
      Working with a team of developers, educators, and designers, he lead the creation of  <StyledHref
            href="https://intelligent.education"
            rel="noopener noreferrer"
            target="_blank"
          ><strong>Intelligent Education</strong></StyledHref>
      </h3>
      <br />
      <h3>
      Brian now lives and works from his family ranch in Texas.
      </h3> 
  </Layout>
)
