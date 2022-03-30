
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getMyPosts } from "../../../actions/post.actions"

const Timeline = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getMyPosts());
  }, []);
  const { posts } = useSelector((state) => {
    return state.postReducers;
});
  
  return (
    <div>	
	{/* top area */}
		
	<section>
		<div className="gap gray-bg">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-12">
						<div className="row" id="page-contents">
							<div className="col-lg-3">
								<aside className="sidebar static">
									<div className="widget">
										<h4 className="widget-title">Shortcuts</h4>
										<ul className="naves">
											<li>
												<i className="ti-clipboard"></i>
												<a href="newsfeed.html" title="">News feed</a>
											</li>
											<li>
												<i className="ti-mouse-alt"></i>
												<a href="inbox.html" title="">Inbox</a>
											</li>
											<li>
												<i className="ti-files"></i>
												<a href="fav-page.html" title="">My pages</a>
											</li>
											<li>
												<i className="ti-user"></i>
												<a href="timeline-friends.html" title="">friends</a>
											</li>
											<li>
												<i className="ti-image"></i>
												<a href="timeline-photos.html" title="">images</a>
											</li>
											<li>
												<i className="ti-video-camera"></i>
												<a href="timeline-videos.html" title="">videos</a>
											</li>
											<li>
												<i className="ti-comments-smiley"></i>
												<a href="messages.html" title="">Messages</a>
											</li>
											<li>
												<i className="ti-bell"></i>
												<a href="notifications.html" title="">Notifications</a>
											</li>
											<li>
												<i className="ti-share"></i>
												<a href="people-nearby.html" title="">People Nearby</a>
											</li>
											<li>
												<i className="fa fa-bar-chart-o"></i>
												<a href="insights.html" title="">insights</a>
											</li>
											<li>
												<i className="ti-power-off"></i>
												<a href="landing.html" title="">Logout</a>
											</li>
										</ul>
									</div>{/* Shortcuts */}
									<div className="widget">
										<h4 className="widget-title">Recent Activity</h4>
										<ul className="activitiez">
											<li>
												<div className="activity-meta">
													<i>10 hours Ago</i>
													<span><a href="#" title="">Commented on Video posted </a></span>
													<h6>by <a href="newsfeed.html">black demon.</a></h6>
												</div>
											</li>
											<li>
												<div className="activity-meta">
													<i>30 Days Ago</i>
													<span><a href="newsfeed.html" title="">Posted your status. “Hello guys, how are you?”</a></span>
												</div>
											</li>
											<li>
												<div className="activity-meta">
													<i>2 Years Ago</i>
													<span><a href="#" title="">Share a video on her timeline.</a></span>
													<h6>"<a href="newsfeed.html">you are so funny mr.been.</a>"</h6>
												</div>
											</li>
										</ul>
									</div>{/* recent activites */}
								</aside>
							</div>{/* sidebar */}
							<div className="col-lg-6">
								<div className="loadMore">
									<div className="central-meta item">
										<div className="new-postbox">
											<figure>
												<img src="images/resources/admin2.jpg" alt=""/>
											</figure>
											<div className="newpst-input">
												<form method="post">
													<textarea rows="2" placeholder="write something"></textarea>
													<div className="attachments">
														<ul>
															<li>
																<i className="fa fa-music"></i>
																<label className="fileContainer">
																	<input type="file"/>
																</label>
															</li>
															<li>
																<i className="fa fa-image"></i>
																<label className="fileContainer">
																	<input type="file"/>
																</label>
															</li>
															<li>
																<i className="fa fa-video-camera"></i>
																<label className="fileContainer">
																	<input type="file"/>
																</label>
															</li>
															<li>
																<i className="fa fa-camera"></i>
																<label className="fileContainer">
																	<input type="file"/>
																</label>
															</li>
															<li>
																<button type="submit">Publish</button>
															</li>
														</ul>
													</div>
												</form>
											</div>
										</div>
									</div>{/* add post new box */}
									<div className="loadMore">
                {posts.length > 0 && 
                    posts.map((post) => (
                      <div key={post._id} className="central-meta item">
									<div className="user-post">
										<div className="friend-info">
											<figure>
												<img src="images/resources/friend-avatar10.jpg" alt=""/>
											</figure>
											<div className="friend-name">
												<ins><a href="time-line.html" >{post.author?.firstName} {post.author?.lastName} </a></ins>
												<span> {post?.createdAt} </span>
											</div>
											<div className="post-meta">
												<img src={post?.image} alt=""/>
												<div className="we-video-info">
													<ul>
														<li>
															<span className="views" data-toggle="tooltip" title="views">
																<i className="fa fa-eye"></i>
																<ins>1.2k</ins>
															</span>
														</li>
														<li>
															<span className="comment" data-toggle="tooltip" title="Comments">
																<i className="fa fa-comments-o"></i>
																<ins>52</ins>
															</span>
														</li>
														<li>
															<span className="like" data-toggle="tooltip" title="like">
																<i className="ti-heart"></i>
																<ins>2.2k</ins>
															</span>
														</li>
														<li>
															<span className="dislike" data-toggle="tooltip" title="dislike">
																<i className="ti-heart-broken"></i>
																<ins>200</ins>
															</span>
														</li>
														<li className="social-media">
															<div className="menu">
															  <div className="btn trigger"><i className="fa fa-share-alt"></i></div>
															  <div className="rotater">
																<div className="btn btn-icon"><a href="#" title=""><i className="fa fa-html5"></i></a></div>
															  </div>
															  <div className="rotater">
																<div className="btn btn-icon"><a href="#" title=""><i className="fa fa-facebook"></i></a></div>
															  </div>
															  <div className="rotater">
																<div className="btn btn-icon"><a href="#" title=""><i className="fa fa-google-plus"></i></a></div>
															  </div>
															  <div className="rotater">
																<div className="btn btn-icon"><a href="#" title=""><i className="fa fa-twitter"></i></a></div>
															  </div>
															  <div className="rotater">
																<div className="btn btn-icon"><a href="#" title=""><i className="fa fa-css3"></i></a></div>
															  </div>
															  <div className="rotater">
																<div className="btn btn-icon"><a href="#" title=""><i className="fa fa-instagram"></i></a>
																</div>
															  </div>
																<div className="rotater">
																<div className="btn btn-icon"><a href="#" title=""><i className="fa fa-dribbble"></i></a>
																</div>
															  </div>
															  <div className="rotater">
																<div className="btn btn-icon"><a href="#" title=""><i className="fa fa-pinterest"></i></a>
																</div>
															  </div>

															</div>
														</li>
													</ul>
												</div>
												<div className="description">
													
													<p>
														{post.content}
													</p>
												</div>
											</div>
										</div>
										<div className="coment-area">
											<ul className="we-comet">
												<li>
													<div className="comet-avatar">
														<img src="images/resources/comet-1.jpg" alt=""/>
													</div>
													<div className="we-comment">
														<div className="coment-head">
															<h5><a href="time-line.html" title="">Jason borne</a></h5>
															<span>1 year ago</span>
															<a className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></a>
														</div>
														<p>we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post</p>
													</div>
													<ul>
														<li>
															<div className="comet-avatar">
																<img src="images/resources/comet-2.jpg" alt=""/>
															</div>
															<div className="we-comment">
																<div className="coment-head">
																	<h5><a href="time-line.html" title="">alexendra dadrio</a></h5>
																	<span>1 month ago</span>
																	<a className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></a>
																</div>
																<p>yes, really very awesome car i see the features of this car in the official website of <a href="#" title="">#Mercedes-Benz</a> and really impressed :-)</p>
															</div>
														</li>
														<li>
															<div className="comet-avatar">
																<img src="images/resources/comet-3.jpg" alt=""/>
															</div>
															<div className="we-comment">
																<div className="coment-head">
																	<h5><a href="time-line.html" title="">Olivia</a></h5>
																	<span>16 days ago</span>
																	<a className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></a>
																</div>
																<p>i like lexus cars, lexus cars are most beautiful with the awesome features, but this car is really outstanding than lexus</p>
															</div>
														</li>
													</ul>
												</li>
												<li>
													<div className="comet-avatar">
														<img src="images/resources/comet-1.jpg" alt=""/>
													</div>
													<div className="we-comment">
														<div className="coment-head">
															<h5><a href="time-line.html" title="">Donald Trump</a></h5>
															<span>1 week ago</span>
															<a className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></a>
														</div>
														<p>we are working for the dance and sing songs. this video is very awesome for the youngster. please vote this video and like our channel
															<i className="em em-smiley"></i>
														</p>
													</div>
												</li>
												<li>
													<a href="#" title="" className="showmore underline">more comments</a>
												</li>
												<li className="post-comment">
													<div className="comet-avatar">
														<img src="images/resources/comet-1.jpg" alt=""/>
													</div>
													<div className="post-comt-box">
														<form method="post">
															<textarea placeholder="Post your comment"></textarea>
															<div className="add-smiles">
																<span className="em em-expressionless" title="add icon"></span>
															</div>
															<div className="smiles-bunch">
																<i className="em em---1"></i>
																<i className="em em-smiley"></i>
																<i className="em em-anguished"></i>
																<i className="em em-laughing"></i>
																<i className="em em-angry"></i>
																<i className="em em-astonished"></i>
																<i className="em em-blush"></i>
																<i className="em em-disappointed"></i>
																<i className="em em-worried"></i>
																<i className="em em-kissing_heart"></i>
																<i className="em em-rage"></i>
																<i className="em em-stuck_out_tongue"></i>
															</div>
															<button type="submit"></button>
														</form>	
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
                    ))}
								</div>
								</div>
							</div>{/* centerl meta */}
							<div className="col-lg-3">
								<aside className="sidebar static">
									
									<div className="widget friend-list stick-widget">
										<h4 className="widget-title">Friends</h4>
										<div id="searchDir"></div>
										<ul id="people-list" className="friendz-list">
											<li>
												<figure>
													<img src="images/resources/friend-avatar.jpg" alt=""/>
													<span className="status f-online"></span>
												</figure>
												<div className="friendz-meta">
													<a href="time-line.html">bucky barnes</a>
													<i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="4136282f352433322e2d25243301262c20282d6f222e2c">[email&#160;protected]</a></i>
												</div>
											</li>
											<li>
												<figure>
													<img src="images/resources/friend-avatar2.jpg" alt=""/>
													<span className="status f-away"></span>
												</figure>
												<div className="friendz-meta">
													<a href="time-line.html">Sarah Loren</a>
													<i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="3a585b48545f497a5d575b535614595557">[email&#160;protected]</a></i>
												</div>
											</li>
											<li>
												<figure>
													<img src="images/resources/friend-avatar3.jpg" alt=""/>
													<span className="status f-off"></span>
												</figure>
												<div className="friendz-meta">
													<a href="time-line.html">jason borne</a>
													<i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="127873617d7c7052757f737b7e3c717d7f">[email&#160;protected]</a></i>
												</div>
											</li>
											<li>
												<figure>
													<img src="images/resources/friend-avatar4.jpg" alt=""/>
													<span className="status f-off"></span>
												</figure>
												<div className="friendz-meta">
													<a href="time-line.html">Cameron diaz</a>
													<i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="620803110d0c0022050f030b0e4c010d0f">[email&#160;protected]</a></i>
												</div>
											</li>
											<li>
												
												<figure>
													<img src="images/resources/friend-avatar5.jpg" alt=""/>
													<span className="status f-online"></span>
												</figure>
												<div className="friendz-meta">
													<a href="time-line.html">daniel warber</a>
													<i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="0963687a66676b496e64686065276a6664">[email&#160;protected]</a></i>
												</div>
											</li>
											<li>
												
												<figure>
													<img src="images/resources/friend-avatar6.jpg" alt=""/>
													<span className="status f-away"></span>
												</figure>
												<div className="friendz-meta">
													<a href="time-line.html">andrew</a>
													<i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="5b313a283435391b3c363a323775383436">[email&#160;protected]</a></i>
												</div>
											</li>
											<li>
												
												<figure>
													<img src="images/resources/friend-avatar7.jpg" alt=""/>
													<span className="status f-off"></span>
												</figure>
												<div className="friendz-meta">
													<a href="time-line.html">amy watson</a>
													<i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="472d263428292507202a262e2b6924282a">[email&#160;protected]</a></i>
												</div>
											</li>
											<li>
												
												<figure>
													<img src="images/resources/friend-avatar5.jpg" alt=""/>
													<span className="status f-online"></span>
												</figure>
												<div className="friendz-meta">
													<a href="time-line.html">daniel warber</a>
													<i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="7a101b091514183a1d171b131654191517">[email&#160;protected]</a></i>
												</div>
											</li>
											<li>
												
												<figure>
													<img src="images/resources/friend-avatar2.jpg" alt=""/>
													<span className="status f-away"></span>
												</figure>
												<div className="friendz-meta">
													<a href="time-line.html">Sarah Loren</a>
													<i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="7c1e1d0e12190f3c1b111d1510521f1311">[email&#160;protected]</a></i>
												</div>
											</li>
										</ul>
										<div className="chat-box">
											<div className="chat-head">
												<span className="status f-online"></span>
												<h6>Bucky Barnes</h6>
												<div className="more">
													<span><i className="ti-more-alt"></i></span>
													<span className="close-mesage"><i className="ti-close"></i></span>
												</div>
											</div>
											<div className="chat-list">
												<ul>
													<li className="me">
														<div className="chat-thumb"><img src="images/resources/chatlist1.jpg" alt=""/></div>
														<div className="notification-event">
															<span className="chat-message-item">
																Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
															</span>
															<span className="notification-date"><time datetime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time></span>
														</div>
													</li>
													<li className="you">
														<div className="chat-thumb"><img src="images/resources/chatlist2.jpg" alt=""/></div>
														<div className="notification-event">
															<span className="chat-message-item">
																Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
															</span>
															<span className="notification-date"><time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time></span>
														</div>
													</li>
													<li className="me">
														<div className="chat-thumb"><img src="images/resources/chatlist1.jpg" alt=""/></div>
														<div className="notification-event">
															<span className="chat-message-item">
																Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
															</span>
															<span className="notification-date"><time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time></span>
														</div>
													</li>
												</ul>
												<form className="text-box">
													<textarea placeholder="Post enter to post..."></textarea>
													<div className="add-smiles">
														<span title="add icon" className="em em-expressionless"></span>
													</div>
													<div className="smiles-bunch">
														<i className="em em---1"></i>
														<i className="em em-smiley"></i>
														<i className="em em-anguished"></i>
														<i className="em em-laughing"></i>
														<i className="em em-angry"></i>
														<i className="em em-astonished"></i>
														<i className="em em-blush"></i>
														<i className="em em-disappointed"></i>
														<i className="em em-worried"></i>
														<i className="em em-kissing_heart"></i>
														<i className="em em-rage"></i>
														<i className="em em-stuck_out_tongue"></i>
													</div>
													<button type="submit"></button>
												</form>
											</div>
										</div>
									</div>{/* friends list sidebar */}
								</aside>
							</div>{/* sidebar */}
						</div>	
					</div>
				</div>
			</div>
		</div>	
	</section>
    </div>
  )
}

export default Timeline