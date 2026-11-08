import RecipeFinder from '@/components/containers/RecipeFinder';
import Hills from '@/components/ui/Hills';
import OvalFrame from '@/components/ui/OvalFrame';
export default function Home() {
  return (
    <main>
      <div className="px-5 pt-10">
        <OvalFrame>
          <p className="font-medium text-sky">Healthy Asian recipes from your fridge</p>
          <h1 className="text-5xl font-bold text-bark sm:text-7xl">What’s in your fridge?</h1>
        </OvalFrame>
      </div>
      <RecipeFinder />
      <Hills />
    </main>
  );
}