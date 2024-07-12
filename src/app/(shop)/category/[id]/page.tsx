import { ProductGrid, Title } from '@/components';
import { Gender } from '@/interfaces';
import { initialData } from '@/seed/seed';
import { notFound } from 'next/navigation';

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Gender;
  };
}
export default function CategoryPage({ params }: Props) {
  const { id } = params;
  const products = seedProducts.filter((product) => product.gender === id);

  const labels: Record<Gender, string> = {
    men: 'Hombres',
    women: 'Mujeres',
    kid: 'Niños',
    unisex: 'Unisex',
  };

  if (id !== 'kid' && id !== 'women' && id !== 'men') {
    notFound();
  }

  return (
    <>
      <Title
        title={`Artículos para ${labels[id]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid products={products} />
    </>
  );
}
