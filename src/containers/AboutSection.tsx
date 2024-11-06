<<<<<<< HEAD
import React from 'react'

const AboutSection = () => {
  return (
    <div>AboutSection</div>
  )
}

export default AboutSection
=======
import SectionTitle from "@/components/SectionTitle";
import { buttonVariants } from "@/components/ui/button";
import { Effect } from "@/components/ui/effects";
import { getStatistics } from "@/constants/statistics";
import { cn } from "@/lib/utils";
import { ArrowRightCircle } from "lucide-react";
import React from "react";

const AboutSection = () => {
  const { statistics } = getStatistics();

  return (
    <section id="about" className="relative">
      <Effect className="-left-32 md:-left-44 -top-12" />
      <article className="relative max-w-[50rem] mx-auto bg-background/90 border rounded-lg p-6 flex flex-col gap-y-6">
        <Effect
          variant={"square"}
          size={"default"}
          className="-right-5  -top-4 -z-10 rotate-12"
        />
        <SectionTitle
          title="About Me"
          description="a little bit about myself"
          className="items-start"
        />
        <p className="text-lg">
          With a B.Sc. in Computer Science and more than three years of
          practical experience creating scalable front-end solutions for online
          and mobile platforms, this person is a highly driven and meticulous
          mobile application developer. Strong foundation in full-stack
          development and proficiency with React Native and Flutter for mobile
          applications. Knowledgeable about HTML5, CSS3, JavaScript, and using
          responsive design concepts for the best possible performance on a
          variety of devices. Knowledgeable about working directly with UI/UX
          designers to convert their ideas into code. Enthusiastic about
          improving application speed and producing clear, maintainable code.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4  items-end">
          {statistics.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start gap-y-2"
            >
              <p className="text-foreground text-2xl md:text-4xl font-bold">
                +{item.value}
              </p>
              <p className="whitespace-nowrap text-sm md:text-lg">
                {item.label}
              </p>
            </div>
          ))}

          <a
            href="#skills"
            className={cn(
              buttonVariants({ size: "lg" }),
              "col-span-2 md:col-span-1"
            )}
          >
            <span>discover skills</span>
            <ArrowRightCircle className="size-4" />
          </a>
        </div>
      </article>
    </section>
  );
};

export default AboutSection;
>>>>>>> 6491077fa574468ca226689f55b93cb087045e34
