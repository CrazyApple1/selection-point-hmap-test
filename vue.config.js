const webpack = require('webpack');
const helDevUtils = require('hel-dev-utils');
const subApp = require('./subApp');
const isDev = process.env.NODE_ENV === 'development'
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const webpack = require('webpack');

module.exports = {
  // 此处传入的url值仅为了方便另一个项目可以基于当前模块的wed-dev-server调试当前模块代码，端口号对齐 npm run start 里的 PORT
  // 它不会影响流水线的 publicUrl 值，因为 hel-dev-utils 内部发现设置有 process.env.HEL_APP_HOME_PAGE 时或 设置了 npmCdnType 时，
  // 会优先采用 HEL_APP_HOME_PAGE 值或 npmCdnType 对应的 cdn 前缀值作为 publicUrl，覆盖掉这里的默认值
  publicPath: subApp.getPublicPathOrUrl('http://localhost:7001'),
  productionSourceMap: true,
  outputDir: helDevUtils.cst.HEL_DIST_DIR,
  configureWebpack: config => {
    config.output.library = subApp.groupName;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = subApp.jsonpFnName;
    if(!isDev){
      config.externals = subApp.externals;
    }
    config.optimization = {
      splitChunks: {
        maxSize: 6000000,
      },
    };

    config.devServer = {
      // 开启跨域，方便本机上别的项目调试当前模块
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        'CooKie': 'JSESSIONID=TSczp1iG68hyZCH74nbqiuElSufIrkuSjVfTKtfr; imap_session=qISjYTgidU2F-a4OsWKbHPpp60xlnG4-I94rExJ6vR9hgEvbknJtmif3w6c-JLkd; irobin-web_session=y7RjovvTBYQAwOm2X1r47nqeCIhHTDlvuSPZtZc0cUptCGXbf7HhoWYxuAmIKY8y; portal_type_cookie=iportal; portal_type_cookie.sig=UCZaF8EkRMH4dmm8_FyX0-kK5EmKE5pVSkOszTqKyzs; isearch_hik_sess=de-V7dxsWRSvgt3_D53kN_rok95hyelW0fELOgeqJOVhsjd_ehYI3LVMutcPPWDj; Current_Env=EQBAAPMibexhnBttIUARqdmi0nPxZl1T5dw8qm1udM/0COWIUQgbQXLPYHdyi8KeDo3V1HvQZBiadila9R8TL6Ljr1R53S4raL40bI+q8Zgaw5Bxl04Fc2SPaiRe/WXvvKv99A==; OPSMGRCASTGC=TGT-300-Mjkyf5ZH7NBXLPr7hQQrVZp1Vad9vQaaMueiGVUTsqDzbSHVjS-cas; portal_locale_cookie=zh_CN; portal_locale_cookie.sig=VGxNpP7F4XZ1Gp3jFG_eDaYRyjAPOrprGsuvEUOU4_s; portal_locale_cookie_egg=zh_CN; portal_locale_cookie_egg.sig=w1ywwaZdZHDklrBdqaDLkbkaT6pDsqBnY3Yx5WYGaDo; CASTGC=TGT-101-1-E255EE4B793A4DD5A72CA482533D276B-5U0NsefBprfGrHFaZgLuD2f6y2JHjQYXL347f0celk2ZPCQoXB-cas; portal_sess=yZjVZmiRtCWM8E2bt7OUGW04kxQETEwoHkwysfJlWrYKMycaL2KuDDKl9q0WnvjT'
      },
      proxy: {
        '^/imap-server/service/': {
        // target: 'http://10.33.25.74:4000/mock/3430', mock
        // target: 'http://10.13.65.112:8080',
        // target: 'http://10.33.25.74:4000/mock/3430',
        // target: 'https://10.17.70.205',
        // target: 'http://10.20.84.33:8940',
        target: 'https://10.19.133.194/',
        changeOrigin: true
       },
       '/imultalarm-deploy/': {
        // target: 'http://10.33.25.74:4000/mock/3430', mock
        // target: 'http://10.13.65.112:8080',
        // target: 'http://10.33.25.74:4000/mock/3430',
        // target: 'https://10.17.70.205',
        // target: 'http://10.20.84.33:8940',
        target: 'http://10.20.84.103:8972/',
        changeOrigin: true,
        secure: false,
        // onProxyReq(a) {
        //   a.setHeader(
        //     "CooKie",
        //     "JSESSIONID=Rf9RXtbchrzkpBQvD32i-A0-k3jLRwxV49sifyao; imap_session=qISjYTgidU2F-a4OsWKbHPpp60xlnG4-I94rExJ6vR9hgEvbknJtmif3w6c-JLkd; irobin-web_session=y7RjovvTBYQAwOm2X1r47nqeCIhHTDlvuSPZtZc0cUptCGXbf7HhoWYxuAmIKY8y; portal_type_cookie=iportal; portal_type_cookie.sig=UCZaF8EkRMH4dmm8_FyX0-kK5EmKE5pVSkOszTqKyzs; isearch_hik_sess=de-V7dxsWRSvgt3_D53kN_rok95hyelW0fELOgeqJOVhsjd_ehYI3LVMutcPPWDj; Current_Env=EQBAAPMibexhnBttIUARqdmi0nPxZl1T5dw8qm1udM/0COWIUQgbQXLPYHdyi8KeDo3V1HvQZBiadila9R8TL6Ljr1R53S4raL40bI+q8Zgaw5Bxl04Fc2SPaiRe/WXvvKv99A==; OPSMGRCASTGC=TGT-300-Mjkyf5ZH7NBXLPr7hQQrVZp1Vad9vQaaMueiGVUTsqDzbSHVjS-cas; portal_locale_cookie=zh_CN; portal_locale_cookie.sig=VGxNpP7F4XZ1Gp3jFG_eDaYRyjAPOrprGsuvEUOU4_s; portal_locale_cookie_egg=zh_CN; portal_locale_cookie_egg.sig=w1ywwaZdZHDklrBdqaDLkbkaT6pDsqBnY3Yx5WYGaDo; portal_sess=_kgTXlxipXgaDWhGE5Ow3bpYLJcX0F7nR1BGYwoBcFfkoJoKrJdAnar8r5Cav3xt; CASTGC=TGT-101-1-E255EE4B793A4DD5A72CA482533D276B-5U0NsefBprfGrHFaZgLuD2f6y2JHjQYXL347f0celk2ZPCQoXB-cas"
        //   );
        // }
       },
      }
    };
    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 2
      })
    );
    // if(isDev){
    //    config.plugins.push(new BundleAnalyzerPlugin())
    // }
    config.module.rules.push({
        test: /\.txt$/i,
        use: 'raw-loader',
      },)
    // if user want to inject env var
    // config.plugins.push(new webpack.DefinePlugin({
    //   "process.env": {
    //     VUE_APP_XXX: JSON.stringify('xxx'),
    //   }
    // }));
  }
};
