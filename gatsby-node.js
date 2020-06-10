const path = require(`path`)
const {
  createFilePath
} = require(`gatsby-source-filesystem`)

// exports.createPages = ({
//   graphql,
//   actions
// }) => {
//   const {
//     createPage
//   } = actions

//   return new Promise((resolve, reject) => {
//     graphql(`
//       {
//         allDatoCmsPage {
//           edges {
//             node {
//               slug
//             }
//           }
//         }        
//       }
//     `).then(result => {
//       result.data.allDatoCmsPage.edges.map(({
//         node: page
//       }) => {
//         createPage({
//           path: `${page.slug}`,
//           component: path.resolve(`./src/templates/page.jsx`),
//           context: {
//             slug: page.slug,
//           },
//         })
//       })
//       resolve()
//     })
//   })
// }