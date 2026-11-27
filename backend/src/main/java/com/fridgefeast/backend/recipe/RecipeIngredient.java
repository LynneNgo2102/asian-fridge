package com.fridgefeast.backend.recipe;
import jakarta.persistence.*;

@Entity
public class RecipeIngredient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "ingredient_id")
    private Ingredient ingredient;

    private String amount;

    @Column(name = "is_optional")
    private boolean optional;

    private int sortOrder;

    protected RecipeIngredient() {}

    public Ingredient getIngredient() { return ingredient; }
    public String getAmount() { return amount; }
    public boolean isOptional() { return optional; }
}
