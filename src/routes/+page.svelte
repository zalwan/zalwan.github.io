<script>
	import { base } from '$app/paths'
	import * as config from '$lib/config'
	import Lingker from '../../public/lingker.svg?dataurl'

	export let data
	$: ({ nodes } = data)
	//$: console.log(nodes)
</script>

<section class="home-section">
	<div class="hero">
		<div class="hero-title">
			<div class="category-section">
				<div class="category-indicator" />
				<h1 class="category-title">Who am I ?</h1>
			</div>
			<div class="hero-indicator">
				<div class="hero-indicator-animate" />
				<p class="hero-indicator-title">available for work</p>
			</div>
		</div>
		<div class="hero-content">
			<div class="hero-container-img">
				<img
					src="https://framerusercontent.com/images/dDnqkzQfB3pmvEdrFSxAJSkAyyk.png"
					alt="avatar hero"
					srcset=""
				/>
			</div>
			<div class="hero-container-text">
				<h2><b>i'm {config.title}</b></h2>
				<div>
					<p>Front end developer from Tangerang, ID.</p>
					<p>Working freelance at Upwork.</p>
				</div>
				<div class="navbar-menu mt-3">
					<a href="https://wa.me/+6285813095235" class="button-contact">
						<iconify-icon icon="ic:baseline-whatsapp" />
						<p>contact me</p>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="container-blog">
		<div class="category-section">
			<div class="category-indicator" />
			<h1 class="category-title">recent blog</h1>
		</div>
		<div class="container-card">
			<!-- github-cms -->
			{#each nodes as { title, number, slug }}
				<div class="card-blog">
					<div class="max-w-lg">
						<a href="{base}/blog/{slug}-{number}" class=" text-2xl font-semibold leading-relaxed"
							>{title}</a
						>
						<p class=" text-gray-300">
							{number}
						</p>
					</div>
				</div>
			{/each}
			<!-- github-cms -->
			<!-- post -->
			<div class="card-blog">
				<div class="">
					<img
						class=" h-48 w-full rounded-md object-contain object-center lg:w-48 lg:object-cover"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStnm25SJSy8yQWHqH3Shwy15rn126QpxbVUA&usqp=CAU"
						alt=""
					/>
				</div>
				<div class="max-w-lg">
					<h1 class=" text-2xl font-semibold leading-relaxed">Ronaldo adalah Pemain terbaik</h1>
					<p class=" text-gray-300">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi autem veniam ex
						possimus quis laudantium explicabo totam fugit praesentium. Voluptatum minus ea cum!
						Ducimus optio dolores ut dignissimos ea eaque.
					</p>
				</div>
			</div>
			<div class="card-blog">
				<div class="">
					<img
						class=" h-48 w-full rounded-md object-contain object-center lg:w-48 lg:object-cover"
						src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2023/09/08/messi8JPG-1847576738.jpg"
						alt=""
					/>
				</div>
				<div class="max-w-lg">
					<h1 class=" text-2xl font-semibold leading-relaxed">Messi adalah asist terbaik</h1>
					<p class=" text-gray-300">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi autem veniam ex
						possimus quis laudantium explicabo totam fugit praesentium. Voluptatum minus ea cum!
						Ducimus optio dolores ut dignissimos ea eaque.
					</p>
				</div>
			</div>

			<div class="card-blog">
				<div class="">
					<img
						class=" h-48 w-full rounded-md object-contain object-center lg:w-48 lg:object-cover"
						src="https://awsimages.detik.net.id/community/media/visual/2022/05/25/neymar.jpeg?w=650&q=80"
						alt=""
					/>
				</div>
				<div class="max-w-lg">
					<h1 class=" text-2xl font-semibold leading-relaxed">Neymar adalah dribble terbaik</h1>
					<p class=" text-gray-300">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi autem veniam ex
						possimus quis laudantium explicabo totam fugit praesentium. Voluptatum minus ea cum!
						Ducimus optio dolores ut dignissimos ea eaque.
					</p>
				</div>
			</div>
			<!-- post -->
		</div>
	</div>
</section>

<!-- <section class=" flex h-fit w-full items-center justify-between py-28">
	<div class="text-white">
		<h1 class=" mb-2 text-6xl font-bold">
			Hi, I'm <span class=" text-blue-700">Suryawan</span>
		</h1>

		<div class="flex">
			<div class="">
				<img src={Lingker} alt="Lingker" />
			</div>
			<div class=" ml-9 mt-8">
				<p class="max-w-lg text-base text-gray-400">
					With experience 3 years as programmer in the world, i buld app with many technology like
					nextjs,flutter,react native and electron.
				</p>
				<a id="blank" href="#blank" class=" mt-3 flex items-center text-lg text-yellow-500">
					<p class=" mr-3 capitalize">Let's collaborate</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>
	<div class=" flex flex-col items-center justify-center">
		<div class=" h-36 w-0.5 bg-red-700" />
		<div class="flex flex-col gap-3 py-3">
			<a href="https://www.instagram.com/diaryizals/" class=" text-[2rem] text-red-600">
				<i class="uil uil-instagram" />
			</a>
			<a
				href="https://www.linkedin.com/in/rizal-suryawan-471138185"
				class=" text-[2rem] text-red-600"
			>
				<i class="uil uil-linkedin" />
			</a>
			<a href="https://github.com/zalwan" class=" text-[2rem] text-red-600">
				<i class="uil uil-github" />
			</a>
		</div>
		<div class=" h-36 w-0.5 bg-red-700" />
	</div>
</section> -->
