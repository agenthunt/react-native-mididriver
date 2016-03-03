//
//  ReactNativeMidiDriver.m
//  ReactNativeMidiDriver
//
//  Created by shailesh on 02/03/16.
//  Copyright © 2016 shailesh. All rights reserved.
//

#import "MidiDriverModule.h"
#import "RCTConvert.h"
#import "MIKMIDISynthesizer.h"
#import "MIKMIDINoteOnCommand.h"
#import "MIKMIDINoteOffCommand.h"

@implementation MidiDriverModule

RCT_EXPORT_MODULE();

MIKMIDISynthesizer *synth = Nil;

RCT_EXPORT_METHOD(queueEvent:(NSArray *)event)
{
   NSArray *buffer = [RCTConvert NSArray:event];
  if (synth == Nil) {
    synth = [[MIKMIDISynthesizer alloc] init];
    MIKMIDISynthesizerInstrument *instrument = [MIKMIDISynthesizerInstrument instrumentWithID:20 name:nil];
    [synth selectInstrument:instrument];

  }

  NSUInteger velocity = [buffer[2] integerValue];
  NSUInteger channel = [buffer[0] integerValue];
  NSUInteger note = [buffer[1] integerValue];
  
  MIKMIDICommand *command;
  /*if( (channel & 0xF0) == 0x90){
    command = [MIKMIDINoteOnCommand noteOnCommandWithNote:note velocity:velocity channel:channel timestamp:0];
  }else if((channel & 0xF0) == 0x80){
    command = [MIKMIDINoteOffCommand noteOffCommandWithNote:note velocity:velocity channel:channel timestamp:0];
  }*/
  
  MIDIPacket midiPacket;
  midiPacket.data[0] = channel;
  midiPacket.data[1] = note;
  midiPacket.data[2] = velocity;
  midiPacket.length = 3;
  midiPacket.timeStamp = 0;
  command = [MIKMIDICommand commandWithMIDIPacket:&midiPacket];

  NSArray<MIKMIDICommand*> *commands = [[NSArray alloc] initWithObjects:command, nil];
  [synth handleMIDIMessages:commands];
}

@end
