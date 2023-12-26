import { Button, ButtonProps, Carousel, CarouselProps } from "antd";
import chevron from "@/assets/chevron.svg";
import "./style.scss";

interface ICustomArrowProps extends ButtonProps {
  currentSlide?: number;
  slideCount?: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SlickArrowPrev = ({ currentSlide, slideCount, ...props }: ICustomArrowProps) => (
  <Button
    shape="circle"
    icon={<img src={chevron} style={{ transform: "rotate(180deg)" }} />}
    className={"slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")}
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    {...props}
  />
);

const SlickArrowNext = ({ currentSlide, slideCount = 0, ...props }: ICustomArrowProps) => (
  <Button
    shape="circle"
    icon={<img src={chevron} />}
    className={"slick-next slick-arrow" + (currentSlide === slideCount - 1 ? " slick-disabled" : "")}
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    {...props}
  />
);

interface IBaseCarouselProps extends CarouselProps {
  children: React.ReactNode;
}

export default function BaseCarousel(props: IBaseCarouselProps) {
  const { children } = props;

  return (
    <Carousel className="base-carousel" nextArrow={<SlickArrowNext />} prevArrow={<SlickArrowPrev />} {...props}>
      {children}
    </Carousel>
  );
}
