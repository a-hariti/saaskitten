<script lang="ts">
  import * as Accordion from "$lib/components/ui/accordion";

  const questions = [
    {
      question: "How do I get started?",
      answer: "You can sign up for an account and start using the app."
    },
    {
      question: "What's your refund policy?",
      answer: "We don't offer refunds."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription at any time."
    },
    {
      question: "Where can I find the source code?",
      answer: "You can find the source code on GitHub."
    },
    {
      question: "I'm a free tier user, can I get unlimited support?",
      answer: "Yes, we are counting on it."
    },
    {
      question: "What is the difference between a hippo and a zippo?",
      answer: "One is really heavy and the other is a little lighter."
    }
  ];
</script>

<div class="max-w-screen-md px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Title -->
  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">FAQs</h2>
    <p class="mt-1 text-gray-600">Break buyers resistence and cut the back and forth</p>
  </div>
  <!-- End Title -->

  <div class="mx-auto">
    <Accordion.Root>
      {#each questions as q, i}
        <Accordion.Item value="item-{i}">
          <Accordion.Trigger>{q.question}</Accordion.Trigger>
          <Accordion.Content>{q.answer}</Accordion.Content>
        </Accordion.Item>
      {/each}
    </Accordion.Root>
  </div>
</div>
