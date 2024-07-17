
import Layout from '@/layout';
import Carousel from '@/components/Carousel';
import AboutUs from '@/components/AboutUs';

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <AboutUs />
    </Layout>
  );
}
