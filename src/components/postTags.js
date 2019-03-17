import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const TagLink = styled(Link)`
  font-size: 14px;
  color: #1BC6B4;
  text-decoration: none;
`

export default ({ tags }) => {
  return (
    <>
      {tags.map((tag, index) => {
        let separator = ', '
        if (index + 1 === tags.length) {
          separator = ''
        }
        return (
          <span key={tag}>
            <TagLink to={`tags/${tag}`}>{tag}</TagLink>
            {separator}
          </span>
        )
      })}
    </>
  )
}
