import { Section1 } from "@/components/LandingPage/components/LandingPage.Section1";
import { Header } from "@/components/LandingPage/components/LandingPage.Header";
import { EventList } from "@/components/LandingPage/components/LandingPage.EventList";

export default function Page() {
  return (
  <div>
    <Header/>
    <Section1/>
    <EventList/>
  </div>
  )
}