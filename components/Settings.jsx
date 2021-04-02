const { RadioGroup, SwitchItem } = require('powercord/components/settings');
const { React } = require('powercord/webpack');
const KeybindRecorder = require('./KeybindRecorder')

module.exports = class Settings extends React.PureComponent {

	constructor(props) {
		super(props);
	}

	render() {
		const { getSetting, updateSetting, toggleSetting } = this.props;
		return (
			<div id="F8settings">
				<div id="desc">
					<p>Warning </p> <strong>F10</strong> <p> causes muliple bugs</p>
				</div>
				<KeybindRecorder value={getSetting('keybind', '8')}
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
