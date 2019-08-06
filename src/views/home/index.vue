<template>
  <div>
    <!-- <appNav></appNav>
    <Row class="home">
      <Col :xs="24" :sm="4" :md="4" class="home-wall-left">
      <Form ref="formInline" style="padding: 50px 30px;">
        <Row><span class="txt-lead">Accounts</span></Row>
        <br/>
        <FormItem>
            <Switch :loading="fb" @on-change="fb = true" size="large" :style="{'width': '100px'}">
              <span slot="open">Facebook</span>
              <span slot="close">Facebook</span>
            </Switch>
        </FormItem>
        <FormItem>
            <Switch :loading="tw" @on-change="tw = true" size="large" :style="{'width': '100px'}">
              <span slot="open">Twitter</span>
              <span slot="close">Twitter</span>
            </Switch>
        </FormItem>
        <FormItem>
            <Switch :loading="lk" @on-change="lk = true" size="large" :style="{'width': '100px'}">
              <span slot="open">Linkedin</span>
              <span slot="close">Linkedin</span>
            </Switch>
        </FormItem>
        <FormItem>
            <Switch :loading="pi" @on-change="pi = true" size="large" :style="{'width': '100px'}">
              <span slot="open">Pinterest</span>
              <span slot="close">Pinterest</span>
            </Switch>
        </FormItem>
        <FormItem>
            <Switch :loading="yt" @on-change="yt = true" size="large" :style="{'width': '100px'}">
              <span slot="open">Youtube</span>
              <span slot="close">Youtube</span>
            </Switch>
        </FormItem>
        <FormItem>
            <Switch :loading="ig" @on-change="ig = true" size="large" :style="{'width': '100px'}">
              <span slot="open">Instagram</span>
              <span slot="close">Instagram</span>
            </Switch>
        </FormItem>
        <FormItem>
            <Switch :loading="bl" @on-change="bl = true" size="large" :style="{'width': '100px'}">
              <span slot="open">Blogger</span>
              <span slot="close">Blogger</span>
            </Switch>
        </FormItem>
    </Form>
     <Button @click="ld('Adding Account')" style="position:absolute; bottom: 20px; margin-left:150px;" type="primary" shape="circle" icon="ios-add"></Button>
      </Col>
      <Col style="padding:50px;" :xs="24" :sm="14" :md="14">
      <Row><span class="txt-lead">News Feed</span></Row>
      <Row type="flex" align="middle" justify="center" style="height:50vh; text-align:center;">
        <Col :xs="24" :sm="12" :md="12">
        <Row>
        <p>Your News Feed shows here,
          Add Multiple Accounts to be able to edit and manage your feed here
        </p>
        </Row>
        <Row style="margin-top:10px;">
          <Icon style="font-size:3em;" type="ios-basket-outline" />
        </Row>
        </Col>
      </Row>
      </Col>
      <Col :xs="24" :sm="6" :md="6" style="padding:50px;" class="home-wall-right">
      <Row type="flex" align="middle" justify="center" style="min-height:50vh; text-align:left;">
        <Col :xs="24" :sm="24" :md="24">
          <Row><span class="txt-lead" style="margin-left:-10px;">Account Sumary</span></Row>
          <br/>
