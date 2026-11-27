package com.fridgefeast.backend.recipe;

import jakarta.persistence.*;

@Entity
public class RecipeStep {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;

    private int sortOrder;

    private String instruction;

    protected RecipeStep() {}

    public String getInstruction() { return instruction; }
}