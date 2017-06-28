
'use strict';

//require('./styles.scss');

require('lodash');

import { Team } from './team';

class WebpackStarter {

	constructor() {
		const team = new Team();
		const developers = team.getDevelopers();
	}

	static Display(message) {
		document.write(message);
	}
}

WebpackStarter.Display('webpack with babel-loader for ES6 support..');
