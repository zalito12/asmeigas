'use client';

import { Rotate3D, Shirt } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Gear() {
const [isRotated, setRotated] = useState(false);

    return (
      <div className="grid border-2 border-background bg-card">
        <div className="col-start-1 row-start-1">
          <Image src={'/camiseta_back.jpg'} width={300} height={0} alt="" />
        </div>
        {!isRotated && (
          <div className="col-start-1 row-start-1">
            <Image src={'/camiseta_front.jpg'} width={300} height={0} alt="" />
          </div>
        )}
        <div className="col-start-1 row-start-1 text-slate-950 flex flex-row p-2 justify-end items-start">
          <button
            className="bg-muted text-muted-foreground p-2 rounded"
            onClick={() => setRotated(!isRotated)}
          >
            <Rotate3D className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-row gap-2">
          <button className="p-2">
            <Shirt className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
}