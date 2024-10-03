package com.mos_staging;


import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import android.view.View;

public class FullScreenMode extends ReactContextBaseJavaModule {
    ReactApplicationContext reactContext;
    View decorView;
  
    public FullScreenMode(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }
    @Override
    public String getName() {
        return "FullScreenMode";
    }
  
    
    @ReactMethod
    public void enterStickyImmersiveMode() {
        View decorView = getCurrentDecorView();
        decorView.setSystemUiVisibility(
            View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
            | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
            | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
            | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
            | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
            | View.SYSTEM_UI_FLAG_FULLSCREEN
        );
    }
  
     @ReactMethod
    public void enterImmersiveMode() {
        View decorView = getCurrentDecorView();
        decorView.setSystemUiVisibility(
            View.SYSTEM_UI_FLAG_IMMERSIVE
            | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
            | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
            | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
            | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
            | View.SYSTEM_UI_FLAG_FULLSCREEN
        );
    }
    
    private View getCurrentDecorView() {
     return getCurrentActivity().getWindow().getDecorView();
    }

}