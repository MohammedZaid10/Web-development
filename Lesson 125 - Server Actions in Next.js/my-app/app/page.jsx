"use client"
import { useRef } from "react";
import { submitAction } from "@/actions/form";

export default function Home() {
  let ref = useRef()
  return (
    <div className="w-2/3 mx-auto my-12">
      <form ref={ref} action={(e) => { submitAction(e); ref.current.reset()}}>
        <div><label htmlFor="name">Name</label> <input name="name" id="name" className="text-white mx-4 border border-white px-3 m-2" type="text" /></div>
        <div><label htmlFor="add">Address</label> <input name="add" id="add" className="text-white mx-4 border border-white px-3 m-2" type="text" /></div>
        <div><button className="border border-white px-3 m-2">Submit</button></div>
      </form>
    </div>
  );
}