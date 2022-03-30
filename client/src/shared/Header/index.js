import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png"

const Header
 = () => {
  return (
    <div>
      <div className="topbar stick">
		<div className="logo">
			<Link title="" to={"/"}><img src={logo} alt=""/></Link>
		</div>
		
		<div className="top-area">
			<ul className="main-menu">
				<li>
					<Link to={"/"} title="">Home</Link>
				</li>
				<li>
					<Link to={"/profile"} title="">timeline</Link>
				</li>
				<li>
					<a href="#" title="">account settings</a>
					<ul>
						<li><a href="create-fav-page.html" title="">create fav page</a></li>
						<li><a href="edit-account-setting.html" title="">edit account setting</a></li>
						<li><a href="edit-interest.html" title="">edit-interest</a></li>
						<li><a href="edit-password.html" title="">edit-password</a></li>
						<li><a href="edit-profile-basic.html" title="">edit profile basics</a></li>
						<li><a href="edit-work-eductation.html" title="">edit work educations</a></li>
						<li><a href="messages.html" title="">message box</a></li>
						<li><a href="inbox.html" title="">Inbox</a></li>
						<li><a href="notifications.html" title="">notifications page</a></li>
					</ul>
				</li>
				<li>
					<a href="#" title="">more pages</a>
					<ul>
						<li><a href="404.html" title="">404 error page</a></li>
						<li><a href="about.html" title="">about</a></li>
						<li><a href="contact.html" title="">contact</a></li>
						<li><a href="faq.html" title="">faq's page</a></li>
						<li><a href="insights.html" title="">insights</a></li>
						<li><a href="knowledge-base.html" title="">knowledge base</a></li>
						<li><a href="widgets.html" title="">Widgts</a></li>
					</ul>
				</li>
			</ul>
			<ul className="setting-area">
				<li>
					<a href="#" title="Home" data-ripple=""><i className="ti-search"></i></a>
					<div className="searched">
						<form method="post" className="form-search">
							<input type="text" placeholder="Search Friend"/>
							<button data-ripple><i className="ti-search"></i></button>
						</form>
					</div>
				</li>
				<li><a href="newsfeed.html" title="Home" data-ripple=""><i className="ti-home"></i></a></li>
				<li>
					<a href="#" title="Notification" data-ripple="">
						<i className="ti-bell"></i><span>20</span>
					</a>
					<div className="dropdowns">
						<span>4 New Notifications</span>
						<ul className="drops-menu">
							<li>
								<a href="notifications.html" title="">
									<img src="images/resources/thumb-1.jpg" alt=""/>
									<div className="mesg-meta">
										<h6>sarah Loren</h6>
										<span>Hi, how r u dear ...?</span>
										<i>2 min ago</i>
									</div>
								</a>
								<span className="tag green">New</span>
							</li>
							<li>
								<a href="notifications.html" title="">
									<img src="images/resources/thumb-2.jpg" alt=""/>
									<div className="mesg-meta">
										<h6>Jhon doe</h6>
										<span>Hi, how r u dear ...?</span>
										<i>2 min ago</i>
									</div>
								</a>
								<span className="tag red">Reply</span>
							</li>
							<li>
								<a href="notifications.html" title="">
									<img src="images/resources/thumb-3.jpg" alt=""/>
									<div className="mesg-meta">
										<h6>Andrew</h6>
										<span>Hi, how r u dear ...?</span>
										<i>2 min ago</i>
									</div>
								</a>
								<span className="tag blue">Unseen</span>
							</li>
							<li>
								<a href="notifications.html" title="">
									<img src="images/resources/thumb-4.jpg" alt=""/>
									<div className="mesg-meta">
										<h6>Tom cruse</h6>
										<span>Hi, how r u dear ...?</span>
										<i>2 min ago</i>
									</div>
								</a>
								<span className="tag">New</span>
							</li>
							<li>
								<a href="notifications.html" title="">
									<img src="images/resources/thumb-5.jpg" alt=""/>
									<div className="mesg-meta">
										<h6>Amy</h6>
										<span>Hi, how r u dear ...?</span>
										<i>2 min ago</i>
									</div>
								</a>
								<span className="tag">New</span>
							</li>
						</ul>
						<a href="notifications.html" title="" className="more-mesg">view more</a>
					</div>
				</li>
				<li>
					<a href="#" title="Messages" data-ripple=""><i className="ti-comment"></i><span>12</span></a>
					<div className="dropdowns">
						<span>5 New Messages</span>
						<ul className="drops-menu">
							<li>
								<a href="notifications.html" title="">
									<img src="images/resources/thumb-1.jpg" alt=""/>
									<div className="mesg-meta">
										<h6>sarah Loren</h6>
										<span>Hi, how r u dear ...?</span>
										<i>2 min ago</i>
									</div>
								</a>
								<span className="tag green">New</span>
							</li>
							<li>
								<a href="notifications.html" title="">
									<img src="images/resources/thumb-2.jpg" alt=""/>
									<div className="mesg-meta">
										<h6>Jhon doe</h6>
										<span>Hi, how r u dear ...?</span>
										<i>2 min ago</i>
									</div>
								</a>
								<span className="tag red">Reply</span>
							</li>
							<li>
								<a href="notifications.html" title="">
									<img src="images/resources/thumb-3.jpg" alt=""/>
									<div className="mesg-meta">
										<h6>Andrew</h6>
										<span>Hi, how r u dear ...?</span>
										<i>2 min ago</i>
									</div>
								</a>
								<span className="tag blue">Unseen</span>
							</li>
							<li>
								<a href="notifications.html" title="">
									<img src="images/resources/thumb-4.jpg" alt=""/>
									<div className="mesg-meta">
										<h6>Tom cruse</h6>
										<span>Hi, how r u dear ...?</span>
										<i>2 min ago</i>
									</div>
								</a>
								<span className="tag">New</span>
							</li>
							<li>
								<a href="notifications.html" title="">
									<img src="images/resources/thumb-5.jpg" alt=""/>
									<div className="mesg-meta">
										<h6>Amy</h6>
										<span>Hi, how r u dear ...?</span>
										<i>2 min ago</i>
									</div>
								</a>
								<span className="tag">New</span>
							</li>
						</ul>
						<a href="messages.html" title="" className="more-mesg">view more</a>
					</div>
				</li>
				<li><a href="#" title="Languages" data-ripple=""><i className="fa fa-globe"></i></a>
					<div className="dropdowns languages">
						<a href="#" title=""><i className="ti-check"></i>English</a>
						<a href="#" title="">Arabic</a>
						<a href="#" title="">Dutch</a>
						<a href="#" title="">French</a>
					</div>
				</li>
			</ul>
			<div className="user-img">
				<img src="images/resources/admin.jpg" alt=""/>
				<span className="status f-online"></span>
				<div className="user-setting">
					<a href="#" title=""><span className="status f-online"></span>online</a>
					<a href="#" title=""><span className="status f-away"></span>away</a>
					<a href="#" title=""><span className="status f-off"></span>offline</a>
					<a href="#" title=""><i className="ti-user"></i> view profile</a>
					<a href="#" title=""><i className="ti-pencil-alt"></i>edit profile</a>
					<a href="#" title=""><i className="ti-target"></i>activity log</a>
					<a href="#" title=""><i className="ti-settings"></i>account setting</a>
					<a href="#" title=""><i className="ti-power-off"></i>log out</a>
				</div>
			</div>
			<span className="ti-menu main-menu" data-ripple=""></span>
		</div>
	</div>
    </div>
  )
}

export default Header
