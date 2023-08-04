const isDev = process.env.NODE_ENV === 'development';
const envConfg = {
  isDev: isDev,
  hmapServerUrl: 'http://10.19.133.194/hmap-server/conf/hmap/hmap-2d.js',
  //  https://10.33.40.234/hmap-server/conf/hmap/hmap-2d.js
  hmapServer2dUrl: 'http://10.19.133.194/hmap-server/conf/hmap/hmap-2d.js', // https://10.19.132.119/hmap-server/conf/hmap/hmap-2d.js
  token: '78006a94-a59d-454d-ae9f-968f501f1ac7',
  cTgt: 'TGT-831-1-C7F6DD2D51C943FD91A670082F96A24D-kQZcQn5C0vG3Rsh0c0ENWtFnoDrLBksfFGpvxygtbNCkUJGMn1-cas'
};
export default envConfg;