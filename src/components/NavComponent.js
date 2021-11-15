import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../res/images/logo.png'

export default function NavComponent() {
    return (
      <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
      <div class="flex-1 px-2 mx-2">
        <Link to="">
        <span class="text-lg font-bold">
                <img src={logo} width="150" height="150" />
              </span>
        </Link>
      </div> 
      <div class="flex-none hidden px-2 mx-2 lg:flex">
        <div class="flex items-stretch">
          <Link to ="" class="btn btn-ghost btn-sm rounded-btn">
           
                  Hot Deals 
                
          </Link> 
          <a class="btn btn-ghost btn-sm rounded-btn">
            
                  Housing
                
          </a> 
          <a class="btn btn-ghost btn-sm rounded-btn">
            
                  Estates
                
          </a> 
          <a class="btn btn-ghost btn-sm rounded-btn">
           
                  News
                
          </a>

          <a class="btn btn-success btn-sm rounded-btn ml-3 " btn-sm rounded-btn>
            Contact Us
          </a>
          <a class="btn btn-primary btn-sm rounded-btn ml-3"> About us </a>

        </div>
      </div> 
      <div class="flex-none">
        <button class="btn btn-square btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">           
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>               
          </svg>
        </button>
      </div>
    </div>
    );
}
