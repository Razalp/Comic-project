"use client";

import { InfiniteMovingCards } from "../../../componets/ui/infinite-moving-cards";
import Image1 from './ComicImages/1.jpg'
import Image3 from './ComicImages/3.jpg'
import Image4 from './ComicImages/4.jpg'
import Image6 from './ComicImages/6.avif'
import Image7 from './ComicImages/7.jpg'

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-auto rounded-md flex flex-col items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "",
    name: "Charles Dickens",
    title: "Coming soon",
    image: Image1,
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Coming soon",
    image: Image6,
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "Coming soon",
    image: Image3,
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Coming soon",
    image: Image4,
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Coming soon",
    image: Image7,
  },
];

