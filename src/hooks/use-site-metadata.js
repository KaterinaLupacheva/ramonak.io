// @flow strict
import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
              contacts {
                linkedin
                github
                twitter
                email
                bitbucket
              }
            }
            menu {
              label
              path
            }
            projects {
              title
              image
              description
              link
              techs
              sourceCode
            }
            recentWork {
              title
              date
              image
              description
              link
              techs
            }
            url
            title
            subtitle
            copyright
            disqusShortname
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
