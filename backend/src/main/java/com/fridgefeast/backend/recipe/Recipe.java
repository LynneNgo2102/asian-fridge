package com.fridgefeast.backend.recipe;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String cuisine;
    private String mealType;
    private int cookMinutes;
    private int servings;
    private int calories;
    private double proteinG;
    private double carbsG;
    private double fatG;
    private double fibreG;
    private String note;

    @OneToMany(mappedBy = "recipe")
    @OrderBy("sortOrder")
    private List<RecipeIngredient> ingredients = new ArrayList<>();

    @OneToMany(mappedBy = "recipe")
    @OrderBy("sortOrder")
    private List<RecipeStep> steps = new ArrayList<>();

    @OneToMany(mappedBy = "recipe")
    @OrderBy("sortOrder")
    private List<RecipeImage> images = new ArrayList<>();

    protected Recipe() {}

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getCuisine() { return cuisine; }
    public String getMealType() { return mealType; }
    public int getCookMinutes() { return cookMinutes; }
    public int getServings() { return servings; }
    public int getCalories() { return calories; }
    public double getProteinG() { return proteinG; }
    public double getCarbsG() { return carbsG; }
    public double getFatG() { return fatG; }
    public double getFibreG() { return fibreG; }
    public String getNote() { return note; }
    public List<RecipeIngredient> getIngredients() { return ingredients; }
    public List<RecipeStep> getSteps() { return steps; }
    public List<RecipeImage> getImages() { return images; }
}