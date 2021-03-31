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
				<div class="Bubfeat chan-name">
					<p>F8 Settings</p>
				</div>
				<div class="upcoming">
					<strong> Features coming in the future </strong>
					<div>
						<p> Make the two buttons work </p>
					</div>
				</div>
				<RadioGroup
					onChange={e => {
						updateSetting('F8fixkey', e.value);
						if (e.value === 1) updateSetting('indicator', false);
					}}
					value={getSetting('F8fixkey', 0)}
					options={[
						{
							name: 'F8',
							value: 0
						},
						{
							name: 'Custom Keybind',
							value: 1
						}
					]}
				>
					<div>
						F8 fix key
						<p class="warning">Dont do repeat your keybind it may freeze discord</p>
					</div>
				</RadioGroup>
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