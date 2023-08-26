'use client';

import Image from 'next/image'
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="w-screen h-screen flex items-start justify-around mt-20">
        <div className="flex flex-col items-center">
            <Image
              className="p-5"
              src="/icon.png"
              width={200}
              height={200}
              alt="Travelog map logo"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="
              />
            <h3>Welcome to Project Doula</h3>
            <small>Fast and reliable work estimations for freelancers.</small>
            <p>&copy;2023 Picop Trocs | WDPJ</p>
        </div>
        <SignIn />
    </main>
  )
}