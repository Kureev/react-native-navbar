## Customizable navbar for react-native
**Attention:** this component has been designed for usage with [Navigator](http://facebook.github.io/react-native/docs/navigator.html#content).

![Image of Yaktocat](http://i59.tinypic.com/1051boj.png)

### Installation
```bash
npm install react-native-navbar
```

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

### Component props
- title (String) - Title of the navbar
- titleColor (String) - Color of the navbar title (hex/rgb(a))
- buttonsColor (String) - Color of the buttons
- backgroundColor (String) - Color of the navbar's background
- onPrev (Function) - Callback on left navbar button click
- onNext (Function) - Callback on right navbar button click
- prevTitle (String) - Caption of the "back" button
- nextTitle (String) - Caption of the "next" button

### Questions?
Feel free to contact me in [twitter](https://twitter.com/kureevalexey) or [create an issue](https://github.com/Kureev/react-native-navbar/issues/new)
