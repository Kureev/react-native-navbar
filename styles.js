const React = require('react-native');

const NAV_BAR_HEIGHT = 44;
const STATUS_BAR_HEIGHT = 20;
const NAV_HEIGHT = NAV_BAR_HEIGHT + STATUS_BAR_HEIGHT;

module.exports = React.StyleSheet.create({
  navBarContainer: {
    height: NAV_HEIGHT,
    backgroundColor: 'white',
    paddingBottom: 5,
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomWidth: 1 / React.PixelRatio.get(),
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: 'white'
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  customTitle: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 5,
    left: 0,
    right: 0,
  },
  navBarText: {
    fontSize: 16,
    textAlign: 'center',
  },
  navBarTitleText: {
    color: '#373e4d',
    fontWeight: '500',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 12,
  },
  navBarLeftButton: {
    paddingLeft: 10,
    height: NAV_BAR_HEIGHT,
    justifyContent: 'center'
  },
  navBarRightButton: {
    paddingRight: 10,
    height: NAV_BAR_HEIGHT,
    justifyContent: 'center'
  },
  navBarButtonText: {
    color: '#5890ff',
  },
});
