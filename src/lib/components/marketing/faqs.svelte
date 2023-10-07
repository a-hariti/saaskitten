<script lang="ts">
  import * as Accordion from "$lib/components/ui/accordion";
  import Section from "./section.svelte";

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

<Section>
  <span slot="title">Frequently asked questions</span>
  <span slot="subtitle">Break buyers resistence and cut the back and forth</span>
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
</Section>
