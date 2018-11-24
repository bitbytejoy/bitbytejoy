const externals = {
  lodash: '_'
}

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals = externals
    }
    return config
  }
}