<ul>
<li>{{user.name}}</li>
<li>Lives in: Tuscon, AZ</li>
<li>Born in: Tuscon, AZ</li>
<li>Birth date: April 7th</li>
<li>Member Since: September 2017</li>
<li>Lorem ipsum: dolor sit amet</li>
<li>Rusto facete: possim at</li>
<li>Friends: 227</li>
<li>Unarchived: 24 feeds</li>
<li>Family: 124</li>
</ul>
        </Col>
      </Row>
      </Col>
    </Row> -->

    <div class="container">
			<header>
				<nav class="navbar navbar-inverse">
					<div class="container-fluid">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
							<a class="navbar-brand" href="#"><img src="/src/images/logo.png" alt="Logo"/></a>
						</div>
						<div class="collapse navbar-collapse" id="myNavbar">
							<ul class="nav navbar-nav name">
								<li>
									Welcome, {{user.name}}!
								</li>
								<li>
								Last Login {{user.lastlog}}
								</li>
							</ul>
							<ul class="nav navbar-nav navbar-right">

								<li>
									<a href="#"><img src="/src/images/envolpe.png"/><span class="badge">3</span></a>
								</li>
								<li>
									<a href="#"><img src="/src/images/gear.png"/></a>
								</li>
								<li>
									<a @click="logout()"><img src="/src/images/power.png"/></a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
			<section>
				<div class="row content">
					<div class="col-sm-12 sidenav dashboard">

						<ul class="nav nav-tabs col-sm-1">
							<li class="active">
								<a data-toggle="tab" href="#home"><img src="/src/images/home.png" />Home</a>
							</li>
							<li>
								<a data-toggle="tab" href="#toolkit"><img src="/src/images/toolkit.png" />Tools</a>
							</li>
							<li>
								<a data-toggle="tab" href="#star"><img src="/src/images/star.png" />Favorities</a>
							</li>
							<li>
								<a data-toggle="tab" href="#setting"><img src="/src/images/setting.png" />Settings</a>
							</li>
						</ul>

						<div class="tab-content col-sm-11 full-detail">
							<div class="head-right">
								Enhance your Life Story
							</div>
							<div id="home" class="tab-pane fade in active">
								<ul class="nav nav-tabs2 ">
									<li class="active">
										<a data-toggle="tab" href="#homedetail">Home</a>
									</li>
									<li>
										<a data-toggle="tab" href="#tooldetail">Toolkit</a>
									</li>
									<li>
										<a data-toggle="tab" href="#paldetail">PAL</a>
									</li>
									<li>
										<a data-toggle="tab" href="#settingdetail">Settings</a>
									</li>
								</ul>
								<div class="tab-content col-sm-12 all detail">
									<div id="homedetail" class="tab-pane fade in active">
										<div class="col-sm-3 detail-left">
											<div class="my-time">
												My Timeline

											</div>
											<ul class="time-check">
												<li>
													<label>
														<input type="checkbox" name="checkbox" value="Unarchived" checked>
														<i class="helper"></i>Unarchived</label>
												</li>
												<li>
													<label>
														<input type="checkbox" name="checkbox" value="Archive">
														<i class="helper"></i>Archive</label>
												</li>
												<li>
													<label>
														<input type="checkbox" name="checkbox" value="Start">
														<i class="helper"></i>My Start</label>
												</li>
												<li>
													<label>
														<input type="checkbox" name="checkbox" value="Last">
														<i class="helper"></i>Last Year</label>
												</li>
												<li>
													<label>
														<input type="checkbox" name="checkbox" value="This">
														<i class="helper"></i>This Year</label>
												</li>
											</ul>
											<ul class="timelinedate">
												<li>
													<input type='text' class="form-control datetimepicker" id='datetimepicker' placeholder="Start Date" />

												</li>
												<li>
													<input type='text' class="form-control datetimepicker" id='datetimepicker1' placeholder="End Date" />

												</li>
											</ul>
											<div class="events-detail">
												<h5>Events</h5>
												<form>
													<input type="text" name="search" placeholder="Search">
													<input type="button" value="" id="searchButton" />
													<button><img src="/src/images/search-gear.png"/>
													</button>
												</form>
												<span class="result-event">Results</span>
												<textarea></textarea>
											</div>

										</div>
										<div class="col-sm-9 detail-right">
											<div class="my-archive">
												My Archive
											</div>
											<div class="list-detail">
												<div class="heading">
													<img src="/src/images/detail-twitter.png"/>Sent Tweets <span>{{user.name}}</span>
												</div>
												<div class="all-listing">
													<div class="inner-listing">
														<div class="name-detail col-sm-12">
															<img src="/src/images/client-img.png"/>
															<div class="name-date">
																<h4>{{user.name}}</h4>
																<span>2:57PM via Hootsuite</span>
																<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	<form method="post">
																		<textarea id="mytextarea">Hello, World!</textarea>
																	</form>
																</div>
															</div>
														</div>
														<p>
															Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
														</p>
													</div>
													<div class="inner-listing">
														<div class="name-detail col-sm-12">
															<img src="/src/images/client-img.png"/>
															<div class="name-date">
																<h4>{{user.name}}</h4>
																<span>2:57PM via Hootsuite</span>
																<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																</div>
															</div>
														</div>
														<p>
															Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
														</p>
													</div>
													<div class="inner-listing">
														<div class="name-detail col-sm-12">
															<img src="/src/images/client-img.png"/>
															<div class="name-date">
																<h4>{{user.name}}</h4>
																<span>2:57PM via Hootsuite</span>
																<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																</div>
															</div>
														</div>
														<p>
															Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div id="tooldetail" class="tab-pane fade ">
										<div class="col-sm-3 detail-left">
											<div class="my-time">
												My Timeline
											</div>
											<ul class="timelinedate">
												<li>
													<input type='text' class="form-control datetimepicker" id='datetimepicker' placeholder="Start Date" />

												</li>
												<li>
													<input type='text' class="form-control datetimepicker" id='datetimepicker1' placeholder="End Date" />

												</li>
											</ul>
											<div class="events-detail">
												<h5>Events</h5>
												<form>
													<input type="text" name="search" placeholder="Search">
													<input type="button" value="" id="searchButton" />
													<button><img src="/src/images/search-gear.png"/>
													</button>
												</form>
												<span class="result-event">Results</span>
												<textarea></textarea>
											</div>

										</div>
										<div class="col-sm-9 detail-right">
											<div class="my-archive">
												My Archive
											</div>
											<div class="list-detail">
												<div class="heading">
													<img src="/src/images/detail-twitter.png"/>Sent Tweets <span>{{user.name}}</span>
												</div>
												<div class="all-listing">
													<div class="inner-listing">
														<div class="name-detail col-sm-12">
															<img src="/src/images/client-img.png"/>
															<div class="name-date">
																<h4>{{user.name}}</h4>
																<span>2:57PM via Hootsuite</span>
																<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																</div>
															</div>
														</div>
														<p>
															Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
														</p>
													</div>
													<div class="inner-listing">
														<div class="name-detail col-sm-12">
															<img src="/src/images/client-img.png"/>
															<div class="name-date">
																<h4>{{user.name}}</h4>
																<span>2:57PM via Hootsuite</span>
																<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																</div>
															</div>
														</div>
														<p>
															Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
														</p>
													</div>
													<div class="inner-listing">
														<div class="name-detail col-sm-12">
															<img src="/src/images/client-img.png"/>
															<div class="name-date">
																<h4>{{user.name}}</h4>
																<span>2:57PM via Hootsuite</span>
																<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																</div>
															</div>
														</div>
														<p>
															Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div id="paldetail" class="tab-pane fade">
										<div class="col-sm-12 detail-right">
											<div class="my-archive">
												Personal Asset Library (PAL)
											</div>
											<div class="pal-details">
												<div class="col-sm-3">
													<div class="overlay-pal">
														<img src="/src/images/pal-image.jpg"/>
														<h4><a href="#"><i class="fa fa-file-image-o" aria-hidden="true"></i>Photos</a>
														<ul class="pal-detail">
															<li>
																<a href="#">Albums</a>
															</li>
															<li>
																<a href="#">Photos of Me</a>
															</li>
															<li>
																<a href="#">Photos by Year</a>
															</li>
														</ul></h4>
													</div>
												</div>
												<div class="col-sm-3">
													<div class="overlay-pal">
														<img src="/src/images/pal-image.jpg"/>
														<h4><a href="#"><i class="fa fa-play" aria-hidden="true"></i>Videos</a>
														<ul class="pal-detail">
															<li>
																<a href="#">Albums</a>
															</li>
															<li>
																<a href="#">Photos of Me</a>
															</li>
															<li>
																<a href="#">Photos by Year</a>
															</li>
														</ul></h4>
													</div>
												</div>
												<div class="col-sm-3">
													<div class="overlay-pal">
														<img src="/src/images/pal-image.jpg"/>
														<h4><a href="#"><i class="fa fa-music" aria-hidden="true"></i>Music</a>
														<ul class="pal-detail">
															<li>
																<a href="#">Albums</a>
															</li>
															<li>
																<a href="#">Photos of Me</a>
															</li>
															<li>
																<a href="#">Photos by Year</a>
															</li>
														</ul></h4>
													</div>
												</div>
												<div class="col-sm-3">
													<div class="overlay-pal">
														<img src="/src/images/pal-image.jpg"/>
														<h4><a href="#"><i class="fa fa-play" aria-hidden="true"></i>Documents</a>
														<ul class="pal-detail">
															<li>
																<a href="#">Albums</a>
															</li>
															<li>
																<a href="#">Photos of Me</a>
															</li>
															<li>
																<a href="#">Photos by Year</a>
															</li>
														</ul></h4>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div id="settingdetail" class="tab-pane fade">
										<div class="col-sm-3 detail-left">

											<ul class="timelinedate settingslist">
												<li class="activeli">
													<a href=""><i class="fa fa-cog" aria-hidden="true"></i> General</a>
												</li>
												<li>
													<a href=""><i class="fa fa-shield" aria-hidden="true"></i> Security</a>
												</li>
												<li>
													<a href=""><i class="fa fa-lock" aria-hidden="true"></i> Privacy</a>
												</li>
												<li>
													<a href=""><i class="fa fa-tasks" aria-hidden="true"></i> Timeline</a>
												</li>
												<li>
													<a href=""><i class="fa fa-map-o" aria-hidden="true"></i> Proxy  Beneficiary</a>
												</li>
												<li>
													<a href=""><i class="fa fa-clock-o" aria-hidden="true"></i> Notifications</a>
												</li>
												<li>
													<a href=""><i class="fa fa-mobile" aria-hidden="true"></i> Mobile</a>
												</li>
												<li>
													<a href=""><i class="fa fa-terminal" aria-hidden="true"></i> Apps</a>
												</li>
												<li>
													<a href=""><i class="fa fa-credit-card-alt" aria-hidden="true"></i> Payments</a>
												</li>
												<li>
													<a href=""><i class="fa fa-user-circle-o" aria-hidden="true"></i> Support Dashboard</a>
												</li>
											</ul>

										</div>
										<div class="col-sm-9 detail-right">
											<div class="my-archive">
												General Account Settings
											</div>

											<div class="all-listing settingsarea">
												<div class="row">
													<div class="col-sm-4">
														Name
													</div>
													<div class="col-sm-4">
														{{user.name}}
													</div>
													<div class="col-sm-4 text-right">
														<a href="">edit</a>
													</div>
												</div>
												<div class="row">
													<div class="col-sm-4">
														Username
													</div>
													<div class="col-sm-4">
														{{user.name}}
													</div>
													<div class="col-sm-4 text-right">
														<a href="">edit</a>
													</div>
												</div>
												<div class="row">
													<div class="col-sm-4">
														Email
													</div>
													<div class="col-sm-4">
														{{user.mail}}
													</div>
													<div class="col-sm-4 text-right">
														<a href="">edit</a>
													</div>
												</div>
												<div class="row">
													<div class="col-sm-4">
														Password
													</div>
													<div class="col-sm-4">
														*******
													</div>
													<div class="col-sm-4 text-right">
														<a href="">edit</a>
													</div>
												</div>
												<div class="row">
													<div class="col-sm-4">
														Networks
													</div>
													<div class="col-sm-4">
														Facebook, Twitter, Google+, Youtube
													</div>
													<div class="col-sm-4 text-right">
														<a href="">edit</a>
													</div>
												</div>
												<div class="row">
													<div class="col-sm-4">
														Langauge
													</div>
													<div class="col-sm-4">
														English
													</div>
													<div class="col-sm-4 text-right">
														<a href="">edit</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
								<div id="toolkit" class="tab-pane fade">
									<ul class="nav nav-tabs2 ">
										<li class="active">
											<a data-toggle="tab" href="#homedetail">Home</a>
										</li>
										<li>
											<a data-toggle="tab" href="#tooldetail">Toolkit</a>
										</li>
										<li>
											<a data-toggle="tab" href="#paldetail">PAL</a>
										</li>
										<li>
											<a data-toggle="tab" href="#settingdetail">Settings</a>
										</li>
									</ul>
									<div class="tab-content col-sm-12 all detail">
										<div id="homedetail" class="tab-pane fade in active">
											<div class="col-sm-3 detail-left">
												<div class="my-time">
													My Timeline
													<ul class="time-check">
														<li>
															<label>
																<input type="checkbox" name="checkbox" value="Unarchived">
																Unarchived</label>
														</li>
														<li>
															<label>
																<input type="checkbox" name="checkbox" value="Archive">
																Archive</label>
														</li>
														<li>
															<label>
																<input type="checkbox" name="checkbox" value="Start">
																My Start</label>
														</li>
														<li>
															<label>
																<input type="checkbox" name="checkbox" value="Last">
																Last Year</label>
														</li>
														<li>
															<label>
																<input type="checkbox" name="checkbox" value="This">
																This Year</label>
														</li>
													</ul>
												</div>
												<ul class="timelinedate">
													<li>
														<input type='text' class="form-control datetimepicker" id='datetimepicker' placeholder="Start Date" />

													</li>
													<li>
														<input type='text' class="form-control datetimepicker" id='datetimepicker1' placeholder="End Date" />

													</li>
												</ul>
												<div class="events-detail">
													<h5>Events</h5>
													<form>
														<input type="text" name="search" placeholder="Search">
														<input type="button" value="" id="searchButton" />
														<button><img src="/src/images/search-gear.png"/>
														</button>
													</form>
													<span class="result-event">Results</span>
													<textarea></textarea>
												</div>

											</div>
											<div class="col-sm-9 detail-right">
												<div class="my-archive">
													My Archive
												</div>
												<div class="list-detail">
													<div class="heading">
														<img src="/src/images/detail-twitter.png"/>Sent Tweets <span>{{user.name}}</span>
													</div>
													<div class="all-listing">
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>


										<div id="tooldetail" class="tab-pane fade">
											<div class="col-sm-3 detail-left">
												<div class="my-time">
													My Timeline
												</div>
												<ul class="timelinedate">
													<li>
														<input type='text' class="form-control datetimepicker" id='datetimepicker' placeholder="Start Date" />

													</li>
													<li>
														<input type='text' class="form-control datetimepicker" id='datetimepicker1' placeholder="End Date" />

													</li>
												</ul>
												<div class="events-detail">
													<h5>Events</h5>
													<form>
														<input type="text" name="search" placeholder="Search">
														<input type="button" value="" id="searchButton" />
														<button><img src="/src/images/search-gear.png"/>
														</button>
													</form>
													<span class="result-event">Results</span>
													<textarea></textarea>
												</div>

											</div>
											<div class="col-sm-9 detail-right">
												<div class="my-archive">
													My Archive
												</div>
												<div class="list-detail">
													<div class="heading">
														<img src="/src/images/detail-twitter.png"/>Sent Tweets <span>{{user.name}}</span>
													</div>
													<div class="all-listing">
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div id="paldetail" class="tab-pane fade">
											<div class="col-sm-3 detail-left">
												<div class="my-time">
													My Timeline
												</div>
												<ul class="timelinedate">
													<li>
														<input type='text' class="form-control datetimepicker" id='datetimepicker' placeholder="Start Date" />

													</li>
													<li>
														<input type='text' class="form-control datetimepicker" id='datetimepicker1' placeholder="End Date" />

													</li>
												</ul>
												<div class="events-detail">
													<h5>Events</h5>
													<form>
														<input type="text" name="search" placeholder="Search">
														<input type="button" value="" id="searchButton" />
														<button><img src="/src/images/search-gear.png"/>
														</button>
													</form>
													<span class="result-event">Results</span>
													<textarea></textarea>
												</div>

											</div>
											<div class="col-sm-9 detail-right">
												<div class="my-archive">
													My Archive
												</div>
												<div class="list-detail">
													<div class="heading">
														<img src="/src/images/detail-twitter.png"/>Sent Tweets <span>{{user.name}}</span>
													</div>
													<div class="all-listing">
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div id="settingdetail" class="tab-pane fade">
											<div class="col-sm-3 detail-left">
												<div class="my-time">
													My Timeline
												</div>
												<ul class="timelinedate">
													<li>
														<input type='text' class="form-control datetimepicker" id='datetimepicker' placeholder="Start Date" />

													</li>
													<li>
														<input type='text' class="form-control datetimepicker" id='datetimepicker1' placeholder="End Date" />

													</li>
												</ul>
												<div class="events-detail">
													<h5>Events</h5>
													<form>
														<input type="text" name="search" placeholder="Search">
														<input type="button" value="" id="searchButton" />
														<button><img src="/src/images/search-gear.png"/>
														</button>
													</form>
													<span class="result-event">Results</span>
													<textarea></textarea>
												</div>

											</div>
											<div class="col-sm-9 detail-right">
												<div class="my-archive">
													My Archive
												</div>
												<div class="list-detail">
													<div class="heading">
														<img src="/src/images/detail-twitter.png"/>Sent Tweets <span>{{user.name}}</span>
													</div>
													<div class="all-listing">
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div id="star" class="tab-pane fade">
									<ul class="nav nav-tabs2 ">
										<li class="active">
											<a data-toggle="tab" href="#homedetail">Home</a>
										</li>
										<li>
											<a data-toggle="tab" href="#tooldetail">Toolkit</a>
										</li>
										<li>
											<a data-toggle="tab" href="#paldetail">PAL</a>
										</li>
										<li>
											<a data-toggle="tab" href="#settingdetail">Settings</a>
										</li>
									</ul>
									<div class="tab-content col-sm-12 all detail">
										<div id="homedetail" class="tab-pane fade in active">
											<div class="col-sm-3 detail-left">
												<div class="my-time">
													My Timeline
												</div>
												<ul class="timelinedate">
													<li>
														<input type='text' class="form-control datetimepicker" id='datetimepicker' placeholder="Start Date" />

													</li>
													<li>
														<input type='text' class="form-control datetimepicker" id='datetimepicker1' placeholder="End Date" />

													</li>
												</ul>
												<div class="events-detail">
													<h5>Events</h5>
													<form>
														<input type="text" name="search" placeholder="Search">
														<input type="button" value="" id="searchButton" />
														<button><img src="/src/images/search-gear.png"/>
														</button>
													</form>
													<span class="result-event">Results</span>
													<textarea></textarea>
												</div>

											</div>
											<div class="col-sm-9 detail-right">
												<div class="my-archive">
													My Archive
												</div>
												<div class="list-detail">
													<div class="heading">
														<img src="/src/images/detail-twitter.png"/>Sent Tweets <span>{{user.name}}</span>
													</div>
													<div class="all-listing">
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div id="tooldetail" class="tab-pane fade">
											<div class="col-sm-3 detail-left">
												<div class="my-time">
													My Timeline
												</div>
												<ul class="timelinedate">
													<li>
														<input type='text' class="form-control datetimepicker" id='datetimepicker' placeholder="Start Date" />

													</li>
													<li>
														<input type='text' class="form-control datetimepicker" id='datetimepicker1' placeholder="End Date" />

													</li>
												</ul>
												<div class="events-detail">
													<h5>Events</h5>
													<form>
														<input type="text" name="search" placeholder="Search">
														<input type="button" value="" id="searchButton" />
														<button><img src="/src/images/search-gear.png"/>
														</button>
													</form>
													<span class="result-event">Results</span>
													<textarea></textarea>
												</div>

											</div>
											<div class="col-sm-9 detail-right">
												<div class="my-archive">
													My Archive
												</div>
												<div class="list-detail">
													<div class="heading">
														<img src="/src/images/detail-twitter.png"/>Sent Tweets <span>{{user.name}}</span>
													</div>
													<div class="all-listing">
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div id="paldetail" class="tab-pane fade">
											<div class="col-sm-3 detail-left">
												<div class="my-time">
													My Timeline
												</div>
												<ul class="timelinedate">
													<li>
														<input type='text' class="form-control datetimepicker" id='datetimepicker' placeholder="Start Date" />

													</li>
													<li>
														<input type='text' class="form-control datetimepicker" id='datetimepicker1' placeholder="End Date" />

													</li>
												</ul>
												<div class="events-detail">
													<h5>Events</h5>
													<form>
														<input type="text" name="search" placeholder="Search">
														<input type="button" value="" id="searchButton" />
														<button><img src="/src/images/search-gear.png"/>
														</button>
													</form>
													<span class="result-event">Results</span>
													<textarea></textarea>
												</div>

											</div>
											<div class="col-sm-9 detail-right">
												<div class="my-archive">
													My Archive
												</div>
												<div class="list-detail">
													<div class="heading">
														<img src="/src/images/detail-twitter.png"/>Sent Tweets <span>{{user.name}}</span>
													</div>
													<div class="all-listing">
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div id="settingdetail" class="tab-pane fade">
											<div class="col-sm-3 detail-left">
												<div class="my-time">
													My Timeline
												</div>
												<ul class="timelinedate">
													<li>
														<input type='text' class="form-control datetimepicker" id='datetimepicker' placeholder="Start Date" />

													</li>
													<li>
														<input type='text' class="form-control datetimepicker" id='datetimepicker1' placeholder="End Date" />

													</li>
												</ul>
												<div class="events-detail">
													<h5>Events</h5>
													<form>
														<input type="text" name="search" placeholder="Search">
														<input type="button" value="" id="searchButton" />
														<button><img src="/src/images/search-gear.png"/>
														</button>
													</form>
													<span class="result-event">Results</span>
													<textarea></textarea>
												</div>

											</div>
											<div class="col-sm-9 detail-right">
												<div class="my-archive">
													My Archive
												</div>
												<div class="list-detail">
													<div class="heading">
														<img src="/src/images/detail-twitter.png"/>Sent Tweets <span>{{user.name}}</span>
													</div>
													<div class="all-listing">
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div id="setting" class="tab-pane fade">
									<ul class="nav nav-tabs2 ">
										<li class="active">
											<a data-toggle="tab" href="#homedetail">Home</a>
										</li>
										<li>
											<a data-toggle="tab" href="#tooldetail">Toolkit</a>
										</li>
										<li>
											<a data-toggle="tab" href="#paldetail">PAL</a>
										</li>
										<li>
											<a data-toggle="tab" href="#settingdetail">Settings</a>
										</li>
									</ul>
									<div class="tab-content col-sm-12 all detail">
										<div id="homedetail" class="tab-pane fade in active">
											<div class="col-sm-3 detail-left">
												<div class="my-time">
													My Timeline
												</div>
												<ul class="timelinedate">
													<li>
														<input type='text' class="form-control datetimepicker" id='datetimepicker' placeholder="Start Date" />

													</li>
													<li>
														<input type='text' class="form-control datetimepicker" id='datetimepicker1' placeholder="End Date" />

													</li>
												</ul>
												<div class="events-detail">
													<h5>Events</h5>
													<form>
														<input type="text" name="search" placeholder="Search">
														<input type="button" value="" id="searchButton" />
														<button><img src="/src/images/search-gear.png"/>
														</button>
													</form>
													<span class="result-event">Results</span>
													<textarea></textarea>
												</div>

											</div>
											<div class="col-sm-9 detail-right">
												<div class="my-archive">
													My Archive
												</div>
												<div class="list-detail">
													<div class="heading">
														<img src="/src/images/detail-twitter.png"/>Sent Tweets <span>{{user.name}}</span>
													</div>
													<div class="all-listing">
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div id="tooldetail" class="tab-pane fade in active">
											<div class="col-sm-3 detail-left">
												<div class="my-time">
													My Timeline
												</div>
												<ul class="timelinedate">
													<li>
														<input type='text' class="form-control datetimepicker" id='datetimepicker' placeholder="Start Date" />

													</li>
													<li>
														<input type='text' class="form-control datetimepicker" id='datetimepicker1' placeholder="End Date" />

													</li>
												</ul>
												<div class="events-detail">
													<h5>Events</h5>
													<form>
														<input type="text" name="search" placeholder="Search">
														<input type="button" value="" id="searchButton" />
														<button><img src="/src/images/search-gear.png"/>
														</button>
													</form>
													<span class="result-event">Results</span>
													<textarea></textarea>
												</div>

											</div>
											<div class="col-sm-9 detail-right">
												<div class="my-archive">
													My Archive
												</div>
												<div class="list-detail">
													<div class="heading">
														<img src="/src/images/detail-twitter.png"/>Sent Tweets <span>{{user.name}}</span>
													</div>
													<div class="all-listing">
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div id="paldetail" class="tab-pane fade in active">
											<div class="col-sm-3 detail-left">
												<div class="my-time">
													My Timeline
												</div>
												<ul class="timelinedate">
													<li>
														<input type='text' class="form-control datetimepicker" id='datetimepicker' placeholder="Start Date" />

													</li>
													<li>
														<input type='text' class="form-control datetimepicker" id='datetimepicker1' placeholder="End Date" />

													</li>
												</ul>
												<div class="events-detail">
													<h5>Events</h5>
													<form>
														<input type="text" name="search" placeholder="Search">
														<input type="button" value="" id="searchButton" />
														<button><img src="/src/images/search-gear.png"/>
														</button>
													</form>
													<span class="result-event">Results</span>
													<textarea></textarea>
												</div>

											</div>
											<div class="col-sm-9 detail-right">
												<div class="my-archive">
													My Archive
												</div>
												<div class="list-detail">
													<div class="heading">
														<img src="/src/images/detail-twitter.png"/>Sent Tweets <span>{{user.name}}</span>
													</div>
													<div class="all-listing">
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div id="settingdetail" class="tab-pane fade in active">
											<div class="col-sm-3 detail-left">
												<div class="my-time">
													My Timeline
												</div>
												<ul class="timelinedate">
													<li>
														<input type='text' class="form-control datetimepicker" id='datetimepicker' placeholder="Start Date" />

													</li>
													<li>
														<input type='text' class="form-control datetimepicker" id='datetimepicker1' placeholder="End Date" />

													</li>
												</ul>
												<div class="events-detail">
													<h5>Events</h5>
													<form>
														<input type="text" name="search" placeholder="Search">
														<input type="button" value="" id="searchButton" />
														<button><img src="/src/images/search-gear.png"/>
														</button>
													</form>
													<span class="result-event">Results</span>
													<textarea></textarea>
												</div>

											</div>
											<div class="col-sm-9 detail-right">
												<div class="my-archive">
													My Archive
												</div>
												<div class="list-detail">
													<div class="heading">
														<img src="/src/images/detail-twitter.png"/>Sent Tweets <span>{{user.name}}</span>
													</div>
													<div class="all-listing">
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
														<div class="inner-listing">
															<div class="name-detail col-sm-12">
																<img src="/src/images/client-img.png"/>
																<div class="name-date">
																	<h4>{{user.name}}</h4>
																	<span>2:57PM via Hootsuite</span>
																	<div class="write-bx"><img src="/src/images/write-pen.png"/><span>Add to Your Story</span>
																	</div>
																</div>
															</div>
															<p>
																Lorem ipsum quisque massa auctor aliquam himenaeos aliquam sed id, cubilia habitant class sem
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<ul class="left-list">
									<li>
										<a href="#"><img src="/src/images/archive-img.png"/>Archive</a>
									</li>
									<li>
										<form>
											<input type="text" name="search" placeholder="Search..">
										</form>
									</li>
								</ul>
							</div>
						</div>

					</div>
			</section>

		</div>
  </div>
