import React, { useState, useEffect, useRef } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import { SongList } from "../../PageComponents/Sidebar/SongList";

const Widget = styled("div")(({ theme }) => ({
  padding: 5,
  borderRadius: 16,
  width: 180,
  maxWidth: "100%",
  margin: "5px",
  position: "relative",
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));

const CoverImage = styled("div")({
  width: 100,
  height: 100,
  objectFit: "contain",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
    height: "100%",
  },
});

export default function MusicPlayerSlider({ ishovered }) {
  const theme = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const [songIndex, setSongIndex] = useState(0);

  const audioRef = useRef();

  function playPause() {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    prevValue ? audioRef.current.pause() : audioRef.current.play() ;
  }

  function previousSong() {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    songIndex === 0
      ? setSongIndex(SongList.length - 1)
      : setSongIndex(songIndex - 1);
    audioRef.current.load();
    setIsPlaying(true);
    audioRef.current.play();
  }

  function nextSong() {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    songIndex === SongList.length - 1
      ? setSongIndex(0)
      : setSongIndex((prev)=> prev+1);
    audioRef.current.load();
    setIsPlaying(true);
    audioRef.current.play()
  }

  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";

  return (
    <div>
      <audio preload="true" ref={audioRef} onEnded={()=>{nextSong()}} >
        <source type="audio/mp3" src={SongList[songIndex].songSrc}/>
      </audio>
      {ishovered ? (
        <Box
          lg={{ width: "200px", overflow: "hidden", height: "300px" }}
          sx={{
            width: "200px",
            overflow: "hidden",
            marginTop: "20px",
            height: "300px",
          }}
        >
          <Widget>
            <Box
              lg={{
                width: "180px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "180px",
              }}
              sx={{
                height: "180px",
                width: "180px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CoverImage>
                <img
                  alt={SongList[songIndex].song}
                  src={SongList[songIndex].imgSrc}
                />
              </CoverImage>
              <Box sx={{ ml: 1, minWidth: 0 }}>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  fontWeight={500}
                >
                  {SongList[songIndex].artist}
                </Typography>
                <Typography sx={{ fontSize: "10px" }}>
                  <b>{SongList[songIndex].song}</b>
                </Typography>
                <Typography letterSpacing={-0.25} sx={{ fontSize: "10px" }}>
                  {SongList[songIndex].album}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: -2,
              }}
            ></Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: -1,
              }}
            >
              <IconButton
                aria-label="previous song"
                onClick={() => previousSong()}
              >
                <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
              </IconButton>
              <IconButton
                aria-label={isPlaying ? "play" : "pause"}
                onClick={() => playPause()}
              >
                {isPlaying ? (
                  <PauseRounded
                    sx={{ fontSize: "3rem" }}
                    htmlColor={mainIconColor}
                  />
                ) : (
                  <PlayArrowRounded
                    sx={{ fontSize: "3rem" }}
                    htmlColor={mainIconColor}
                  />
                )}
              </IconButton>
              <IconButton aria-label="next song" onClick={() => nextSong()}>
                <FastForwardRounded
                  fontSize="large"
                  htmlColor={mainIconColor}
                />
              </IconButton>
            </Box>
            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1, px: 1 }}
              alignItems="center"
            ></Stack>
          </Widget>
        </Box>
      ) : (
        <MusicNoteOutlinedIcon
          style={{ marginLeft: "6px", marginTop: "16px" }}
        />
      )}
    </div>
  );
}
