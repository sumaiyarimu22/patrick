import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import gsap from "gsap";

import Loader from "./components/Loader";

//home pages
import HomePage from "./pages/home-1";
import HomeRtlPage from "./pages/home-1/home-rtl";
import HomeVideoPage from "./pages/home-2";
import HomeVideoRtlPage from "./pages/home-2/home-video-rtl";
import HomeParticlePage from "./pages/home-2/home-video-rtl";
import HomeParticleRtlPage from "./pages/home-3";
import HomeColorPage from "./pages/home-4";
import HomeColorRtlPage from "./pages/home-4/home-bgcolor-rtl";

// other pages
import BlogPage from "./pages/blog";
import BlogPost from "./pages/blog/blog-post";
import BlogRtlPage from "./pages/blog/blog-rtl";
import BlogRtlPost from "./pages/blog/blog-post-rtl";

export const overlayAnimation = () => {
  const tl = gsap.timeline({
    delay: -2,
  });
  tl.to(".intro__overlay-line", {
    duration: 3.5,
    width: "25vw",
    ease: "expo.inOut",
    // delay: -0.8,
  })
    .to(".intro__overlay-line", {
      duration: 2,
      width: 0,
      ease: "expo.inOut",
      // delay: -0.8,
    })
    .to(".intro__overlay", { duration: 0, css: { display: "none" } });
};

function App() {
  const [preloader, setPreloader] = useState(true);
  const preload = () => {
    setPreloader(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      preload();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {preloader ? (
        <div>
          <Loader />
        </div>
      ) : null}

      <Routes>
        <Route path='/' index element={<Navigate to='/home' />} />

        <Route path='/home' element={<HomePage />} />
        <Route path='/home-video' element={<HomeVideoPage />} />
        <Route path='/home-particles' element={<HomeParticlePage />} />
        <Route path='/home-bgcolor' element={<HomeColorPage />} />
        <Route path='/blog' index element={<BlogPage />} />
        <Route path='/blog-post' element={<BlogPost />} />
        <Route path='/home-rtl' element={<HomeRtlPage />} />
        <Route path='/home-video-rtl' element={<HomeVideoRtlPage />} />
        <Route path='/home-particles-rtl' element={<HomeParticleRtlPage />} />
        <Route path='/home-bgcolor-rtl' element={<HomeColorRtlPage />} />
        <Route path='/blog-rtl' element={<BlogRtlPage />} />
        <Route path='/blog-post-rtl' element={<BlogRtlPost />} />
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </>
  );
}

export default App;
