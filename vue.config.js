module.exports = {
    devServer: {
        proxy: {
            '/api/': {
                target: 'https://simpleos-api.azurewebsites.net/api/'
            }
        }
    }
};