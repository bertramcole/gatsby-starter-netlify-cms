import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { Section, Container, Title} from 'bloomer'

export const CompanyPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <Section>
      <Container isSize='large' >
      
              <Title>
                {title}
              </Title>
              <PageContent className="content" content={content} />
  
      </Container>
    </Section>
  )
}

CompanyPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const CompanyPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
          <CompanyPageTemplate
          contentComponent={HTMLContent}
          title={post.frontmatter.title}
          content={post.html}npm/> 
    </Layout>
  )
}

CompanyPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CompanyPage

export const companyPageQuery = graphql`
  query CompanyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`

