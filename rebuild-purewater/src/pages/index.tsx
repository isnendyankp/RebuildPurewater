
import Layout from '@/layout';
import Carousel from '@/components/Carousel';
import AboutUs from '@/components/AboutUs';
import WhyUs from '@/components/WhyUs';

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <AboutUs />
      <WhyUs />
    </Layout>
  );
}
