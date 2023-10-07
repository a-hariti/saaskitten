<script lang="ts">
  const testimonials = [
    {
      name: "Josh Tyson",
      title: "Indie Hacker | Founder of Zygo",
      avatar:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      quote:
        "These components are adapted from Preline. I love the design and the code quality. Check them out at preline.co"
    },
    {
      name: "Alisa Williams",
      title: "Entrepreneur | Happy customer",
      avatar:
        "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80",
      quote:
        "The product is great. I've been using it for a while and I'm very happy with it. I would recommend it to anyone."
    },
    {
      name: "Luisa",
      title: "Senior Director of Operations | Fitbit",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      quote: "I was struggling with a problem for a long time and this product solved it. I'm so happy."
    },
    {
      name: "Jason Smith",
      title: "CEO | Company",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      quote: "It saves me a lot of time. I used to do this manually and it took me hours. Now I can do it in minutes."
    }
  ];
</script>

<section class="max-w-[85rem] px-4 py-14 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Title -->
  <div class="mx-auto mb-6 sm:mb-10 md:mb-16 text-center max-w-2xl">
    <h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold">Show some social proof</h2>

    <p class="mt-4 text-muted-foreground">Nobody wants to be a guinea pig</p>
  </div>
  <!-- End Title -->

  <!-- Grid -->
  <div class="grid sm:grid-cols-2 gap-6 max-w-screen-md mx-auto">
    {#each testimonials as testimonial}
      <!-- Card -->
      <div class="flex h-auto max-w-sm mx-auto bg-muted rounded-lg">
        <div class="flex flex-col rounded-xl">
          <div class="flex-auto p-4 md:p-6">
            <p class="text-base italic md:text-lg text-muted-foreground">{testimonial.quote}</p>
          </div>
          <div class="p-4 rounded-b-xl md:px-7">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img class="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]" src={testimonial.avatar} alt="" />
              </div>
              <div class="grow ml-3">
                <p class="text-sm sm:text-base font-semibold">{testimonial.name}</p>
                <p class="text-xs text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Card -->
    {/each}
  </div>
  <!-- End Grid -->
</section>
