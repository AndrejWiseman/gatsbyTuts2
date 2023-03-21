import React from "react"
import Layout from '../components/Layout'
import { graphql, useStaticQuery, Link } from 'gatsby'

// import Post from '../components/Post'




export default function Home({ data }) {

  console.log(data)

  const projects = data.allMarkdownRemark.nodes
  

  return (
    <Layout>

      <h1>opo</h1>

      <div>
        {projects.map(project => (
          <Link to={"/pesme/" + project.frontmatter.path} key={project.id}>
            <h1>{ project.frontmatter.title }</h1>
          </Link>
        ))}

      </div>

    </Layout>
  )
}

export const query = graphql`
query ProjectsPage {
  allMarkdownRemark(sort: {frontmatter: {datum: DESC}}) {
    nodes {
      frontmatter {
        author
        datum
        path
        title
      }
      id
      excerpt
    }
  }
}
`