</template>
<script>
import Vue from "vue";
import VueSession from "vue-session";
import appNav from "../../components/appNav";
import services from "../../services"
Vue.use(VueSession);
export default {
  components: {
    appNav
  },
  data() {
    return {
      fb: false,
      tw: false,
      pi: false,
      lk: false,
      yt: false,
      ig: false,
      bl: false,
      user: ""
    };
  },
  beforeCreate: function() {
    if (this.$session.has("usrid")) {
      this.$router.push("/");
    } else {
      this.$router.push("/register");
    }
  },
  created() {
    if (this.$session.has("usrid")) {
      this.user = this.$session.get("usrid");
      this.authtype = true;
    }
  },
  methods: {
		instantiateContract () {
			this.loading("Authenticating Digi.me");
			services.getContract(self.token)
      .then((response) => {
				this.$session.set("session_id",response.data);
				this.$Modal.success({
        	title: 'Consent Access',
          content: 'Acess Granted'
        });
      }).catch((errors) => {
				self.$Message.error("Invalid Contract, Transaction Failed");
			})
		},
    loading(e) {
      const msg = this.$Message.loading({
        content: e,
        duration: 0
      });
      setTimeout(msg, 3000);
    },
    logout: function() {
      this.$session.destroy();
      this.$router.push("/");
      location.reload();
    }
  }
};
</script>
