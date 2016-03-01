package com.reactnativemididriver;

import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;

import org.billthefarmer.mididriver.MidiDriver;

/**
 * Created by shailesh on 01/03/16.
 */
public class MidiDriverModule extends ReactContextBaseJavaModule implements LifecycleEventListener {
    MidiDriver midiDriver;
    public MidiDriverModule(ReactApplicationContext reactApplicationContext){
        super(reactApplicationContext);
        reactApplicationContext.addLifecycleEventListener(this);
        midiDriver = new MidiDriver();
    }

    @Override
    public String getName() {
        return "MidiDriverModule";
    }

    @ReactMethod
    public void queueEvent(ReadableArray event) {
        byte[] tmp = new byte[event.size()];
        for (int i = 0; i < tmp.length; i++) {
            tmp[i] = (byte)event.getInt(i);
        }
        midiDriver.queueEvent(tmp);
    }

    @Override
    public void onHostResume() {
        // Actvity `onResume`
        midiDriver.start();
    }

    @Override
    public void onHostPause() {
        // Actvity `onPause`
        midiDriver.stop();
    }

    @Override
    public void onHostDestroy() {
        // Actvity `onDestroy`
    }

}
