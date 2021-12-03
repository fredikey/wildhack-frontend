package com.wildhack;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
// React Native BootSplash
import com.facebook.react.ReactActivityDelegate;
import com.zoontek.rnbootsplash.RNBootSplash;

public class MainActivity extends ReactActivity {

	@Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }

	// React Native BootSplash
  @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
      return new ReactActivityDelegate(this, getMainComponentName()) {

        @Override
        protected void loadApp(String appKey) {
          RNBootSplash.init(MainActivity.this); // <- initialize the splash screen
          super.loadApp(appKey);
        }
      };
    }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "wildhack";
  }
}
