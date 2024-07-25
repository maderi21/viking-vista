<script setup>
import Button from "@/components/Button.vue";
</script>

<template>
  <div class="w-full">
    <section id="hero">
      <div
        class="bg-what bg-cover bg-center h-[1200px] items-center flex justify-center"
      >
        <h1 class="text-white text-6xl text-center">What to do here?</h1>
      </div>
    </section>
    <section id="sport" class="bg-primary-green">
      <div class="flex items-center justify-center">
        <h1 class="text-primary-dark text-6xl mt-20 mb-10">Sport</h1>
      </div>
      <div class="flex h-[400px]">
        <div class="p-10 flex items-center w-1/2">
          <p class="text-primary-dark text-2xl">
            Experience an active retreat at our rental cabin! Explore scenic
            hiking trails, fish in the pristine lake, or enjoy swimming and
            kayaking nearby. For adventure seekers, there’s mountain biking and
            rock climbing. After an action-packed day, unwind with horseshoes or
            a game of cornhole. Relax by the fire pit, sharing stories under the
            stars. Our cabin offers the perfect blend of adventure and
            relaxation for sports enthusiasts!
          </p>
        </div>
        <div
          class="bg-biking bg-cover bg-center rounded-lg my-10 mx-10 w-1/2"
        ></div>
      </div>
    </section>
    <section id="trecking" class="bg-primary-dark">
      <div class="flex items-center justify-center">
        <h1 class="text-6xl mt-20 mb-10">Trekking</h1>
      </div>
      <div class="flex h-[400px]">
        <div
          class="bg-trekking bg-cover bg-center rounded-lg my-10 mx-10 w-1/2"
        ></div>
        <div class="p-10 flex items-center w-1/2">
          <p class="text-2xl">
            Trekking through hills offers an exhilarating escape into nature's
            embrace, a journey that combines physical challenge, scenic beauty,
            and a profound sense of accomplishment. As you embark on this
            adventure, you'll traverse rugged trails, meander through lush
            forests, and ascend to breathtaking viewpoints that provide
            panoramic vistas of the surrounding landscape.
          </p>
        </div>
      </div>
    </section>
    <section id="swimming" class="bg-primary-green">
      <div class="flex items-center justify-center">
        <h1 class="text-primary-dark text-6xl mt-20 mb-10">Swimming</h1>
      </div>
      <div class="flex h-[400px]">
        <div class="p-10 flex items-center w-1/2">
          <p class="text-primary-dark text-2xl">
            Dive into adventure at our rental cabin with a pristine lake just
            steps away! Enjoy refreshing swims in crystal-clear waters
            surrounded by stunning natural beauty. Whether you prefer a morning
            dip to start your day or a leisurely afternoon swim, the lake offers
            a perfect escape. Unwind on the shore, soak up the sun, or explore
            the waters with a kayak. Experience tranquility and fun, making your
            stay unforgettable!
          </p>
        </div>
        <div
          class="bg-swimming bg-cover bg-center rounded-lg my-10 mx-10 w-1/2"
        ></div>
      </div>
    </section>
    <section id="hook" class="bg-primary-green">
      <div class="flex items-center justify-center"></div>
      <div class="flex justify-center items-center h-[400px]">
        <div
          class="bg-primary-green text-white flex justify-center items-center"
        >
          <div class="flex justify-center items-center p-10 mt-10">
            <div class="w-[700px] text-center p-5">
              <h1 class="text-5xl mb-5">SIGN UP & STAY CONNECTED</h1>
              <p class="">
                Stay connected with us! Sign up now to receive the latest
                updates, exclusive offers, and exciting news straight to your
                inbox. Be the first to know about our new products, special
                promotions, and upcoming events. Join our community and never
                miss out on important announcements and insider info!
              </p>
            </div>
            <div class="flex flex-col space-y-5 items-center mb-5">
              <input
                placeholder="Email"
                class="w-[300px] rounded-3xl px-6 py-3 text-lg"
              />
              <button>
                <Button
                  class="border border-primary-dark px-10 w-[300px]"
                  BtnSize="large"
                  >Stay Connected</Button
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
