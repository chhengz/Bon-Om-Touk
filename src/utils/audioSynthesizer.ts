/**
 * Web Audio API synthesizer for Cambodian Festival atmospheric soundscapes
 * Creates pure synthesized traditional bell/gong resonant tones and rhythmic water/drum beats.
 */

class FestivalSoundscape {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private drumTimer: number | null = null;
  private waterGain: GainNode | null = null;
  private masterGain: GainNode | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /**
   * Resonant Cambodian Bronze Gong / Bell tone
   */
  public playGongTone(freq: number = 220) {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(freq * 1.5, now);

      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);

      osc.connect(gain);
      osc2.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc2.start(now);
      osc.stop(now + 3.6);
      osc2.stop(now + 3.6);
    } catch {
      // Audio context might fail on restricted environments
    }
  }

  /**
   * Traditional Touk Ngor boat drum stroke (Skor Thom pulse)
   */
  public playDrumBeat(pitch: number = 95) {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(pitch, now);
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.18);

      gain.gain.setValueAtTime(0.5, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.25);
    } catch {
      // Audio context might fail on restricted environments
    }
  }

  /**
   * Starts ambient river & periodic rhythmic festival atmosphere
   */
  public startAmbiance(cadenceBpm: number = 52) {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain || this.isPlaying) return;
      this.isPlaying = true;

      // Start drum rhythm loop
      const intervalMs = (60 / cadenceBpm) * 1000;
      let count = 0;
      this.drumTimer = window.setInterval(() => {
        if (!this.isPlaying) return;
        count++;
        // Lead strike vs secondary strike
        if (count % 4 === 1) {
          this.playDrumBeat(110);
        } else {
          this.playDrumBeat(80);
        }
        // Occasional gong every 16 beats
        if (count % 16 === 1) {
          this.playGongTone(260);
        }
      }, intervalMs);
    } catch {
      // Audio might fail on restricted environments
    }
  }

  public stopAmbiance() {
    this.isPlaying = false;
    if (this.drumTimer !== null) {
      clearInterval(this.drumTimer);
      this.drumTimer = null;
    }
    if (this.waterGain && this.ctx) {
      this.waterGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
    }
  }

  public getIsPlaying() {
    return this.isPlaying;
  }
}

export const soundscape = new FestivalSoundscape();
