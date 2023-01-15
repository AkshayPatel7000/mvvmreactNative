package com.mvvm;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.provider.Settings;
import android.util.Log;
import android.widget.Toast;

public class AirplaneModeChangeReceiver extends BroadcastReceiver {
    IconModule iconModule = new IconModule();
    @Override
    public void onReceive(Context context, Intent intent) {
        Log.i("Tag","AirPlane mode is on");
        if (isAirplaneModeOn(context.getApplicationContext())) {
            Log.i("Tag","AirPlane mode is on");
            iconModule.setIconOne(true);
            Toast.makeText(context, "AirPlane mode is on", Toast.LENGTH_SHORT).show();
        } else {
            iconModule.setIconOne(false);
            Log.i("Tag","AirPlane mode is off");
            Toast.makeText(context, "AirPlane mode is off", Toast.LENGTH_SHORT).show();
        }
    }

    private static boolean isAirplaneModeOn(Context context) {
        return Settings.System.getInt(context.getContentResolver(), Settings.Global.AIRPLANE_MODE_ON, 0) != 0;
    }
}
