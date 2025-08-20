import Hero from "./components/sections/Hero";
import ProductHighlight from "./products/components/ProductHighlight";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="my-16">
        {" "}
        <ProductHighlight limit={5} />
      </section>
    </div>
  );
}
