import SectionTitle from "@/components/SectionTitle";
import { Effect } from "@/components/ui/effects";
import { getSkills } from "@/lib/skills";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabsItems } from "@/constants/tabs-items";
import SkillsContainer from "@/components/skills/SkillsContainer";

const SkillsSection = async () => {
  const frontendSkills = await getSkills("Frontend");
  const backendSkills = await getSkills("Backend");
  const mobileSkills = await getSkills("Mobile App");
  const toolsSkills = await getSkills("Tools");

  return (
    <section id="skills" className="relative space-y-6">
      <Effect className="-right-20 bottom-8 md:-right-36 md:bottom-2" />
      <SectionTitle title="skills" description="my technical proficiency" />
      <Tabs defaultValue={tabsItems[0].value}>
        <div className="grid  md:grid-cols-3 gap-4 md:gap-8">
          {/* Tabs List */}
          <TabsList className="grid grid-cols-2  md:grid-cols-1 gap-2 w-full h-fit">
            {tabsItems.map((tab) => {
              const { value, label, icon: Icon } = tab;
              return (
                <TabsTrigger key={value} value={value}>
                  <Icon className="size-6" />
                  <span className="capitalize text-sm font-semibold">
                    {label}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* Tabs Content */}

          <div className="md:col-span-2 bg-background/50">
            <TabsContent value="Frontend">
              <SkillsContainer data={frontendSkills} label="Front end" />
            </TabsContent>
            <TabsContent value="Backend">
              <SkillsContainer data={backendSkills} label="Back end" />
            </TabsContent>
            <TabsContent value="Mobile App">
              <SkillsContainer data={mobileSkills} label="Mobile App" />
            </TabsContent>
            <TabsContent value="Tools">
              <SkillsContainer data={toolsSkills} label="tools" />
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </section>
  );
};

export default SkillsSection;
