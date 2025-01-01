import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import RouterToTop from './utils/RouterToTop';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <RouterToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
        <main>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          corrupti dolor voluptatibus iure a similique error quae harum
          adipisci, quam hic perferendis reprehenderit fuga deleniti facere
          ducimus, libero debitis aspernatur dicta? Ullam nulla, inventore
          itaque, laborum fugiat quos expedita corporis tempore dolores possimus
          necessitatibus iste ut accusantium omnis, aspernatur mollitia modi
          animi laboriosam. Ullam obcaecati delectus eaque id sunt a modi veniam
          quos odio alias cum, ad atque magnam reiciendis in temporibus quae
          dicta. Explicabo, aperiam perspiciatis vero alias pariatur cum sunt
          numquam sapiente debitis dolorum sequi sed omnis. Aspernatur
          consequatur libero quidem. Dolore aliquam iusto delectus amet
          doloremque reprehenderit error dolorum ut soluta? Consequuntur
          consequatur sapiente rerum iusto nisi eaque dignissimos reiciendis,
          soluta voluptatibus omnis similique nulla ipsum vero perspiciatis
          voluptatem assumenda, voluptates aperiam doloribus quas? Facere
          accusamus perspiciatis eveniet, ratione, soluta voluptatum repellendus
          esse, nobis dolorum repudiandae nisi natus in impedit aut! Maxime,
          expedita fugit est, sequi ea accusantium cupiditate perspiciatis
          assumenda blanditiis animi, nihil quaerat aperiam. Amet recusandae
          ducimus expedita quis deleniti nam vero illum inventore voluptatibus
          hic vitae, tenetur quod id? Iusto quis, nam blanditiis labore vel
          dolore quam sit temporibus totam, beatae amet recusandae aut aliquam
          dicta, fugiat aperiam similique quia. Ab, doloribus reiciendis dolorem
          dolore excepturi cum praesentium aspernatur in! Possimus vel minus
          perferendis id, quisquam iste odit perspiciatis velit deleniti. Totam
          in animi quam quasi expedita aliquid quo sint doloremque
          necessitatibus nemo, distinctio inventore accusamus quisquam error,
          delectus magni, sequi repellat dicta soluta minima nisi maiores.
          Blanditiis, placeat minima sunt temporibus fugit aspernatur, molestias
          necessitatibus labore, delectus dignissimos eum impedit tempora soluta
          optio officia laborum suscipit veniam itaque aliquid earum. Animi
          dolorum hic a incidunt commodi nostrum labore eius pariatur quis
          adipisci illo, maxime assumenda modi dignissimos, voluptas laboriosam
          repudiandae harum, facere facilis porro totam autem doloribus
          quibusdam. Debitis officiis odio, fugit ducimus perspiciatis sapiente
          recusandae quaerat iste, facere velit laudantium. Laboriosam sunt
          nulla quae repudiandae ea, blanditiis, atque odio dolorum ut labore
          itaque esse asperiores consequuntur eaque amet nostrum a assumenda
          nobis, odit nihil? Expedita hic quia sapiente harum molestias fuga
          laboriosam totam, sit id ea architecto odit eius deserunt quos neque
          nemo corporis cupiditate voluptatibus! Quo aliquam dignissimos itaque
          asperiores officia, dolorum cupiditate libero cumque consequatur, quod
          ipsum similique explicabo dolorem harum praesentium. Illo, laborum,
          veritatis ratione cupiditate maxime in nobis itaque sequi quis
          deleniti voluptatibus optio repellat quibusdam doloribus suscipit
          culpa officiis assumenda autem nemo alias dolores voluptatem
          laboriosam aut fugiat! Asperiores tenetur temporibus expedita illo,
          eligendi odio deserunt quasi similique esse a quisquam enim molestias
          sed aut accusamus neque quae voluptatem aliquid repudiandae,
          laudantium porro, dolorem voluptate nulla. Mollitia tempore officia
          impedit ratione architecto quae qui et dolorum tempora maxime aliquam
          ipsum cum, officiis blanditiis maiores veritatis optio fugiat earum
          porro quod accusantium. Veritatis similique perspiciatis aliquam
          molestiae, iusto vel doloremque non, enim quos omnis porro, facere
          atque ullam harum quia voluptates. Perspiciatis, fugit quibusdam
          quidem, iure nam soluta ut error quas repellat facere fugiat earum.
          Sequi, delectus provident, deserunt quia sapiente voluptatem
          consequatur ipsum odio, illo error eligendi?
        </main>

        <Footer />
      </Router>
    </>
  );
};

export default App;
