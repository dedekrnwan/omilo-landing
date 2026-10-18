/**
 * mascotSounds.ts: a short sound for each mascot when it is clicked.
 * Every sound is synthesised with the Web Audio API (no audio files, nothing to load or license),
 * and each one matches the helper's prop:
 *   brand (spark)       sparkle: quick rising chime
 *   chief (crown)       mini fanfare: two bright brass notes
 *   ops (gear)          ratchet: a run of mechanical clicks
 *   dev (glasses)       8-bit blip: typing ticks then a computer beep
 *   support (headset)   call chime: "ding-dong"
 *   finance (coin)      coin pickup: "ka-ching"
 *   marketing (megaphone) horn toot with a wobble
 *   sales (tie)         deal done: an upward "woo-hoo" whistle
 *   retro (magnifier)   curious "hmm?": a soft rising question
 * The audio context starts on the first click (browsers only allow sound after a user gesture).
 * Volume is kept low; a fast double click does not stack sounds on top of each other.
 */
type Key = 'brand' | 'chief' | 'ops' | 'dev' | 'support' | 'finance' | 'marketing' | 'sales' | 'retro';

let ctx: AudioContext | null = null;
let out: GainNode | null = null;
let lastAt = -1;

function audio(): AudioContext | null {
  if (ctx) return ctx;
  const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  ctx = new AC();
  out = ctx.createGain();
  out.gain.value = 0.22;
  out.connect(ctx.destination);
  return ctx;
}

/** One enveloped oscillator note. `glide` bends the pitch to that frequency over the note. */
function tone(t: number, freq: number, dur: number, type: OscillatorType = 'sine', vol = 1, glide?: number, vibrato = 0) {
  const a = ctx!, o = a.createOscillator(), g = a.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  if (glide) o.frequency.exponentialRampToValueAtTime(glide, t + dur);
  if (vibrato) {
    const lfo = a.createOscillator(), depth = a.createGain();
    lfo.frequency.value = 9; depth.gain.value = vibrato;
    lfo.connect(depth).connect(o.frequency);
    lfo.start(t); lfo.stop(t + dur + 0.05);
  }
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(out!);
  o.start(t); o.stop(t + dur + 0.02);
}

/** A tiny filtered noise burst: clicks, ticks, ratchets. */
function click(t: number, freq = 2400, dur = 0.03, vol = 0.8) {
  const a = ctx!, len = Math.max(1, Math.floor(a.sampleRate * dur));
  const buf = a.createBuffer(1, len, a.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
  const src = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
  src.buffer = buf; f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = 3; g.gain.value = vol;
  src.connect(f).connect(g).connect(out!);
  src.start(t);
}

const SOUNDS: Record<Key, (t: number) => void> = {
  brand: (t) => { [1318.5, 1760, 2349.3, 3136].forEach((f, i) => tone(t + i * 0.055, f, 0.28, 'sine', 0.5)); },
  chief: (t) => { tone(t, 523.3, 0.12, 'sawtooth', 0.28); tone(t + 0.12, 784, 0.32, 'sawtooth', 0.32); tone(t + 0.12, 659.3, 0.32, 'triangle', 0.25); },
  ops: (t) => { for (let i = 0; i < 6; i++) click(t + i * 0.045, 1800 + i * 120, 0.025, 0.9); tone(t + 0.29, 220, 0.12, 'square', 0.12); },
  dev: (t) => { [0, 0.06, 0.1, 0.17].forEach((d, i) => click(t + d, 3200 - i * 200, 0.02, 0.7)); tone(t + 0.24, 988, 0.07, 'square', 0.18); tone(t + 0.32, 1319, 0.1, 'square', 0.18); },
  support: (t) => { tone(t, 880, 0.45, 'sine', 0.55); tone(t + 0.2, 698.5, 0.6, 'sine', 0.5); },
  finance: (t) => { tone(t, 987.8, 0.08, 'square', 0.2); tone(t + 0.08, 1318.5, 0.4, 'square', 0.2); },
  marketing: (t) => { tone(t, 330, 0.32, 'sawtooth', 0.3, 392, 12); },
  sales: (t) => { tone(t, 600, 0.16, 'sine', 0.45, 1100); tone(t + 0.18, 750, 0.24, 'sine', 0.45, 1500); },
  retro: (t) => { tone(t, 330, 0.18, 'triangle', 0.45, 300); tone(t + 0.2, 392, 0.3, 'triangle', 0.45, 587); },
};

/** Play the sound for this mascot key (ignored for unknown keys). */
export function playMascot(key: string | undefined) {
  const play = key && SOUNDS[key as Key];
  if (!play) return;
  const a = audio();
  if (!a) return;
  if (a.state === 'suspended') void a.resume();
  const now = a.currentTime;
  if (now - lastAt < 0.12) return;
  lastAt = now;
  play(now + 0.01);
}
