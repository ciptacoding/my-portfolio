<template>
  <section class="px-[12%] mx-auto relative">
    <div class="invisible sm:visible bg-[#2d2d39] w-80 h-80 mx-auto rounded-full absolute z-[-1] inset-0">
    </div>
    <article class="w-full sm:flex mt-5 relative mx-auto justify-between">
      <div class="w-full sm:w-6/12 py-12 z-2">
        <h1 class="text-5xl">I'm</h1>
        <p class="text-6xl text-white my-6">Cipta Dwipajaya</p>
        <hr class="w-full sm:w-6/12 border-[#ffba19] border-4">
        <div class="w-full sm:w-6/12 my-6">
          <p>I'm an active learner with experience and a passion for web programming, frontend development, and backend
            development. Currently, I am a student at Institute Technology and Business STIKOM Bali studying Information
            Systems.
          </p>
        </div>
      </div>
      <div class="w-full mb-8 sm:w-[36%] py-8 z-2">
        <h1 class="text-xl my-4">Services</h1>
        <p class="text-2xl text-white">Let's build quality products in programming and design with my services</p>
        <p class="text-[#f2b11b] my-2">Show more
          <Icon name="mdi:arrow-right-thin" />
        </p>
        <div class="text-[#f2b11b] text-2xl flex gap-5">
          <NuxtLink to="https://www.instagram.com/ciptadwipajayaa/">
            <Icon name="mdi:instagram" />
          </NuxtLink>
          <NuxtLink to="https://github.com/ciptacoding">
            <Icon name="mdi:github" />
          </NuxtLink>
          <NuxtLink to="https://twitter.com/Cipta_Dev">
            <Icon name="mdi:twitter-circle" />
          </NuxtLink>
          <NuxtLink to="https://www.linkedin.com/in/i-gusti-ngurah-cipta-dwipajaya-9019bb231/">
            <Icon name="mdi:linkedin" />
          </NuxtLink>
        </div>
      </div>
    </article>
    <div class="static max-w-fit z-3 sm:absolute left-[38%] right-[30%] top-[3rem] h-80 w-80">
      <img src="~/assets/img/IMG20230309193614-removebg2.png" alt="">
    </div>
  </section>


  <section class="bg-[#282833]">
    <article class="relative mx-[12%]">
      <div
        class="w-full absolute bg-[#3f3f50] grid mx-auto place-items-center z-3 rounded-md gap-2 h-fit py-5 grid-cols-3 top-[-8rem] sm:top-[-2.5rem] md:grid-cols-9">
        <i class="devicon-javascript-plain colored text-6xl"></i>
        <i class="devicon-vuejs-plain-wordmark colored text-6xl"></i>
        <i class="devicon-php-plain colored text-6xl"></i>
        <i class="devicon-laravel-plain-wordmark colored text-6xl"></i>
        <i class="devicon-codeigniter-plain-wordmark colored text-6xl"></i>
        <i class="devicon-git-plain colored text-6xl"></i>
        <i class="devicon-tailwindcss-plain colored text-6xl"></i>
        <i class="devicon-nuxtjs-plain colored text-6xl"></i>
        <i class="devicon-typescript-plain colored text-6xl"></i>
      </div>
    </article>
    <article class="w-full px-[12%] sm:flex px-[12%] mx-auto gap-10 justify-between">
      <div class="w-full pt-32 sm:w-[30%] md:pt-0 mt-[7rem]">
        <h1 class="sm:text-white font-bold text-4xl">What Can I Do For Your Needs</h1>
        <div class="w-[80%] mt-4">
          <p>It is easier to entrust the work to the exports because they are able to provide the best
            result with
            reliable quality</p>
        </div>
        <div class="flex gap-5 mt-5">
          <div>
            <h1 class="text-[#f2b11b] text-2xl">25+</h1>
            <p>Project Completed</p>
            <h1 class="text-[#f2b11b] text-2xl mt-5">10+</h1>
            <p>Contract Remote</p>
          </div>
          <div>
            <h1 class="text-[#f2b11b] text-2xl">50+</h1>
            <p>Community Network</p>
            <h1 class="text-[#f2b11b] text-xl mt-5">1+</h1>
            <p>Year Experience</p>
          </div>
        </div>
      </div>
      <div class="mt-[7rem] w-full sm:w-[40%]">
        <div class="flex h-[100px] justify-between gap-5 sm:gap-10">
          <img src="~/assets/img/12290877_Wavy_Tech-09_Single-08.jpg" alt="">
          <div class="self-center">
            <p class="text-white text-xl">Frontend Development</p>
            <p class="">10 Project</p>
          </div>
          <div class="text-[#f2b11b] text-3xl self-center">
            <NuxtLink to="/portfolio">
              <Icon name="mdi:arrow-right-thin" />
            </NuxtLink>
          </div>
        </div>
        <hr class="border-[#3f3f50] border-2 mt-3">

        <div class="flex h-[100px] justify-between mt-5 gap-5 sm:gap-10">
          <img src="~/assets/img/10332256_4412009.jpg" alt="">
          <div class="self-center">
            <p class="text-white text-xl">Backend Development</p>
            <p class="">8 Project</p>
          </div>
          <div class="text-[#f2b11b] text-3xl self-center">
            <NuxtLink to="/portfolio">
              <Icon name="mdi:arrow-right-thin" />
            </NuxtLink>
          </div>
        </div>
        <hr class="border-[#3f3f50] border-2 mt-3">

        <div class="flex h-[100px] justify-between mt-5 gap-5 sm:gap-10">
          <img src="~/assets/img/7118756_3426526.jpg" alt="">
          <div class="self-center">
            <p class="text-white text-xl">Fullstack Development</p>
            <p class="">11 Project</p>
          </div>
          <div class="text-[#f2b11b] text-3xl self-center">
            <NuxtLink to="/portfolio">
              <Icon name="mdi:arrow-right-thin" />
            </NuxtLink>
          </div>
        </div>
        <hr class="border-[#3f3f50] border-2 mt-3 mb-12">
      </div>
    </article>
  </section>
  <section class="px-[12%] mx-auto">
    <Footer />
  </section>
</template>
