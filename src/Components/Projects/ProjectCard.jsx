import React from 'react';
import portfolio from "../../Images/portfolio.png";
import alternate from "../../Images/alternate.jpg";

const ProjectCard = (props) => {
  return (
    <div key={props.details.id} className="relative flex flex-col my-6 bg-white shadow-sm border rounded-lg h-full w-full">
      <div className="relative h-full m-2 overflow-hidden rounded-md">
        <img src={props.details.id == 1 ? portfolio : alternate} alt="portfolio-image" />
      </div>
      <div className="p-4 h-full">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
          {props.details.projectName}
        </h6>
        <ul className="mt-3 px-5 list-outside list-disc text-zinc-600 text-justify">
          {
            props.details.description?.map((item, index) => <li key={index}>
              {item}
            </li>)
          }
        </ul>
      </div>
      <div className="px-4 flex justify-between items-center pb-4 pt-0 ">
        <h6>Tech Used: <span>{props.details.techUsed}</span></h6>
        <div className='flex flex-row-reverse  gap-5'>
          <button className="rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none " type="button" onClick={() => { window.open(props.details.liveLink, "_blank"); }}>
            GitHub
          </button>
          <button className="rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" onClick={() => { window.open(props.details.liveLink, "_blank"); }}>
            Live
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;