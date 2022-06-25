import { iconCart, imageProductDesktop, imageProductMobile } from "./assets";

export default function App() {
  return (
    <main class="max-w-345px mx-auto | lg:max-w-2xl">
      <article class="grid lg:grid-cols-2 | bg-white rounded-xl overflow-hidden shadow-md">
        <picture>
          <source media="(min-width: 1024px)" srcset={imageProductDesktop} />
          <img src={imageProductMobile} alt="" width="345" height="242" />
        </picture>
        <div class="p-6 | flex flex-col gap-3 | lg:gap-6">
          <header class="lg:space-y-5">
            <span class="uppercase text-sm tracking-widest">Perfume</span>
            <h1 class="text-blue-dark text-3xl font-fraunces | lg:text-5xl">
              Gabrielle Essence Eau De Parfum
            </h1>
          </header>
          <p class="text-sm leading-relaxed | lg:text-base">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div class="w-full mt-5 | grid gap-4 | lg:(mt-auto gap-6)">
            <div class="flex items-center gap-3 | font-fraunces | lg:gap-9">
              <span class="text-3xl text-viridian | lg:text-4xl">$149.99</span>
              <span class="text-xs font-montserrat font-bold line-through | lg:text-base">
                $169.99
              </span>
            </div>
            <button class="py-3 | flex items-center justify-center gap-3 | bg-viridian rounded-md shadow-md text-cream outline-none | hover:bg-viridian-dark focus:(bg-viridian-dark ring-3 ring-viridian/50)">
              <img src={iconCart} alt="" />
              <span class="text-sm font-bold">Add to Cart</span>
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}
