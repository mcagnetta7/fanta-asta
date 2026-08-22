"use client";

import { useState, useEffect } from "react";

export default function FavoriteButton({ id, type = "portiere" }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const storageKey = `favorite_${type}_${id}`;

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    setIsFavorite(!!saved);
  }, [storageKey]);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const newState = !isFavorite;
    setIsFavorite(newState);

    if (newState) {
      localStorage.setItem(storageKey, "true");
    } else {
      localStorage.removeItem(storageKey);
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      className="text-xl hover:scale-110 transition-transform"
      title={isFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
    >
      {isFavorite ? "★" : "☆"}
    </button>
  );
}
