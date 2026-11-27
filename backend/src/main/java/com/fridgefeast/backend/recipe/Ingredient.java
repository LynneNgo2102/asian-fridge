package com.fridgefeast.backend.recipe;
import jakarta.persistence.*;

@Entity
public class Ingredient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    protected Ingredient() {}

    public String getName() { return name; }

}
