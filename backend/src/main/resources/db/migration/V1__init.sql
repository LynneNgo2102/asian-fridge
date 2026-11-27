CREATE TABLE ingredient (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);

--"chicken breast" -> chicken
CREATE TABLE ingredient_alias (
    alias TEXT PRIMARY KEY,
    ingredient_id BIGINT NOT NULL REFERENCES ingredient (id)
);

--no fish sauce ? try soy sauce
CREATE TABLE ingredient_substitute (
    ingredient_id BIGINT NOT NULL REFERENCES ingredient (id),
    substitute_id BIGINT NOT NULL REFERENCES ingredient (id),
    note          TEXT,
    PRIMARY KEY (ingredient_id, substitute_id)
);

CREATE TABLE recipe (
    id           BIGSERIAL PRIMARY KEY,
    title        TEXT NOT NULL,
    cuisine      TEXT NOT NULL,
    meal_type    TEXT NOT NULL,
    cook_minutes INT NOT NULL,
    servings     INT NOT NULL,
    calories     INT NOT NULL,
    protein_g    DOUBLE PRECISION NOT NULL,
    carbs_g      DOUBLE PRECISION NOT NULL,
    fat_g        DOUBLE PRECISION NOT NULL,
    fibre_g      DOUBLE PRECISION NOT NULL,
    note         TEXT
);
CREATE TABLE recipe_ingredient (
                                   id            BIGSERIAL PRIMARY KEY,
                                   recipe_id     BIGINT NOT NULL REFERENCES recipe (id) ON DELETE CASCADE,
                                   ingredient_id BIGINT NOT NULL REFERENCES ingredient (id),
                                   amount        TEXT NOT NULL,
                                   is_optional   BOOLEAN NOT NULL DEFAULT FALSE,  -- optional items don't count against the match score
                                   sort_order    INT NOT NULL,
                                   UNIQUE (recipe_id, ingredient_id)
);

CREATE TABLE recipe_step (
                             id          BIGSERIAL PRIMARY KEY,
                             recipe_id   BIGINT NOT NULL REFERENCES recipe (id) ON DELETE CASCADE,
                             sort_order  INT NOT NULL,
                             instruction TEXT NOT NULL
);

CREATE TABLE recipe_image (
                              id         BIGSERIAL PRIMARY KEY,
                              recipe_id  BIGINT NOT NULL REFERENCES recipe (id) ON DELETE CASCADE,
                              sort_order INT NOT NULL,
                              src        TEXT NOT NULL,
                              alt        TEXT NOT NULL
);