import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import "./Animation.css";
import Photo1 from "../../images/1.jpg";
import Photo2 from "../../images/2.jpg";
import Photo3 from "../../images/3.jpg";
import Photo4 from "../../images/4.jpg";
import Photo5 from "../../images/5.jpg";
import Photo6 from "../../images/6.jpg";
import Photo7 from "../../images/7.jpg";
import Photo8 from "../../images/8.jpg";
import Photo9 from "../../images/9.jpg";
import Photo10 from "../../images/10.jpg";
import Photo11 from "../../images/11.jpg";
import Photo12 from "../../images/12.jpg";
import Photo13 from "../../images/13.jpg";
const slides = [
  {
    id: 0,
    url: Photo1,
  },
  {
    id: 1,
    url: Photo2,
  },
  {
    id: 2,
    url: Photo3,
  },
  { id: 3, url: Photo4 },
  { id: 4, url: Photo5 },
  { id: 5, url: Photo6 },
  { id: 6, url: Photo7 },
  { id: 7, url: Photo8 },
  { id: 8, url: Photo9 },
  { id: 9, url: Photo10 },
  { id: 10, url: Photo11 },
  { id: 11, url: Photo12 },
  { id: 12, url: Photo13 },
];

export default function Animation() {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  useEffect(
    () => void setInterval(() => set((state) => (state + 1) % 13), 4000),
    []
  );
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      class="bg"
      style={{
        ...props,
        backgroundImage: `url(${item.url})`,
      }}
    />
  ));
}
