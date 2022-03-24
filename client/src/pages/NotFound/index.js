import React from 'react'
import { Link, Navigate } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <div class="theme-layout">
	<div class="container-fluid pdng0">
		<div class="row">
			<div class="col-lg-12">
				<div class="error-page">
					<div class="bg-image" ></div>
					<div class="error-meta">
						<h1>whoops!</h1>
						<span>we couldn't find that page </span>
						<Link to={"/"} >Go Back</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    </div>
  )
}

export default NotFound