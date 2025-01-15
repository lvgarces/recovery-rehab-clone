import { fetchRehabCenterDetails } from "@/app/lib/data";
import HeroSection from "@/app/components/cheteauRecovery/heroSection";
import ContactBanner from "@/app/components/cheteauRecovery/contactBanner";
import Gallery from "@/app/components/cheteauRecovery/gallery";
import DetailsContainer from "@/app/components/cheteauRecovery/detailsContainer/detailsContainer";

export const metadata = {
  title: "Chateau Recovery: Utah Mental Health Facility Specialized in PTSD",
  description:
    "Explore how Chateau Recovery in Utah offers PTSD treatment, inpatient detox, and mental health support. Discover how Drug Treatment Centers aid recovery.",
  metadataBase: new URL("https://recoveryrehab.co"),
  openGraph: {
    url: "https://recoveryrehab.co/luxury-rehab-centers/chateaurecovery/",
    type: "website",
    title: "Chateau Recovery: Utah Mental Health Facility Specialized in PTSD",
    description:
      "Explore how Chateau Recovery in Utah offers PTSD treatment, inpatient detox, and mental health support. Discover how Drug Treatment Centers aid recovery.",
    images: [
      {
        url: "https://recoveryrehab.co/wp-content/uploads/2021/12/Chateau-Recovery.jpg",
        width: 1200,
        height: 630,
        alt: "Chateau Recovery Facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    domain: "recoveryrehab.co",
    url: "https://recoveryrehab.co/luxury-rehab-centers/chateaurecovery/",
    title: "Chateau Recovery: Utah Mental Health Facility Specialized in PTSD",
    description:
      "Explore how Chateau Recovery in Utah offers PTSD treatment, inpatient detox, and mental health support. Discover how Drug Treatment Centers aid recovery.",
    images: [
      "https://recoveryrehab.co/wp-content/uploads/2021/12/Chateau-Recovery.jpg",
    ],
  },
};

export default async function Page() {
  let data = await fetchRehabCenterDetails("Chateau Recovery");

  return (
    <div className="flex flex-col md:flex-row flex-wrap px-4 py-8">
      <div className="flex flex-col w-full md:w-[75%] md:px-8 mx-auto">
        <HeroSection data={data} />
        <ContactBanner data={data} />
        <DetailsContainer data={data} />
      </div>
      <div className="flex w-full mx-auto md:w-[25%] mt-4 md:mt-0">
        <Gallery data={data} />
      </div>
    </div>
  );
}
