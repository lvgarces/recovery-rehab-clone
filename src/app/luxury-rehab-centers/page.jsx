import CardWrapper from "@/app/components/card";

export const metadata = {
  // Title metadata
  title: "Luxury Rehab Center Archive",

  // Description metadata
  description:
    "Explore our collection of luxury rehab centers. Discover high-end treatment options to help you or your loved ones achieve sobriety and wellness in a luxurious setting.",

  // Base URL
  metadataBase: new URL("https://recoveryrehab.co"),

  // Open Graph / Facebook Meta Tags
  openGraph: {
    url: "https://recoveryrehab.co/luxury-rehab-centers/",
    type: "website",
    title: "Luxury Rehab Center Archive | Recovery Rehab",
    description:
      "Explore our collection of luxury rehab centers. Discover high-end treatment options to help you or your loved ones achieve sobriety and wellness in a luxurious setting.",
    image: "", // Puedes añadir una imagen si la tienes
  },

  // Twitter Meta Tags
  twitter: {
    card: "summary_large_image",
    domain: "recoveryrehab.co",
    url: "https://recoveryrehab.co/luxury-rehab-centers/",
    title: "Luxury Rehab Center Archive | Recovery Rehab",
    description:
      "Explore our collection of luxury rehab centers. Discover high-end treatment options to help you or your loved ones achieve sobriety and wellness in a luxurious setting.",
    image: "", // Puedes añadir una imagen si la tienes
  },
};

export default function Page() {
  return (
    <div className="py-10">
      <CardWrapper dataType="rehabCenters" />
    </div>
  );
}
