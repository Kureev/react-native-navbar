## Customizable navbar for react-native
**Attention:** this component has been designed for usage with [Navigator](http://facebook.github.io/react-native/docs/navigator.html#content).

![Image of Yaktocat](http://i59.tinypic.com/1051boj.png)

### Content
- [Installation](#installation)
- [Usage example](#usage-example)
- [Custom elements](#custom-elements)
  - [Custom buttons](#custom-buttons)
  - [Custom title](#custom-title)
- [Component props](#component-props)
- [Questions?](#questions)

### Installation
```bash
npm install react-native-navbar
```

**Warning!** From version `0.7.1` this package require `react-native` version 0.8 or higher!

### Usage example
```javascript
var NavigationBar = require('react-native-navbar');

var ExampleProject = React.createClass({

  renderScene: function(route, navigator) {
    var Component = route.component;
    var navBar = route.navigationBar;

    if (navBar) {
      navBar = React.addons.cloneWithProps(navBar, {
        navigator: navigator,
        route: route
      });
    }

    return (
      <View style={styles.navigator}>
        {navBar}
        <Component navigator={navigator} route={route} />
      </View>
    );
  },

  render: function() {
    return (
      <Navigator
        style={styles.navigator}
        renderScene={this.renderScene}
        initialRoute={{
          component: InitialView,
          navigationBar: <NavigationBar title="Initial View"/>
        }}
      />
    );
  }
});
```

Also, you can take a look on [`examples`](https://github.com/Kureev/react-native-navbar/tree/master/examples) folder

### Custom elements
In the cases when you need some *extra* customization (like replacing title by image, adding extra buttons, etc), you can use custom components. Every custom component will receive `navigator` and `route` property from `renderScene` method.

#### Custom buttons
There are some cases when you need to use custom buttons and it's not hard at all:
```javascript
var CustomPrevButton = require('./CustomPrevButton');
var CustomNextButton = require('./CustomNextButton');

var navigationBar = (
  <NavigationBar
    title="Custom buttons"
    customPrev={<CustomPrevButton/>}
    customNext={<CustomNextButton/>}
  />
);
```
In every button you'll receive a [`navigator`](http://facebook.github.io/react-native/docs/navigator.html#navigation-methods) property.

#### Custom title
If for some reason you want to customize a title (add image or whatever), you can use `customTitle` prop:
```javascript
var CustomTitle = require('./CustomTitle');

var navigationBar = <NavigationBar customTitle={<CustomTitle />} />;
```

### Component props
- `title` (String) - Title of the navbar
- `titleColor` (String) - Color of the navbar title (hex/rgb(a))
- `backgroundStyle` (Object) - Style that would be applied to navbar background component (Status Bar + Navbar). Navbar container is wrapped by background container to allow customize those layers separately. In case you need to make this view transparent or change background color - this option for you
- `statusBarStyle` (Object) - Style that would be applied to the Status Bar.
- `style` (Object) - Style that would be applied to navbar container. That property is only about real container that wraps buttons and title
- `buttonsColor` (String) - Color of the buttons
- `onPrev` (Function (navigator, route)) - Callback on left navbar button click
- `onNext` (Function (navigator, route)) - Callback on right navbar button click
- `hidePrev` (Boolean) - Should `prev` button be hidden or not
- `prevTitle` (String) - Caption of the "back" button
- `nextTitle` (String) - Caption of the "next" button
- `customPrev` (React.Element) - React element to use instead of standart prev button
- `customNext` (React.Element) - React element to use instead of standart next button
- `customTitle` (React.Element) - React element to use instead of standart title
- `statusBar` (String) - Color of the status bar (lightContent/default)

### Usage with Webpack
This module uses jsx syntax and requires a compiler such as [babel](https://babeljs.io/).
React Native's packager runs this automatically but if you use Webpack be sure
to compile this module from your dependencies
```javascript
loaders: [{
  test: /\.js$/,
   include: [
     path.resolve(__dirname, "src"),
     path.resolve(__dirname, "node_modules/react-native-navbar")
   ],
  loader: 'babel',
  query: { stage: 0, plugins: [] }
}]
```

### Questions?
Feel free to contact me in [twitter](https://twitter.com/kureevalexey) or [create an issue](https://github.com/Kureev/react-native-navbar/issues/new)
