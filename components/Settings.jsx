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
				<SwitchItem
					value={getSetting('CustomKeybind')}
					onChange={() => {
						toggleSetting('CustomKeybind')
					}}
				>
					Custom Keybind
        		</SwitchItem>
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
