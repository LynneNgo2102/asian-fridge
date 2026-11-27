package com.fridgefeast.backend.recipe;

import jakarta.persistence.*;

@Entity
public class RecipeImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;

    private int sortOrder;

    private String src;

    private String alt;

    protected RecipeImage() {}

    public String getSrc() { return src; }
    public String getAlt() { return alt; }
}