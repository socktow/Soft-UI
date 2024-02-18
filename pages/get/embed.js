module.exports = {
    page: '/embed',
    execute: async (req, res, app, config, themeConfig, info) => {
        res.render('embed', {
            req,
            config,
            themeConfig,
            info
        })
    }
}
