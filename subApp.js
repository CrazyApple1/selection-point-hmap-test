const helDevUtils = require('hel-dev-utils');
const pkg = require('./package.json');
// https://10.19.133.194/imap-server/selection/remote-selection-point-hmap/hel-meta.json
// 修改在线的url地址
const subApp = helDevUtils.createVue2SubApp(pkg, 
    { 
        homePage: '/imap-server/selection/remote-selection-point', 
        handleHomePage: false,
        externals:{
            'element-ui': 'ELEMENT',
        } 
    }); 
// 自定义的私服cdn
// const subApp = helDevUtils.createVue2SubApp(pkg, { homePage: 'http://unpkg.dev.hikhub.net' }); 
// 默认的cdn unpkg
// const subApp = helDevUtils.createVue2SubApp(pkg, { npmCdnType: 'unpkg' }); 

// 自定义 homePage，形如：https://youhost.com/aa/bb、 /aa/bb、../aa/bb
// const subApp = helDevUtils.createVue2SubApp(pkg, { npmCdnType: 'unpkg', homePage: './xx' });

// 自定义 homePage，不拼接名字和版本号
// const subApp = helDevUtils.createVue2SubApp(pkg, { npmCdnType: 'unpkg', homePage: './xx', handleHomePage: false });
module.exports = subApp;
