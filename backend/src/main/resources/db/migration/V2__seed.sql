-- NOTE: the macro numbers below are placeholders until the nutrition API fills in real values.

INSERT INTO ingredient (name) VALUES
                                  ('chicken'), ('rice'), ('lemongrass'), ('fish sauce'), ('garlic'), ('sesame oil'),
                                  ('salmon'), ('soy sauce'), ('cucumber'), ('tofu'), ('egg'), ('gochugaru'),
                                  ('thai basil'), ('chili'), ('cabbage'), ('lemon'), ('olive oil'), ('green onion'),
                                  ('rice paper'), ('shrimp'), ('lettuce'), ('carrot'), ('mint'),
                                  ('vegetable oil'), ('lemon zest'), ('basil'), ('chili flakes'), ('tamari'),
                                  ('lime'), ('garlic powder'), ('firm tofu');

INSERT INTO ingredient_alias (alias, ingredient_id)
SELECT v.alias, i.id
FROM (VALUES
          ('chicken breast', 'chicken'), ('chicken thigh', 'chicken'), ('eggs', 'egg'),
          ('jasmine rice', 'rice'), ('white rice', 'rice')
     ) AS v(alias, name)
         JOIN ingredient i ON i.name = v.name;

INSERT INTO ingredient_substitute (ingredient_id, substitute_id, note)
SELECT i.id, s.id, v.note
FROM (VALUES
          ('fish sauce', 'soy sauce', 'less funky, add a squeeze of lime if you have it'),
          ('sesame oil', 'olive oil', 'milder, without the nutty flavor'),
          ('sesame oil', 'vegetable oil', 'neutral, without the nutty flavor'),
          ('lemongrass', 'lemon zest', 'about 1 tsp per stalk'),
          ('thai basil', 'basil', 'milder and less peppery'),
          ('gochugaru', 'chili flakes', 'use a little less, they’re usually hotter'),
          ('soy sauce', 'tamari', 'same amount, and a gluten-free option'),
          ('lemon', 'lime', 'same amount'),
          ('chili', 'chili flakes', 'a pinch instead of fresh'),
          ('garlic', 'garlic powder', 'about 1/8 tsp per clove'),
          ('chicken', 'firm tofu', 'a vegetarian option, cook until golden'),
          ('olive oil', 'vegetable oil', 'same amount')
     ) AS v(ingredient, substitute, note)
         JOIN ingredient i ON i.name = v.ingredient
         JOIN ingredient s ON s.name = v.substitute;

INSERT INTO recipe (id, title, cuisine, meal_type, cook_minutes, servings,
                    calories, protein_g, carbs_g, fat_g, fibre_g, note) VALUES
                                                                            (1, 'Lemongrass chicken rice bowl', 'Vietnamese', 'Dinner', 30, 2, 520, 38, 55, 14, 4,
                                                                             'Bruise the lemongrass with the back of a knife before mincing so it gives more flavor.'),
                                                                            (2, 'Salmon rice bowl', 'Japanese', 'Lunch', 20, 2, 480, 34, 50, 15, 3,
                                                                             'Pat the salmon dry before searing for a crisper skin.'),
                                                                            (3, 'Soft tofu stew', 'Korean', 'Dinner', 25, 2, 310, 22, 14, 18, 4,
                                                                             'Add the tofu in big chunks, since soft tofu breaks apart easily when stirred.'),
                                                                            (4, 'Thai basil chicken', 'Thai', 'Lunch', 20, 2, 430, 36, 40, 13, 3,
                                                                             'Add the basil off the heat so it stays bright and fragrant.'),
                                                                            (5, 'Chicken and cabbage salad bowl', 'Western', 'Lunch', 15, 2, 380, 35, 20, 18, 6,
                                                                             'Salt the cabbage lightly and let it sit for 5 minutes for a softer crunch.'),
                                                                            (6, 'Egg and rice breakfast bowl', 'Japanese', 'Breakfast', 10, 1, 350, 16, 52, 8, 2,
                                                                             'Use a very fresh egg, and make sure the rice is hot so the egg gets gently cooked.'),
                                                                            (7, 'Fresh shrimp spring rolls', 'Vietnamese', 'Snack', 25, 2, 210, 14, 30, 3, 3,
                                                                             'Don’t soak the rice paper for long. It keeps softening while you fill it.');

