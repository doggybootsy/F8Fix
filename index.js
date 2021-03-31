const { Plugin } = require('powercord/entities');
const { React, getModule } = require('powercord/webpack');
const { inject, uninject } = require('powercord/injector');
const { forceUpdateElement } = require('powercord/util');


var F8fixEnabled = false;
let keybind;

const Settings = require('./components/Settings');

//Orignal -> https://github.com/kyza-vizality/f8-fix/commit/6bfb65f45868c043bdad9c4c2b8c3ad3640b6abd#diff-e727e4bdf3657fd1d798edcd6b099d6e092f8573cba266154583a746bba0f346
//Orignal -> https://github.com/E-boi/Privacy-Tab/blob/master/Components/KeybindRecorder.jsx
module.exports = class F8Fix extends Plugin {
	constructor() {
		super();
	}

	async startPlugin() {
		this.loadStylesheet('./style.css');

		document.body.addEventListener("keyup", this.toggleF8fix);


		const { get, set } = this.settings;
		if (!get('keybind')) set('keybind', 'F8');
		if (!get('CustomKeybind')) set('CustomKeybind', false);
		keybind = get('keybind', 'F8');

    powercord.api.settings.registerSettings('f8fix-settings', {
      category: this.entityID,
      label: 'F8 Fix',
      render: Settings
    });
	}

	pluginWillUnload() {
		document.body.removeEventListener("keyup", this.toggleF8fix);
    uninject('F8Fix');
    powercord.api.settings.unregisterSettings('f8fix-settings');
	}


	toggleF8fix(key) {
		if (!document.hasFocus()) {
			return;
		}
		if (key.key.toUpperCase() === keybind) {
			F8fixEnabled = !F8fixEnabled;
			if (F8fixEnabled) {
				debugger;
			}

			let CustomKeybind = "0";
			if (get("CustomKeybind")) {
				CustomKeybind = "100%";
			}
			if (keybind !== get('keybind')) keybind = get('keybind')
		}
	}
};
