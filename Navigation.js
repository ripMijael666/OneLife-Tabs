const Stack = createNativeStackNavigator();

function Navigation() {

    const {state, restoreToken} = React.useContext(AuthContext);
    console.log(state);

    React.useEffect(() => {
        const bootstrapAsync = async () => {
          let userToken;
          try {
            userToken = await SecureStore.getItemAsync('userToken');
          } catch (e) {
          }
          restoreToken({userToken});
        };
        bootstrapAsync();
      },[]
    );

    return (

            <Stack.Navigator
              screenOptions={{
              headerShown: false,
              }} >
              {state.isLoading ? (
                  <Stack.Screen
                      name="Splash"
                      component={Splash}
                  />
              ) : state.userToken == null ? (
                  <>
                      <Stack.Screen
                        name="CiudadScreen"
                        component={CiudadScreen}
                      />
                      <Stack.Screen
                          name="LogIn"
                          component={SignInScreen}
                      />
                      {/* <Stack.Screen
                        name="Home"
                        component={Home}
                      /> */}
                  </>
              ) : (
                  <Stack.Screen
                    name="Home"
                    component={Home}
                  />
              )}
            </Stack.Navigator>

    );
}

export default () => {
    return (
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    );
};