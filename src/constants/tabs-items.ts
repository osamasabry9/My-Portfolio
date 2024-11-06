import { TabItem } from "@/types/interfaces";
import { AppWindow, PencilRuler, TabletSmartphone, TerminalSquare } from "lucide-react";

export const tabsItems : TabItem[] = [
          {
            value: "Frontend",
            icon: AppWindow,
            label: "Frontend",
          },
          {
            value: "Backend",
            icon: TerminalSquare,
            label: "Backend",
          },
          {
            value: "Mobile App",
            icon: TabletSmartphone,
            label: "Mobile App",
          },
          {
            value: "Tools",
            icon: PencilRuler,
            label: "Tools",
          }
]