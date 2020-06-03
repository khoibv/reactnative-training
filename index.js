/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PhotoAlbum from './components/PhotoAlbum';

AppRegistry.registerComponent(appName, () => PhotoAlbum);
