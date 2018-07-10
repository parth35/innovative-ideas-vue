<template>
	<div>
		<section class="content-header">
			<h1>Add Users</h1>
		</section>
		<section class="content col-md-10">
			<div class="box box-info">
				<div class="box-header with-border">
					<h3 class="box-title">User Add</h3>
				</div>
				<!-- /.box-header -->
				<!-- form start -->
				<form class="form-horizontal">
					<div class="box-body">
						<div class="form-group">
							<label for="first_name" class="col-sm-2 control-label">First Name</label>
							<div class="col-sm-10">
								<input type="text" name="first_name" class="form-control" id="first_name" placeholder="First Name">
							</div>
						</div>
						<div class="form-group">
							<label for="last_name" class="col-sm-2 control-label">Last Name</label>
							<div class="col-sm-10">
								<input type="text" name="last_name" class="form-control" id="last_name" placeholder="Last Name">
							</div>
						</div>
						<div class="form-group">
							<label for="username" class="col-sm-2 control-label">Username</label>
							<div class="col-sm-10">
								<input type="text" name="username" class="form-control" id="username" placeholder="Username">
							</div>
						</div>
						<div class="form-group">
							<label for="email" class="col-sm-2 control-label">Email</label>
							<div class="col-sm-10">
								<input type="text" name="email" class="form-control" id="email" placeholder="Email">
							</div>
						</div>
						<div class="form-group">
							<label for="password" class="col-sm-2 control-label">Password</label>
							<div class="col-sm-10">
								<input type="password" name="password" class="form-control" id="password" placeholder="Password">
							</div>
						</div>
						<div class="form-group">
							<label for="profile_image" class="col-sm-2 control-label">Profile Image</label>
							<div class="col-sm-10">
								<input type="file" name="profile_image" class="form-control" id="profile_image">
							</div>
						</div>
					</div>
					<!-- /.box-body -->
					<div class="box-footer">
						<a href="/admin/users" class="btn btn-default">Cancel</a>
						<button type="submit" class="btn btn-info pull-right">Submit</button>
					</div>
					<!-- /.box-footer -->
				</form>
			</div>
		</section>
	</div>
</template>
