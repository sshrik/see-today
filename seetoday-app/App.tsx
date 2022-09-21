import React from 'react';
import { Dimensions, SafeAreaView, View } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewContainer: React.FC = () => (
  <WebView
    style={{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    }}
    source={{
      uri: 'https://see-today.s3.ap-northeast-2.amazonaws.com/index.html',
    }}
  />
);

const App = () => (
  <SafeAreaView>
    <View style={{ width: '100%', height: '100%', display: 'flex' }}>
      <WebViewContainer />
    </View>
  </SafeAreaView>
);

export default App;
