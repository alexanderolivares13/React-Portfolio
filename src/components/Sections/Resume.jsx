import resumePDF from "../../assets/Alexander-Olivares-resume.pdf";

const Resume = () => {
  return (
    <div className='resume-container'>
      <iframe
        src={resumePDF}
        type='application/pdf'
        width='100%'
        height='1000px'
        name='Alexander-Olivares-Resume'
      />
    </div>
  );
};

export default Resume;
