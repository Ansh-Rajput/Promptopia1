/** @type {import('next').NextConfig} */


// const nextConfig = {
//     images: {
//         domains: ['lh3.googleusercontent.com'], // Add any other domains as needed
//       },
// }
const nextConfig = {
  experimental:{
    serverComponentsExternalPackages:['mongoose'],
  },
    images: {
        domains: ['lh3.googleusercontent.com'], // Add any other domains as needed
      },
}

module.exports = nextConfig
