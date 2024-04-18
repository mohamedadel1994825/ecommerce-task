// Bugsnag.start();

/**
 * @format
 */

// import { useNotificationConfigs } from "@utils";
import { AppRegistry } from "react-native";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import "react-native-reanimated";
import App from "src/App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
