const appContext = require.context('.', true, /\.spec\.js$/);
appContext.keys().forEach(appContext);
