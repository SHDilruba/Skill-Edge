import React from 'react'
// import ReactDOM from 'react-dom'
import { useLoaderData, useNavigate, Link} from 'react-router-dom';
import './CourseDetail.css';
// import '@progress/kendo-theme-material/dist/all.css';
import { PDFExport } from '@progress/kendo-react-pdf';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';

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
    <div className='course-detail container mt-5 mb-5 pb-5'>
           <div>
              <div className="title mb-4">
                 <h2> <small className='text-primary'>COURSE:</small> {name}</h2>
          <div className='button-area'>
                 <button onClick={handleExportWithComponent} className='btn btn-dark ms-5 text-light'> PDF</button>
          </div>
            </div>
               <img className='img-fluid' src={picture} alt="" /> <br /><br />
           </div>
           <PDFExport ref={pdfExportComponent} paperSize='A4'>
            <div id='premium-btn' ref = {contentArea}>
               <p className=' p-4 mx-5 fs-5 mb-5 mt-3'>{description}</p>
               <Button
                onClick={handleNavigate}  variant="primary" size="lg" active>
               Get Premium access
              </Button>
             </div>
       </PDFExport>
    </div>
  );
};

export default CourseDetail;