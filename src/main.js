(() => {
    'use strict';

    require('./styles.scss');

    require('lodash');

    class WebpackStarter {
        static Display(message) {
            document.write(message);
        }  
    }

    WebpackStarter.Display('webpack with babel-loader for ES6 support..');

})();