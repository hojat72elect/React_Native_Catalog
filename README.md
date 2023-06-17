## React Native Catalog

This repo hold a catalog of UI elements written in React native; they have been used in variosu projects so far and I
keep them all here.

`common/` holds all the UI components that are used in various apps. And `apps/` holds various template apps we have
made with those building blocks.

### Depended on libraries:

Up until now, I have used these libraries to make my UI components:
<ul>
<li><a href="https://github.com/marklawlor/nativewind">NativeWind</a></li>
<li><a href="https://github.com/ecklf/react-native-heroicons">React Native Heroicons</a></li>
<li><a href="https://github.com/tailwindlabs/heroicons">heroicons</a> from TailwindLabs</li>
I'm not using these icons as an NPM dependency, I'm just copy pasting them from the website.
<li><a href="https://github.com/meliorence/react-native-snap-carousel">react-native-snap-carousel</a></li>
<li><a href="https://docs.expo.dev/versions/latest/sdk/linear-gradient/">Expo LinearGradient</a></li>
<li><a href="https://github.com/oblador/react-native-progress">react-native-progress</a></li>
<li><a href="https://github.com/software-mansion/react-native-svg">react-native-svg</a></li>
There are lots of other UI libraries (including heroicons) that depend on this library for their native implementation. If you do not install this library, you might have runtime crashes on some platforms.
</ul>