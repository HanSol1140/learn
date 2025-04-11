// audio-processor.js
class AudioProcessor extends AudioWorkletProcessor {
    process(inputs, outputs, parameters) {
      const input = inputs[0];
      const output = outputs[0];
      if (input && output) {
        const channelData = input[0];
        const buffer = new ArrayBuffer(channelData.length * 2); // 16-bit samples
        const view = new DataView(buffer);
        for (let i = 0; i < channelData.length; i++) {
          // convert from [-1, 1] float to [0, 65535] integer
          const s = Math.max(-1, Math.min(1, channelData[i]));
          view.setInt16(i * 2, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
        }
        this.port.postMessage(buffer);
      }
      return true;
    }
  }
  
  registerProcessor('audio-processor', AudioProcessor);
  