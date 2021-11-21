module.exports = {
  siteMetadata: {
    siteUrl: 'https://take2health.net',
    title: 'Take2 Prophecy',
    description: 'Details of Take2 Prophecy',
    whatsapp:
      'https://api.whatsapp.com/send/?phone=85253770823&text=Halo%2C+I+want+to+know+more+about+Prophecy+Test%21+&app_absent=0',
    facebook: 'https://www.facebook.com/take2health.ltd',
    linkedin: 'https://www.linkedin.com/company/take2-health',
    youtube: 'https://youtu.be/BACVA3es0NI',
    campaignPage: 'https://take2health.net/whats-new/campaign/',
    platformUrl: 'https://take2health.net/health-platform',
    email: 'info@take2.health',
    phone: '+852 3613 0533',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        disableAutoprefixing: false,
        disableMinification: false,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        defaultLayouts: {
          default: require.resolve('./src/layouts/MdxLayout'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `blurred`,
          quality: 100,
          // breakpoints: [750, 1080, 1366, 1920],
          // backgroundColor: `transparent`,
          // tracedSVGOptions: {},
          // blurredOptions: {},
          // jpgOptions: {},
          // pngOptions: {},
          // webpOptions: {},
          // avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Json`, // a fixed string
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
      __key: 'content',
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': 'src/components',
          '@layouts': 'src/layouts',
          '@pages': 'src/pages',
          '@images': 'src/assets/images',
          '@templates': 'src/templates',
          '@content': 'content',
          '@themes': 'src/themes',
          '@hooks': 'src/hooks',
          '@utils': 'src/utils',
        },
        extensions: ['js'],
      },
    },
    'gatsby-plugin-react-svg',
  ],
}
