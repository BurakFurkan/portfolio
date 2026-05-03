import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import CloseRounded from "@mui/icons-material/CloseRounded";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import VolumeDownOutlinedIcon from "@mui/icons-material/VolumeDownOutlined";
import VolumeOffOutlinedIcon from "@mui/icons-material/VolumeOffOutlined";
import { SongList } from "./PageComponents/Sidebar/SongList";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

const ripple = keyframes`
  0%   { transform: scale(1);   opacity: 0.6; }
  100% { transform: scale(2.4); opacity: 0; }
`;

export default function FloatingMusicPlayer() {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songIndex, setSongIndex] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [prevVolume, setPrevVolume] = useState(0.7);
  const audioRef = useRef();

  function playPause() {
    const playing = isPlaying;
    setIsPlaying(!playing);
    playing ? audioRef.current.pause() : audioRef.current.play();
  }

  function previousSong() {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    const next = songIndex === 0 ? SongList.length - 1 : songIndex - 1;
    setSongIndex(next);
    audioRef.current.load();
    setIsPlaying(true);
    audioRef.current.play();
  }

  function nextSong() {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    const next = songIndex === SongList.length - 1 ? 0 : songIndex + 1;
    setSongIndex(next);
    audioRef.current.load();
    setIsPlaying(true);
    audioRef.current.play();
  }

  function handleVolume(e) {
    const val = parseFloat(e.target.value);
    setVolume(val);
    audioRef.current.volume = val;
  }

  function toggleMute() {
    if (volume > 0) {
      setPrevVolume(volume);
      setVolume(0);
      audioRef.current.volume = 0;
    } else {
      const restored = prevVolume || 0.7;
      setVolume(restored);
      audioRef.current.volume = restored;
    }
  }

  const VolumeIcon =
    volume === 0
      ? VolumeOffOutlinedIcon
      : volume < 0.5
      ? VolumeDownOutlinedIcon
      : VolumeUpOutlinedIcon;

  const song = SongList[songIndex];

  return (
    <Wrapper>
      <audio ref={audioRef} preload="true" onEnded={nextSong}>
        <source type="audio/mp3" src={song.songSrc} />
      </audio>

      {open && (
        <Panel>
          <SongInfo>
            <SongTitle>{song.song}</SongTitle>
            <SongArtist>{song.artist}</SongArtist>
          </SongInfo>

          <Controls>
            <CtrlBtn onClick={previousSong} aria-label="Previous">
              <FastRewindRounded fontSize="small" />
            </CtrlBtn>
            <PlayBtn onClick={playPause} aria-label={isPlaying ? "Pause" : "Play"}>
              {isPlaying ? (
                <PauseRounded fontSize="small" />
              ) : (
                <PlayArrowRounded fontSize="small" />
              )}
            </PlayBtn>
            <CtrlBtn onClick={nextSong} aria-label="Next">
              <FastForwardRounded fontSize="small" />
            </CtrlBtn>
          </Controls>

          <VolumeRow>
            <MuteBtn onClick={toggleMute} aria-label="Mute / Unmute">
              <VolumeIcon style={{ fontSize: "1rem" }} />
            </MuteBtn>
            <VolumeSlider
              type="range"
              min="0"
              max="1"
              step="0.02"
              value={volume}
              onChange={handleVolume}
              aria-label="Volume"
              $fill={volume}
            />
          </VolumeRow>
        </Panel>
      )}

      <ToggleWrap>
        <Ripple $delay="0s" />
        <Ripple $delay="0.9s" />
        <Ripple $delay="1.8s" />
        <ToggleBtn
          onClick={() => setOpen((v) => !v)}
          $playing={isPlaying}
          aria-label="Toggle music player"
        >
          {open ? (
            <CloseRounded fontSize="small" />
          ) : (
            <MusicNoteOutlinedIcon fontSize="small" />
          )}
        </ToggleBtn>
      </ToggleWrap>
    </Wrapper>
  );
}

/* ── styled components ─────────────────────────────────────────── */

const Wrapper = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;

  @media (max-width: 640px) {
    bottom: calc(60px + env(safe-area-inset-bottom) + 12px);
    right: 16px;
  }
`;

const Panel = styled.div`
  background: ${(p) => p.theme.bg_elevated};
  border: 1px solid ${(p) => p.theme.border_color};
  border-radius: 14px;
  padding: 14px 16px;
  min-width: 210px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  animation: fadeSlide 0.2s ease;

  @keyframes fadeSlide {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const SongTitle = styled.span`
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 600;
  color: ${(p) => p.theme.text_primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px;
`;

const SongArtist = styled.span`
  font-family: var(--font-body);
  font-size: 0.7rem;
  color: ${(p) => p.theme.text_secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const CtrlBtn = styled.button`
  background: transparent;
  border: none;
  color: ${(p) => p.theme.text_secondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 6px;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${(p) => p.theme.text_primary};
    background: ${(p) => p.theme.sidebar_item_hover};
  }
`;

const PlayBtn = styled.button`
  background: ${(p) => p.theme.accent};
  border: none;
  color: ${(p) => p.theme.bg_primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  transition: background 0.15s, transform 0.15s;

  &:hover {
    background: ${(p) => p.theme.accent_hover};
    transform: scale(1.08);
  }
`;

const VolumeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MuteBtn = styled.button`
  background: transparent;
  border: none;
  color: ${(p) => p.theme.text_secondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: 4px;
  flex-shrink: 0;
  transition: color 0.15s;

  &:hover {
    color: ${(p) => p.theme.text_primary};
  }
`;

const VolumeSlider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  flex: 1;
  height: 3px;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  background: linear-gradient(
    to right,
    ${(p) => p.theme.accent} 0%,
    ${(p) => p.theme.accent} ${(p) => p.$fill * 100}%,
    ${(p) => p.theme.border_color} ${(p) => p.$fill * 100}%,
    ${(p) => p.theme.border_color} 100%
  );

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${(p) => p.theme.accent};
    cursor: pointer;
    transition: transform 0.15s;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.3);
  }

  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    background: ${(p) => p.theme.accent};
    cursor: pointer;
  }
`;

const ToggleWrap = styled.div`
  position: relative;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Ripple = styled.span`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: ${(p) => p.theme.accent};
  opacity: 0;
  animation: ${ripple} 2.8s ease-out infinite;
  animation-delay: ${(p) => p.$delay};
  pointer-events: none;
`;

const ToggleBtn = styled.button`
  background: ${(p) => p.theme.accent};
  border: none;
  color: ${(p) => p.theme.bg_primary};
  cursor: pointer;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px ${(p) => p.theme.accent_glow};
  transition: background 0.15s, transform 0.15s;
  position: relative;
  z-index: 1;

  svg {
    animation: ${(p) => (p.$playing ? spin : "none")} 4s linear infinite;
  }

  &:hover {
    background: ${(p) => p.theme.accent_hover};
    transform: scale(1.1);
  }
`;
