import { NavigationContainerRef, CommonActions, StackActions, ParamListBase } from "@react-navigation/native";

// Define navigationRef type with ParamListBase type argument
type RootNavigationType = NavigationContainerRef<ParamListBase>;

// Initialize navigationRef
let navigationRef: RootNavigationType | null = null;

const setNavigationRef = (ref: RootNavigationType | null) => {
  if (ref) {
    navigationRef = ref;
  }
};

const getNavigationRef = (): RootNavigationType | null => navigationRef;

const pop = (count: number = 1) => {
  if (navigationRef) {
    navigationRef.dispatch(StackActions.pop(count));
  }
};

const goBack = () => {
  if (navigationRef) {
    navigationRef.goBack();
  }
};

const navigate = (routeName: string, params: object = {}) => {
  if (navigationRef && typeof routeName === "string" && routeName.length > 0) {
    navigationRef.dispatch(CommonActions.navigate({ name: routeName, params }));
  }
};

const navigateReset = (routeName: string, params: object = {}) => {
  if (navigationRef && typeof routeName === "string" && routeName.length > 0) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: routeName, params }],
      })
    );
  }
};

export {
  setNavigationRef,
  getNavigationRef,
  navigate,
  pop,
  goBack,
  navigateReset
};


// import { CommonActions, StackActions, createNavigationContainerRef } from "@react-navigation/native";

// let navigationRef = null;
// export const navRef = createNavigationContainerRef()

// const setNavigationRef = (navigation) => {
//   navigationRef = navigation;
// };

// const getNavigationRef = (navigation) => navigationRef;

// const pop = (count = 1) => {
//   if (navigationRef) {
//     navigationRef.dispatch(StackActions.pop(count));
//   }
// };
// const goBack = () => {
//   if (navigationRef) {
//     navigationRef.goBack();
//   }
// };

// const navigate = (routeName, params = {}) => {
//   if (navigationRef && typeof routeName === "string" && routeName.length > 0) {
//     navigationRef.dispatch(CommonActions.navigate({ name: routeName, params }));
//   }
// };
// const navigateWithRef = (routeName, params = {}) => {
//   if (navRef.current?.isReady()) {
//     navRef.current?.navigate(routeName, params);
//   }
// }
// const navigateReset = (routeName, params = {}) => {
//   if (navigationRef && typeof routeName === "string" && routeName.length > 0) {
//     navigationRef.dispatch(
//       CommonActions.reset({
//         index: 0,
//         routes: [{ name: routeName, params }],
//       })
//     );
//   }
// };

// export {
//   setNavigationRef,
//   getNavigationRef,
//   navigate,
//   pop,
//   goBack,
//   navigateReset,
//   navigateWithRef
// };
