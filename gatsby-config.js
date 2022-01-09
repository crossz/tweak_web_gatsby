module.exports = {
  siteMetadata: {
    siteUrl: 'https://take2health.net',
    title: 'Take2 Prophecy',
    description: 'Details of Take2 Prophecy',
    messenger: 'https://www.facebook.com/messages/t/100757495628023',
    whatsappAccount: '(852) 5377 0823',
    whatsapp:
      'https://api.whatsapp.com/send/?phone=85253770823&text=Halo%2C+I+want+to+know+more+about+Prophecy+Test%21+&app_absent=0',
    facebook: 'https://www.facebook.com/take2health.ltd',
    linkedin: 'https://www.linkedin.com/company/take2-health',
    youtube: 'https://youtu.be/BACVA3es0NI',
    campaignPage: 'https://take2health.net/whats-new/campaign/',
    platformUrl: 'https://take2health.net/health-platform',
    email: 'info@take2.health',
    phone: '(852) 3613 0533',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        disableAutoprefixing: true,
        disableMinification: false,
      },
    },
    `gatsby-plugin-smoothscroll`,
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
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 570,
              loading: 'lazy',
            },
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: '100%',
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 320, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              loadingStrategy: 'lazy', //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
              // urlOverrides: [
              //   {
              //     id: 'youtube',
              //     embedURL: (videoId) =>
              //       `https://www.youtube-nocookie.com/embed/${videoId}`,
              //   },
              // ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
              containerClass: 'embedVideo-container', //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
              iframeId: true, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
            },
          },
        ],
      },
    },
    `gatsby-remark-images`,
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
    `gatsby-transformer-json`,
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
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-TK5V677',

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        // defaultDataLayer: { platform: 'gatsby' },

        // Specify optional GTM environment details.
        // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
        // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
        // dataLayerName: 'YOUR_DATA_LAYER_NAME',

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: 'YOUR_ROUTE_CHANGE_EVENT_NAME',
        // Defaults to false
        // enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        // selfHostedOrigin: 'YOUR_SELF_HOSTED_ORIGIN',
      },
    },
    `gatsby-env-variables`,
  ],
}
