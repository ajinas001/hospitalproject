import React from 'react'
import { Navigate } from 'react-router-dom';

export default function TopBar() {

	const role = localStorage.getItem('role')
	const handlelogout = () => {
		localStorage.clear();
	
	}
  return (
	<>
	{role == 0 ?
	<div class="py-1 bg-primary top">
	<div class="container">
		<div class="row no-gutters d-flex align-items-start align-items-center px-md-0">
			<div class="col-lg-12 d-block">
				<div class="row d-flex">
					<div class="col-md pr-4 d-flex topper align-items-center">
						<div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-phone2"></span></div>
						<span class="text">+ 1235 2355 98</span>
					</div>
					<div class="col-md pr-4 d-flex topper align-items-center">
						<div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-paper-plane"></span></div>
						<span class="text">mmhospitalkannur@gmail.com</span>
					</div>
					<div class="col-md-5 pr-4 d-flex topper align-items-center text-lg-right justify-content-end">
						<p class="mb-0 register-link"><a href="/register" class="mr-3">Register</a><a href="/">Sign in</a> <a className='ml-5' href="/hospitalregister">Hospital Register</a><a className='ml-5' href='/' onClick={handlelogout}>logout</a></p>
					</div>
				</div>
			</div>
		</div>
	  </div>
</div>
:
	role == 1 ? 
    	<div class="py-1 bg-primary top">
    	<div class="container">
    		<div class="row no-gutters d-flex align-items-start align-items-center px-md-0">
	    		<div class="col-lg-12 d-block">
		    		<div class="row d-flex">
		    			<div class="col-md pr-4 d-flex topper align-items-center">
					    	<div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-phone2"></span></div>
						    <span class="text">+ 1235 2355 98</span>
					    </div>
					    <div class="col-md pr-4 d-flex topper align-items-center">
					    	<div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-paper-plane"></span></div>
						    <span class="text">mmhospitalkannur@gmail.com</span>
					    </div>
					    <div class="col-md-5 pr-4 d-flex topper align-items-center text-lg-right justify-content-end">
						    <p class="mb-0 register-link"><a href="/register" class="mr-3">Register</a><a href="/">Sign in</a> <a className='ml-5' href="/hospitalregister">Hospital Register</a><a className='ml-5' href='/' onClick={handlelogout}>logout</a></p>
					    </div>
				    </div>
			    </div>
		    </div>
		  </div>
    </div>
	:
	
	role == 2 ?
	<div class="py-1 bg-primary top">
    	<div class="container">
    		<div class="row no-gutters d-flex align-items-start align-items-center px-md-0">
	    		<div class="col-lg-12 d-block">
		    		<div class="row d-flex">
		    			<div class="col-md pr-4 d-flex topper align-items-center">
					    	<div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-phone2"></span></div>
						    <span class="text">+ 1235 2355 98</span>
					    </div>
					    <div class="col-md pr-4 d-flex topper align-items-center">
					    	<div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-paper-plane"></span></div>
						    <span class="text">mmhospitalkannur@gmail.com</span>
					    </div>
					    <div class="col-md-5 pr-4 d-flex topper align-items-center text-lg-right justify-content-end">
						    <p class="mb-0 register-link"> <a className='ml-5' href="/adddoctor">Add doctor</a> <a className='ml-5' href='/'  onClick={handlelogout}>logout</a></p>
					    </div>
				    </div>
			    </div>
		    </div>
		  </div>
    </div>
	:
	<div class="py-1 bg-primary top">
    	<div class="container">
    		<div class="row no-gutters d-flex align-items-start align-items-center px-md-0">
	    		<div class="col-lg-12 d-block">
		    		<div class="row d-flex">
		    			<div class="col-md pr-4 d-flex topper align-items-center">
					    	<div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-phone2"></span></div>
						    <span class="text">+ 1235 2355 98</span>
					    </div>
					    <div class="col-md pr-4 d-flex topper align-items-center">
					    	<div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-paper-plane"></span></div>
						    <span class="text">mmhospitalkannur@gmail.com</span>
					    </div>
					    <div class="col-md-5 pr-4 d-flex topper align-items-center text-lg-right justify-content-end">
						    <p class="mb-0 register-link"><a href="/register" class="mr-3">Register</a><a href="/">Sign in</a> <a className='ml-5' href="/hospitalregister">Hospital Register</a> </p>
					    </div>
				    </div>
			    </div>
		    </div>
		  </div>
    </div>
	}
	</>
  )
}
