import React, { useEffect } from "react";
import { Link, Navigate, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TimeLine from "./Timeline"
import About from "./About"
import { getMyProfile } from "../../actions/profile.actions";

const Profile = () => {
	const { isAuthenticated } = useSelector((state) => {
    return state.authReducers;
  });
	const dispatch = useDispatch();
	useEffect(() => {
    if (isAuthenticated) {
      dispatch(getMyProfile());
    }
  }, [isAuthenticated]);
  const { profile } = useSelector((state) => {
    return state.profileReducers;
  });

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
	

  return (
    <div>
      <section>
		<div className="feature-photo">
			<figure><img src="images/resources/timeline-1.jpg" alt=""/></figure>
			<div className="add-btn">
				<span>1205 followers</span>
				<a href="#" title="" data-ripple="">Add Friend</a>
			</div>
			<form className="edit-phto">
				<i className="fa fa-camera-retro"></i>
				<label className="fileContainer">
					Edit Cover Photo
				<input type="file"/>
				</label>
			</form>
			<div className="container-fluid">
				<div className="row merged">
					<div className="col-lg-2 col-sm-3">
						<div className="user-avatar">
							<figure>
								<img src="images/resources/user-avatar.jpg" alt=""/>
								<form className="edit-phto">
									<i className="fa fa-camera-retro"></i>
									<label className="fileContainer">
										Edit Display Photo
										<input type="file"/>
									</label>
								</form>
							</figure>
						</div>
					</div>
					<div className="col-lg-10 col-sm-9">
						<div className="timeline-info">
							<ul>
								<li className="admin-name">
								  <h5>Janice Griffith</h5>
								  <span>Group Admin</span>
								</li>
								<li>
									<Link className="active" to={"/profile"} title="" data-ripple="">time line</Link>
									<Link className="" to="timeline-photos.html" title="" data-ripple="">Photos</Link>
									<Link className="" to="timeline-videos.html" title="" data-ripple="">Videos</Link>
									<Link className="" to="timeline-friends.html" title="" data-ripple="">Friends</Link>
									<Link className="" to="timeline-groups.html" title="" data-ripple="">Groups</Link>
									<Link className="" to={"/profile/about"} title="" data-ripple="">about</Link>
									<Link className="" to="#" title="" data-ripple="">more</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  <Routes>

			<Route path="/" element={<TimeLine/>}></Route>
			<Route path="/about" element={<About/>} ></Route>

  </Routes>
    </div>
  )
}

export default Profile