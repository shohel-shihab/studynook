import Banner from "@/components/Banner";
import Newsletter from "@/components/Newsletter";
import RoomCards from "@/components/RoomCards";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <RoomCards></RoomCards>
     <Testimonials></Testimonials>
     <Newsletter></Newsletter>
    </div>
  );
}
