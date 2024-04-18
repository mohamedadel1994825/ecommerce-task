// import { queryClient } from "@reactquery";
// import Reactotron from "reactotron-react-native";
// import {
//   QueryClientManager,
//   reactotronReactQuery,
// } from "reactotron-react-query";
// import { reactotronRedux } from "reactotron-redux";
// // import { reduxStorage, storage } from '../hooks/helpers/Storage';
// import { reduxStorage } from '../store/store';

// const queryClientManager = new QueryClientManager({
//   queryClient: queryClient
// });
// const ignoredUrls = [
//   /https:\/\/clients3\.google\.com\/generate_204/,
//   /symbolicate/,
//   // Add more regex patterns for additional URLs
// ];
// const reactotron = Reactotron.setAsyncStorageHandler(reduxStorage) // AsyncStorage would either come from `react-native` or `@react-native-async-storage/async-storage` depending on where you get it from
//   .configure({
//     name: "React Native Demo",
//     onDisconnect: () => {
//       queryClientManager.unsubscribe();
//     },
//     host: '192.168.1.3'
//   })
//   .useReactNative({
//     asyncStorage: false, // there are more options to the async storage.
//     networking: {
//       // optionally, you can turn it off with false.
//       ignoreUrls: new RegExp(ignoredUrls.map(url => `(${url.source})`).join('|')),
//     },
//     editor: false, // there are more options to editor
//     errors: { veto: (stackFrame) => false }, // or turn it off with false
//     overlay: false, // just turning off overlay
//   })

//   .use(reactotronReactQuery(queryClientManager))
//   .use(reactotronRedux())
//   // .use(mmkvPlugin({ storage }))
//   .connect();
// export default reactotron;

import { queryClient } from "@reactquery";
import Reactotron from "reactotron-react-native";
import mmkvPlugin from "reactotron-react-native-mmkv";
import {
  QueryClientManager,
  reactotronReactQuery,
} from "reactotron-react-query";
import { reactotronRedux } from "reactotron-redux";
// import { reduxStorage, storage } from '../hooks/helpers/Storage';
import { appStorage, reduxStorage } from '@store';

const queryClientManager = new QueryClientManager({
  queryClient: queryClient
});
const reactotron = Reactotron // AsyncStorage would either come from `react-native` or `@react-native-async-storage/async-storage` depending on where you get it from
  .configure({
    name: "React Native Demo",
    // onDisconnect: () => {
    //   queryClientManager.unsubscribe();
    // },
    // host: '192.168.1.2'
    // host: '192.168.43.33'
  })
  .use(reactotronRedux())
  .setAsyncStorageHandler!(reduxStorage)
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage.
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /(symbolicate|generate_204)/,
    },
    editor: false, // there are more options to editor
    errors: { veto: (stackFrame) => false }, // or turn it off with false
    overlay: false, // just turning off overlay
  })
  .use(reactotronReactQuery(queryClientManager))
  .use(mmkvPlugin({ storage: appStorage }))
  .connect();
export default reactotron;