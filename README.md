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
<li><a href="https://github.com/tailwindlabs/tailwindcss">TailwindCSS</a></li>
I am using this library in combination with NativeWind.
<li><a href="https://reactnavigation.org/">react-navigation</a></li>
I'm not going to navigate to any screens, just added this so I can do some experiments with navigation in RN. I'm currently just using the <i>native</i> and <i>native-stack</i> modules of this library.
</ul>


Apps implemented:
1. <a href="https://youtu.be/Q1xQuCpYIFE">Movie App</a> (fully implemented).
2. <a href="https://youtu.be/mhyuMy4aI-M">Coffee App</a> (fully implemented).
3. [Step Counter app](https://www.youtube.com/live/VVoXcr18mdo?feature=share)(00:10).
4. [Food order and map app](https://youtu.be/v-zxqkz1T8E)(00:00).