
package com.reactlibrary;

import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;

import org.billthefarmer.mididriver.MidiDriver;

public class RNMidiDriverModule extends ReactContextBaseJavaModule implements LifecycleEventListener{
  MidiDriver midiDriver;
  private final ReactApplicationContext reactContext;

  public RNMidiDriverModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
    reactContext.addLifecycleEventListener(this);
    midiDriver = new MidiDriver();
  }

  @Override
  public String getName() {
    return "RNMidiDriver";
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