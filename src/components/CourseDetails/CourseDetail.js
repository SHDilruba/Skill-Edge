import React from 'react'
// import ReactDOM from 'react-dom'
import { useLoaderData, useNavigate, Link} from 'react-router-dom';
import './CourseDetail.css';
// import '@progress/kendo-theme-material/dist/all.css';
import { PDFExport } from '@progress/kendo-react-pdf';
import { useRef } from 'react';

const CourseDetail = () => {
  
const detail = useLoaderData();
const { id, name, description, picture} = detail;

const navigate = useNavigate(); 
const handleNavigate = () =>{
  navigate(`/detail/${id}`);
}

const pdfExportComponent = useRef
  (null);
  const contentArea = useRef(null);

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  return (
    <div className='course-detail container mt-5'>
           <div>
              <div className="title d-flex justify-content-center">
                 <h1> <small className='text-dark'>COURSE:</small> {name}</h1>
          <div className='button-area'>
                 <button onClick={handleExportWithComponent} className='btn btn-dark ms-5 text-light'> PDF</button>
          </div>
            </div>
               <img className='img-fluid w-75 mt-5' src={picture} alt="" /> <br /><br />
           </div>
           <PDFExport ref={pdfExportComponent} paperSize='A4'>
            <div ref = {contentArea}>
               <p className=' p-4 mx-5 fs-5'>{description}</p>
             <button onClick={handleNavigate} className='btn btn-primary w-25 mt-4 px-3 py-2 fs-5'> Get Premium access</button>
             </div>
       </PDFExport>
    </div>
  );
};

export default CourseDetail;