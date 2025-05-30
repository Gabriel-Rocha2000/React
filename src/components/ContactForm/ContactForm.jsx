import { useState, useEffect } from 'react'
import './ContactForm.css'

//COMPONENTS//
import  Button  from '../Button/Button'

function ContactForm() {
  return (
    
        <div className='container'>
            <div className='contact-form d-flex fd-column al-center'>
            <h2>
            We love meeting new people and helping them.          
            </h2>
           <form>
            <div className='d-flex form-group' >
              <input
              className='form-input'
              type='text'
              id='name'
              name='name'
              placeholder='Name *'
              />
              <input 
              className='form-input'
              type='email'
              id='email'
              name='email'
              placeholder='Email *'              
              />
              
              
            </div>
            <div className='d-flex form-group'>
              <textarea 
              className='form-input'
              id='message'
              name='message'
              placeholder='Olá, tenho interesse em saber mais... *'
              rows='4'
              ></textarea>
            </div>
            <div className='al-center d-flex jc-end form-group'>
              <Button type='submit' buttonStyle='secondary'>
                  Enviar
                 </Button>
            </div>
           </form>
            </div>
                   
        </div>
    
  )
}

export default ContactForm