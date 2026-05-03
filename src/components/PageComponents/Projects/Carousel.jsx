import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import styled from "styled-components";
import "swiper/css";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import { MediaVideo } from "./MediaWrapper";

const Carousel = ({ mediaArr, direct, setIsVideo, setVideoSrc, setImgSrc,videoIndex }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={5}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        reverseDirection: direct,
      }}
      breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 10 },
        480: { slidesPerView: 3, spaceBetween: 10 },
        768: { slidesPerView: 3, spaceBetween: 10 },
        1024: { slidesPerView: 10, spaceBetween: 5 },
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <SlideWrapper onClick={() => {setIsVideo(true);setVideoSrc(MediaVideo[videoIndex])}}>
          <VideoWrapper>
            <StyledIcon fontSize="large" />
            <StyledVid
              src={mediaArr[0]}
              alt=""
            />
          </VideoWrapper>
        </SlideWrapper>
      </SwiperSlide>
      {mediaArr.map((media, index) => {
        return (
          <SwiperSlide key={index}>
            <SlideWrapper
              onClick={() => {
                setIsVideo(false);
                setImgSrc(media);
              }}
            >
              <StyledImg src={media} alt="" />
            </SlideWrapper>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const SlideWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  height: 120px;
  cursor: pointer;
  position: relative;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const StyledVid = styled(StyledImg)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: relative;
`;

const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIcon = styled(PlayCircleFilledWhiteOutlinedIcon)`
  width: 64px;
  height: 64px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;

export default Carousel;
