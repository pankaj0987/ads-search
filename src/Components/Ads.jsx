import React from 'react'

function Ads({adDetail}) {
  return (
    <div className="grid-item">
      <div className='header'>
        <h3>{adDetail.name}</h3>
        <span>{adDetail.primaryText}</span>
        <p style={{margin:"10px 0px",background:"red"}}>Headline : {adDetail.headLine}</p>
      </div>
     
      <a style={{width:"100%",height:"60%",margin:"20px 0px",display:"flex",alignItems:"center"}} href={`http://${adDetail.company.url}`} >
      <img src={`http://localhost:8000/public/${adDetail?.imageUrl}`} alt="" />
      </a>
      <div className='footer'>
      <p>{adDetail.description}  <a className="button" href={`http://${adDetail.company.url}`}>{adDetail.CTA}</a></p>
     
      </div>
      
    </div> 
  )
}

export default Ads