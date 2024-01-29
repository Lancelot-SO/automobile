import React from 'react'
import Slider from '../../components/common/Slider'
import {Container, Button} from 'reactstrap'


function Row3() {
  return (
   <>
   <div className="mb-4" style={{backgroundColor: "#faf8fb"}}>
   <Container>
   <div>
      <h5 className="text-start mt-5" style={{color: '#00d084'}}>Similar Car</h5>
      <h2 className="text-start fw-bolder" >Similar Car From This Brand</h2>
    </div>
   <Slider />
   <div className='text-center mt-5'>
    <p>There will be 100+ Similar Car <Button style={{backgroundColor: '#00d084', border: 'none', width: "max-content"}} className='p-2 mx-2 '>View More</Button></p>
   </div>
   </Container>
   </div>
  
   
   </>
  )
}

export default Row3