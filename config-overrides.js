const { override, addDecoratorsLegacy,addWebpackAlias} = require('customize-cra');
const path = require('path')
function resolve(dir){
    return path.join(__dirname,'.', dir)
}
module.exports=override(
    addDecoratorsLegacy(),
    addWebpackAlias(
        {['@']:resolve('src')}
    ),
)