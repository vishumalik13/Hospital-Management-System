import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className="banner">
         <img src={imageUrl} alt=''/>
        </div> 
      <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolorum inventore explicabo rem repudiandae quo at temporibus earum ratione tempora. Nemo ullam voluptates eos repellendus magnam tempora nobis eligendi tempore reiciendis saepe, ea ipsum mollitia praesentium quod minima pariatur rerum explicabo. Quo nemo suscipit dolor vitae ipsam explicabo quisquam dolore.</p>  
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>   
          <p>Lorem ipsum dolor sit amet. </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus minus amet ex quo, culpa ab voluptatibus, distinctio ut eius repudiandae corporis quaerat quam aliquid nulla laudantium magni hic voluptate rerum dolores odio quod ea omnis.</p>
            
        </div>   
    </div>
  )
}

export default Biography
