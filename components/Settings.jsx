const { RadioGroup, SwitchItem } = require('powercord/components/settings');
const { React } = require('powercord/webpack');
const KeybindRecorder = require('./KeybindRecorder')

module.exports = class Settings extends React.PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			valueb: 123
		};
	}
	render() {
		const { getSetting, updateSetting, toggleSetting } = this.props;
		return (
			<div id="F8settings">
				<div>
					<div class="banner">
						<p>Still a work in progess</p>
					</div>
					<div class="banner">
						<p>Changing the keybind needs a restart</p>
					</div>
				</div>
				<KeybindRecorder value={getSetting('keybind', '6')}
					onChange={(e) => {
						this.setState({ value: e })
						updateSetting('keybind', e)
					}}
					onReset={() => {
						this.setState({ value: 'F8' })
						updateSetting('keybind', 'F8')
					}}
					> Toggle Keybind
				</KeybindRecorder>
			</div>
		);
	}
};
