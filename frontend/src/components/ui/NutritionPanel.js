import MacroBar from '@/components/ui/MacroBar';

export default function NutritionPanel({ macros, servings }) {
  return (
    <section aria-labelledby="nutrition-h" className="rounded-3xl border-4 border-bark bg-cream p-6">
      <h2 id="nutrition-h" className="text-2xl font-bold text-bark">Nutrition per serving</h2>
      <p className="text-sm">This recipe makes {servings} servings.</p>
      <div className="mt-4 grid gap-4">
        <MacroBar label="Calories" value={macros.calories} unit=" kcal" daily={2000} />
        <MacroBar label="Protein" value={macros.protein} unit="g" daily={50} />
        <MacroBar label="Carbohydrates" value={macros.carbs} unit="g" daily={275} />
        <MacroBar label="Fat" value={macros.fat} unit="g" daily={78} />
        <MacroBar label="Fibre" value={macros.fibre} unit="g" daily={28} />
      </div>
      <p className="mt-4 text-xs">DV = % of a typical daily value. Estimates only, not medical advice.</p>
    </section>
  );
}