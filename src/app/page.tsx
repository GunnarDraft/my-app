"use client"
import { Exo } from 'next/font/google'
import { useState } from "react";
import { Main } from "@/styles/index"
import NavBar from '@/components/NavBar';
import MainContent from '@/components/MainContent';
import SecondContent from '@/components/SecondContent';
import Footer from '@/components/Footer';

const exo = Exo({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  const [video, setVideo] = useState<string>('https://www.youtube.com/embed/Ay5vD9xRsuI?si=V3vm_M8zkk8ZSnUR')
  return (
    <Main className={exo.className} >
      <NavBar />
      <MainContent video={video} />
      <SecondContent setVideo={setVideo} />
      <Footer />
    </Main>
  );
}
