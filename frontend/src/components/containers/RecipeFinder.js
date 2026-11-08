'use client';

import { useState } from 'react';
import IngredientTag from '@/components/ui/IngredientTag';
import RecipeCard from '@/components/ui/RecipeCard';
import { recipes } from '@/data/mockRecipes';
import {normalize, rankRecipes } from '@/lib/match';