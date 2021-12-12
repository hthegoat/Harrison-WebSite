<template>
	<div class="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-coolGray-100 text-coolGray-800">
		<div class="flex flex-col justify-between">
			<div class="space-y-2">
				<h2 class="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
				<div class="text-coolGray-600">Vivamus in nisl metus? Phasellus.</div>
			</div>
			<img src="https://i.ibb.co/nMsmMpG/megaphone-dynamic-color.png" alt="" class="object-contain p-6 h-50 md:h-64">
		</div>
		<form action="https://formspree.io/f/mdobozvb" method="POST" novalidate="" class="space-y-6 ng-untouched ng-pristine ng-valid">
			<div>
				<label for="name" class="text-sm">Full name</label>
				<input id="name" name="fullname" type="text" placeholder="" class="w-full p-3 input input-primary input-bordered rounded bg-base-300">
			</div>
			<div>
				<label for="email" class="text-sm">Email</label>
				<input id="email" name="email" type="email" class="w-full p-3 input input-primary input-bordered rounded bg-base-300">
			</div>
			<div>
				<label for="message" class="text-sm">Message</label>
				<textarea id="message" name="message" rows="3" class="w-full p-3 input input-primary input-bordered rounded bg-base-300"></textarea>
			</div>
			<button type="submit" class="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-gradient-to-r from-primary via-secondary to-accent-focus text-coolGray-50">Send Message</button>
		</form>
	</div>
</template>