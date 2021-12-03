module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		['@babel/plugin-proposal-decorators', { legacy: true }],
		[
			'module-resolver',
			{
				alias: {
					'@lib': './src/lib',
					'^@feature/(.+)': ([, name]) => `./src/features/${name}/shared`
				}
			}
		],
		// Reanimated plugin has to be listed last.
		'react-native-reanimated/plugin'
	]
}