INSERT INTO recipe_ingredient (recipe_id, ingredient_id, amount, is_optional, sort_order)
SELECT v.recipe_id, i.id, v.amount, v.is_optional, v.sort_order
FROM (VALUES
          (1, 'chicken', '300 g', false, 1),
          (1, 'rice', '1 cup, uncooked', false, 2),
          (1, 'lemongrass', '2 stalks', false, 3),
          (1, 'fish sauce', '1 tbsp', false, 4),
          (1, 'garlic', '2 cloves', false, 5),
          (1, 'sesame oil', '1 tsp', true, 6),
          (2, 'salmon', '2 fillets', false, 1),
          (2, 'rice', '1 cup, uncooked', false, 2),
          (2, 'soy sauce', '2 tbsp', false, 3),
          (2, 'cucumber', '1/2', false, 4),
          (2, 'sesame oil', '1 tsp', true, 5),
          (3, 'tofu', '300 g, soft', false, 1),
          (3, 'egg', '2', false, 2),
          (3, 'garlic', '2 cloves', false, 3),
          (3, 'gochugaru', '1 tbsp', false, 4),
          (3, 'sesame oil', '1 tsp', true, 5),
          (4, 'chicken', '300 g', false, 1),
          (4, 'rice', '1 cup, uncooked', false, 2),
          (4, 'thai basil', '1 cup of leaves', false, 3),
          (4, 'garlic', '3 cloves', false, 4),
          (4, 'fish sauce', '1 tbsp', false, 5),
          (4, 'chili', '2', true, 6),
          (5, 'chicken', '300 g', false, 1),
          (5, 'cabbage', '2 cups, shredded', false, 2),
          (5, 'lemon', '1', false, 3),
          (5, 'olive oil', '1 tbsp', true, 4),
          (6, 'egg', '1', false, 1),
          (6, 'rice', '1 cup, cooked', false, 2),
          (6, 'soy sauce', '1 tsp', false, 3),
          (6, 'green onion', '1 stalk', true, 4),
          (7, 'rice paper', '6 sheets', false, 1),
          (7, 'shrimp', '12, cooked', false, 2),
          (7, 'lettuce', '6 leaves', false, 3),
          (7, 'carrot', '1, julienned', false, 4),
          (7, 'mint', '1 handful', true, 5)
     ) AS v(recipe_id, name, amount, is_optional, sort_order)
         JOIN ingredient i ON i.name = v.name;

INSERT INTO recipe_step (recipe_id, sort_order, instruction) VALUES
                                                                 (1, 1, 'Cook the rice according to the packet.'),
                                                                 (1, 2, 'Mince the lemongrass and garlic, then marinate the sliced chicken with them and the fish sauce for 15 minutes.'),
                                                                 (1, 3, 'Pan-fry the chicken over medium-high heat until golden and cooked through, about 8 to 10 minutes.'),
                                                                 (1, 4, 'Serve over the rice and drizzle with sesame oil if you have it.'),
                                                                 (2, 1, 'Cook the rice according to the packet.'),
                                                                 (2, 2, 'Pan-sear the salmon for 3 to 4 minutes per side.'),
                                                                 (2, 3, 'Slice the cucumber.'),
                                                                 (2, 4, 'Flake the salmon over the rice, add the cucumber and splash with soy sauce.'),
                                                                 (3, 1, 'Sauté the minced garlic and gochugaru in a little oil for 1 minute.'),
                                                                 (3, 2, 'Add 2 cups of water and bring to a simmer.'),
                                                                 (3, 3, 'Add the tofu in large chunks and simmer for 5 minutes.'),
                                                                 (3, 4, 'Crack in the eggs, cover and cook for 2 minutes.'),
                                                                 (4, 1, 'Cook the rice according to the packet.'),
                                                                 (4, 2, 'Stir-fry the garlic (and chilies, if using) for 30 seconds.'),
                                                                 (4, 3, 'Add the minced chicken and cook until done, then stir in the fish sauce.'),
                                                                 (4, 4, 'Turn off the heat, stir in the basil and serve over the rice.'),
                                                                 (5, 1, 'Pan-fry or poach the chicken until cooked through, then slice it.'),
                                                                 (5, 2, 'Toss the shredded cabbage with lemon juice (and olive oil if using).'),
                                                                 (5, 3, 'Top the cabbage with the chicken.'),
                                                                 (6, 1, 'Warm the cooked rice and put it in a bowl.'),
                                                                 (6, 2, 'Make a small well in the rice and crack the egg into it.'),
                                                                 (6, 3, 'Add the soy sauce and stir quickly until the egg coats the rice and cooks from the heat.'),
                                                                 (6, 4, 'Top with sliced green onion if you have it.'),
                                                                 (7, 1, 'Dip one rice paper sheet in warm water for a few seconds until it softens.'),
                                                                 (7, 2, 'Lay it flat and add lettuce, carrot, mint and two shrimp near the edge.'),
                                                                 (7, 3, 'Fold in the sides and roll it up tightly.'),
                                                                 (7, 4, 'Repeat with the rest and serve with your favorite dipping sauce.');

INSERT INTO recipe_image (recipe_id, sort_order, src, alt) VALUES
                                                               (1, 1, '/images/recipes/lemongrass-chicken-1.jpg', 'Bowl of rice topped with golden lemongrass chicken and sliced cucumber'),
                                                               (1, 2, '/images/recipes/lemongrass-chicken-2.jpg', 'Close-up of lemongrass chicken sizzling in a pan');

-- we gave the recipes ids by hand, so move the counter past them for future inserts
SELECT setval(pg_get_serial_sequence('recipe', 'id'), (SELECT MAX(id) FROM recipe));