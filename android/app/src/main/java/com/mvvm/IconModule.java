package com.mvvm;

import android.content.ComponentName;
import android.content.pm.PackageManager;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class IconModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    IconModule(ReactApplicationContext context){
        super(context);
        reactContext = context;
    }

    public IconModule() {

    }

    @ReactMethod
    public void setIconOne( boolean isNewIcon){
        Toast.makeText(reactContext,"Hiiii",Toast.LENGTH_LONG).show();
        PackageManager pm = reactContext.getApplicationContext().getPackageManager();
        if (isNewIcon) {

            pm.setComponentEnabledSetting(
                    new ComponentName(
                            reactContext,
                            "com.mvvm.EntryActivity"),
                    PackageManager.COMPONENT_ENABLED_STATE_DISABLED,
                    PackageManager.DONT_KILL_APP);

            // disable new icon
            pm.setComponentEnabledSetting(
                    new ComponentName(
                            reactContext,
                            "com.mvvm.SplashActivityAlias1"),
                    PackageManager.COMPONENT_ENABLED_STATE_ENABLED,
                    PackageManager.DONT_KILL_APP);


        } else {

            pm.setComponentEnabledSetting(
                    new ComponentName(
                            reactContext,
                            "com.mvvm.EntryActivity"),
                    PackageManager.COMPONENT_ENABLED_STATE_ENABLED,
                    PackageManager.DONT_KILL_APP);

            // disable new icon
            pm.setComponentEnabledSetting(
                    new ComponentName(
                            reactContext,
                            "com.mvvm.SplashActivityAlias1"),
                    PackageManager.COMPONENT_ENABLED_STATE_DISABLED,
                    PackageManager.DONT_KILL_APP);
        }
    }
    @NonNull
    @Override
    public String getName() {
        return "DynamicIcon";
    }
}
