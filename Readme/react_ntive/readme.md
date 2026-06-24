# React Native Guide for React Developers

If you already know React, you're 80% of the way to mastering React Native. This guide covers the key differences and unique aspects of React Native development.

## Table of Contents
1. [Quick Start](#quick-start)
2. [Key Differences from Web React](#key-differences-from-web-react)
3. [Core Components](#core-components)
4. [Styling in React Native](#styling-in-react-native)
5. [Navigation](#navigation)
6. [State Management](#state-management)
7. [Debugging](#debugging)
8. [Performance Tips](#performance-tips)
9. [Best Practices](#best-practices)
10. [Resources](#resources)

---

## Quick Start

### Installation

```bash
# Using Expo (recommended for beginners)
npx create-expo-app MyApp
cd MyApp
npm start

# Using React Native CLI
npx react-native@latest init MyApp
cd MyApp
npm start
```

### First App

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, React Native!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
```

---

## Key Differences from Web React

### 1. **No HTML/CSS → Native Components**

| Web React | React Native |
|-----------|--------------|
| `<div>` | `<View>` |
| `<p>`, `<span>` | `<Text>` |
| `<img>` | `<Image>` |
| `<button>` | `<Pressable>`, `<TouchableOpacity>` |
| `<input>` | `<TextInput>` |
| CSS files | `StyleSheet.create()` |

### 2. **Flexbox is Default (and only layout system)**
React Native uses flexbox for all layouts—there's no CSS Grid or floats.

```jsx
<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
  <View style={{ flex: 1, backgroundColor: 'red' }} />
  <View style={{ flex: 1, backgroundColor: 'blue' }} />
</View>
```

### 3. **No Direct Browser APIs**
- **No `localStorage`** → Use `AsyncStorage` or `@react-native-async-storage/async-storage`
- **No `window` object** → Use `Dimensions` from React Native
- **No DOM** → Use native platform APIs directly
- **No `fetch` in some cases** → Use Axios or other HTTP clients

### 4. **No CSS**
All styling is done programmatically with `StyleSheet.create()` or inline styles. CSS properties are camelCased and numbers are in DPs (device-independent pixels).

```jsx
const styles = StyleSheet.create({
  text: {
    fontSize: 16,           // Not 16px
    marginTop: 10,          // Not margin-top
    textAlign: 'center',    // camelCase
    color: '#000',
  },
});
```

### 5. **Platform-Specific Code**
Handle iOS and Android differences:

```jsx
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  paddingTop: Platform.OS === 'ios' ? 20 : 0,
});

// Or use .ios.js and .android.js files
// Button.ios.js
// Button.android.js
```

### 6. **No `ref` for DOM Manipulation**
Refs work differently and can't directly manipulate the native view like in web.

```jsx
const inputRef = useRef();

<TextInput 
  ref={inputRef} 
  onChangeText={(text) => setInput(text)}
/>
// Can't do: inputRef.current.style.color = 'red'
```

---

## Core Components

### View (like `<div>`)
```jsx
<View style={{ padding: 20, backgroundColor: '#f0f0f0' }}>
  <Text>Content inside</Text>
</View>
```

### Text (like `<p>`, `<span>`)
```jsx
<Text style={{ fontSize: 18, color: '#333' }}>
  Hello World
</Text>
```

### Image
```jsx
import { Image } from 'react-native';

<Image
  source={require('./assets/icon.png')}
  style={{ width: 200, height: 200 }}
/>

// From URL
<Image
  source={{ uri: 'https://example.com/image.png' }}
  style={{ width: 200, height: 200 }}
/>
```

### TextInput (like `<input>`)
```jsx
<TextInput
  placeholder="Enter text"
  value={text}
  onChangeText={setText}
  style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
/>
```

### Pressable & TouchableOpacity (like `<button>`)
```jsx
// Pressable - modern, flexible
<Pressable onPress={() => handlePress()}>
  <Text>Press Me</Text>
</Pressable>

// TouchableOpacity - fades button on press
<TouchableOpacity onPress={() => handlePress()}>
  <Text>Press Me</Text>
</TouchableOpacity>
```

### ScrollView
```jsx
<ScrollView style={{ flex: 1 }}>
  <Text>Content 1</Text>
  <Text>Content 2</Text>
  <Text>Content 3</Text>
</ScrollView>
```

### FlatList (for long lists)
```jsx
<FlatList
  data={[
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
  ]}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <Text>{item.name}</Text>}
/>
```

### Modal
```jsx
<Modal visible={isVisible} animationType="slide">
  <View style={{ flex: 1 }}>
    <Text>Modal Content</Text>
    <Pressable onPress={() => setIsVisible(false)}>
      <Text>Close</Text>
    </Pressable>
  </View>
</Modal>
```

---

## Styling in React Native

### StyleSheet.create() (recommended)
```jsx
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});

<View style={styles.container}>
  <Pressable style={styles.button}>
    <Text>Tap Me</Text>
  </Pressable>
</View>
```

### Inline Styles
```jsx
<View style={{ flex: 1, padding: 20 }}>
  <Text>Content</Text>
</View>
```

### Dynamic Styles
```jsx
<View style={[
  styles.container,
  { backgroundColor: isActive ? 'blue' : 'gray' },
]}>
  <Text>Dynamic</Text>
</View>
```

### Responsive Design
```jsx
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

<View style={{ width: width > 600 ? '50%' : '100%' }}>
  <Text>Responsive</Text>
</View>
```

---

## Navigation

React Native doesn't have URL routing like web. Use **React Navigation**:

### Install
```bash
npm install @react-navigation/native @react-navigation/bottom-tabs
npm install react-native-screens react-native-safe-area-context
```

### Stack Navigation
```jsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Navigate
function HomeScreen({ navigation }) {
  return (
    <Pressable onPress={() => navigation.navigate('Details')}>
      <Text>Go to Details</Text>
    </Pressable>
  );
}
```

### Bottom Tab Navigation
```jsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```

---

## State Management

### useState (same as web)
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>{count}</Text>
      <Pressable onPress={() => setCount(count + 1)}>
        <Text>Increment</Text>
      </Pressable>
    </View>
  );
}
```

### useReducer (same as web)
```jsx
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <Pressable onPress={() => dispatch({ type: 'INCREMENT' })}>
      <Text>{state.count}</Text>
    </Pressable>
  );
}
```

### Context API (same as web)
```jsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext();

function Provider({ children }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}
```

### AsyncStorage (persistent data)
```bash
npm install @react-native-async-storage/async-storage
```

```jsx
import AsyncStorage from '@react-native-async-storage/async-storage';

// Save
await AsyncStorage.setItem('user', JSON.stringify(userData));

// Get
const user = await AsyncStorage.getItem('user');

// Delete
await AsyncStorage.removeItem('user');

// Use in useEffect
useEffect(() => {
  (async () => {
    const data = await AsyncStorage.getItem('user');
    setUser(JSON.parse(data));
  })();
}, []);
```

---

## Debugging

### React Native Debugger
```bash
npm install -g react-native-debugger
```

### Console Logs
```jsx
console.log('Debug message');
console.warn('Warning');
console.error('Error');
```

### React DevTools
Install via Expo or use the debugger directly in Android Studio / Xcode.

### Network Requests
```jsx
import { logger } from 'react-native-logger';

// Or use browser DevTools for API calls
fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

---

## Performance Tips

### 1. **Use FlatList with `removeClippedSubviews`**
```jsx
<FlatList
  data={data}
  removeClippedSubviews={true}
  maxToRenderPerBatch={10}
  updateCellsBatchingPeriod={50}
  renderItem={({ item }) => <ListItem item={item} />}
/>
```

### 2. **Memoize Components**
```jsx
import { memo } from 'react';

const ListItem = memo(({ item }) => (
  <Text>{item.name}</Text>
));
```

### 3. **Use `useCallback` for Function Props**
```jsx
const handlePress = useCallback(() => {
  // handle press
}, []);

<Pressable onPress={handlePress}>
  <Text>Press</Text>
</Pressable>
```

### 4. **Lazy Load Images**
```jsx
<Image
  source={{ uri: imageUrl }}
  style={{ width: 200, height: 200 }}
  defaultSource={require('./placeholder.png')}
/>
```

### 5. **Avoid Inline Functions**
```jsx
// ❌ Bad - creates new function on every render
<Pressable onPress={() => handlePress()}>
  <Text>Press</Text>
</Pressable>

// ✅ Good - function reference
<Pressable onPress={handlePress}>
  <Text>Press</Text>
</Pressable>
```

---

## Best Practices

### 1. **Use TypeScript**
```tsx
interface User {
  id: string;
  name: string;
  email: string;
}

const UserProfile: React.FC<{ user: User }> = ({ user }) => {
  return <Text>{user.name}</Text>;
};
```

### 2. **Handle Permissions**
```jsx
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

useEffect(() => {
  request(PERMISSIONS.IOS.CAMERA).then((result) => {
    if (result === RESULTS.GRANTED) {
      // Camera access granted
    }
  });
}, []);
```

### 3. **Safe Area**
```jsx
import { SafeAreaView } from 'react-native';

<SafeAreaView style={{ flex: 1 }}>
  <Text>Content</Text>
</SafeAreaView>
```

### 4. **Error Boundaries**
```jsx
import { ErrorBoundary } from 'react-native-error-boundary';

<ErrorBoundary
  onError={(error) => console.log(error)}
  fallback={<ErrorFallback />}
>
  <App />
</ErrorBoundary>
```

### 5. **Environment Variables**
```jsx
// .env
API_URL=https://api.example.com

// Access
import Config from 'react-native-config';
const apiUrl = Config.API_URL;
```

---

## Resources

- **Official Docs**: [React Native Docs](https://reactnative.dev)
- **React Navigation**: [Navigation Docs](https://reactnavigation.org)
- **Expo**: [Expo Docs](https://docs.expo.dev)
- **React Native Community**: [React Native Community](https://github.com/react-native-community)
- **Common Libraries**:
  - HTTP Client: `axios`, `react-query`
  - Forms: `react-hook-form`, `formik`
  - UI Components: `react-native-ui-lib`, `rneui`
  - Animation: `react-native-reanimated`
  - State Management: `redux`, `zustand`

---

## Common Mistakes

1. ❌ Using CSS instead of StyleSheet
2. ❌ Forgetting `flex: 1` on containers
3. ❌ Not setting width/height on `Image` components
4. ❌ Using web APIs like `localStorage` directly
5. ❌ Not handling async operations properly
6. ❌ Creating functions inline in render
7. ❌ Ignoring platform-specific styling

---

**Happy coding with React Native!** 🚀
