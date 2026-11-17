(() => {
  "use strict";

  // IMPORTANT:
  // This array order MUST stay identical to Android's allSpriteVariants order.
  // ST1 QR links encode collection ownership by bit position.
  const CATALOG = [
  {
    "key": "halfpeeled",
    "name": "Halfpeeled",
    "variant": "Normal",
    "rarity": "Rare",
    "image": "images/sprite_halfpeeled.png",
    "optionalImage": false
  },
  {
    "key": "halfpeeled",
    "name": "Halfpeeled",
    "variant": "Fortune",
    "rarity": "Rare",
    "image": "images/sprite_halfpeeled_fortune.png",
    "optionalImage": false
  },
  {
    "key": "halfpeeled",
    "name": "Halfpeeled",
    "variant": "Cursed",
    "rarity": "Rare",
    "image": "images/sprite_halfpeeled_cursed.png",
    "optionalImage": false
  },
  {
    "key": "re_pete",
    "name": "Re-Pete",
    "variant": "Normal",
    "rarity": "Rare",
    "image": "images/sprite_re_pete.png",
    "optionalImage": false
  },
  {
    "key": "re_pete",
    "name": "Re-Pete",
    "variant": "Fortune",
    "rarity": "Rare",
    "image": "images/sprite_re_pete_fortune.png",
    "optionalImage": false
  },
  {
    "key": "re_pete",
    "name": "Re-Pete",
    "variant": "Cursed",
    "rarity": "Rare",
    "image": "images/sprite_re_pete_cursed.png",
    "optionalImage": false
  },
  {
    "key": "barry_ofish",
    "name": "Barry O'Fish",
    "variant": "Normal",
    "rarity": "Rare",
    "image": "images/sprite_barry_ofish.png",
    "optionalImage": false
  },
  {
    "key": "barry_ofish",
    "name": "Barry O'Fish",
    "variant": "Fortune",
    "rarity": "Rare",
    "image": "images/sprite_barry_ofish_fortune.png",
    "optionalImage": false
  },
  {
    "key": "barry_ofish",
    "name": "Barry O'Fish",
    "variant": "Cursed",
    "rarity": "Rare",
    "image": "images/sprite_barry_ofish_cursed.png",
    "optionalImage": false
  },
  {
    "key": "chester",
    "name": "Chester",
    "variant": "Normal",
    "rarity": "Epic",
    "image": "images/sprite_chester.png",
    "optionalImage": false
  },
  {
    "key": "chester",
    "name": "Chester",
    "variant": "Fortune",
    "rarity": "Epic",
    "image": "images/sprite_chester_fortune.png",
    "optionalImage": false
  },
  {
    "key": "chester",
    "name": "Chester",
    "variant": "Cursed",
    "rarity": "Epic",
    "image": "images/sprite_chester_cursed.png",
    "optionalImage": false
  },
  {
    "key": "exmarks",
    "name": "Exmarks",
    "variant": "Normal",
    "rarity": "Epic",
    "image": "images/sprite_exmarks.png",
    "optionalImage": false
  },
  {
    "key": "exmarks",
    "name": "Exmarks",
    "variant": "Fortune",
    "rarity": "Epic",
    "image": "images/sprite_exmarks_fortune.png",
    "optionalImage": false
  },
  {
    "key": "exmarks",
    "name": "Exmarks",
    "variant": "Cursed",
    "rarity": "Epic",
    "image": "images/sprite_exmarks_cursed.png",
    "optionalImage": false
  },
  {
    "key": "wayfinder",
    "name": "Wayfinder",
    "variant": "Normal",
    "rarity": "Rare",
    "image": "images/sprite_wayfinder.png",
    "optionalImage": false
  },
  {
    "key": "wayfinder",
    "name": "Wayfinder",
    "variant": "Fortune",
    "rarity": "Rare",
    "image": "images/sprite_wayfinder_fortune.png",
    "optionalImage": false
  },
  {
    "key": "wayfinder",
    "name": "Wayfinder",
    "variant": "Cursed",
    "rarity": "Rare",
    "image": "images/sprite_wayfinder_cursed.png",
    "optionalImage": false
  },
  {
    "key": "kelper",
    "name": "Kelper",
    "variant": "Normal",
    "rarity": "Epic",
    "image": "images/sprite_kelper.png",
    "optionalImage": false
  },
  {
    "key": "kelper",
    "name": "Kelper",
    "variant": "Fortune",
    "rarity": "Epic",
    "image": "images/sprite_kelper_fortune.png",
    "optionalImage": false
  },
  {
    "key": "sweet_dreams",
    "name": "Sweet Dreams",
    "variant": "Normal",
    "rarity": "Mythic",
    "image": "images/sprite_sweet_dreams.png",
    "optionalImage": false
  },
  {
    "key": "lil_squibbly",
    "name": "Lil' Squibbly",
    "variant": "Normal",
    "rarity": "Epic",
    "image": "images/sprite_lil_squibbly.png",
    "optionalImage": false
  },
  {
    "key": "lil_squibbly",
    "name": "Lil' Squibbly",
    "variant": "Fortune",
    "rarity": "Epic",
    "image": "images/sprite_lil_squibbly_fortune.png",
    "optionalImage": false
  },
  {
    "key": "lil_squibbly",
    "name": "Lil' Squibbly",
    "variant": "Cursed",
    "rarity": "Epic",
    "image": "images/sprite_lil_squibbly_cursed.png",
    "optionalImage": false
  },
  {
    "key": "lil_flacko",
    "name": "Lil' Flacko",
    "variant": "Normal",
    "rarity": "Legendary",
    "image": "images/sprite_lil_flacko.png",
    "optionalImage": false
  },
  {
    "key": "lil_flacko",
    "name": "Lil' Flacko",
    "variant": "Fortune",
    "rarity": "Legendary",
    "image": "images/sprite_lil_flacko_fortune.png",
    "optionalImage": false
  },
  {
    "key": "lil_flacko",
    "name": "Lil' Flacko",
    "variant": "Cursed",
    "rarity": "Legendary",
    "image": "images/sprite_lil_flacko_cursed.png",
    "optionalImage": false
  },
  {
    "key": "lil_uzi_vert_jr",
    "name": "Lil' Uzi Vert Jr.",
    "variant": "Normal",
    "rarity": "Legendary",
    "image": "images/sprite_lil_uzi_vert_jr.png",
    "optionalImage": false
  },
  {
    "key": "lil_uzi_vert_jr",
    "name": "Lil' Uzi Vert Jr.",
    "variant": "Fortune",
    "rarity": "Legendary",
    "image": "images/sprite_lil_uzi_vert_jr_fortune.png",
    "optionalImage": false
  },
  {
    "key": "lil_uzi_vert_jr",
    "name": "Lil' Uzi Vert Jr.",
    "variant": "Cursed",
    "rarity": "Legendary",
    "image": "images/sprite_lil_uzi_vert_jr_cursed.png",
    "optionalImage": false
  },
  {
    "key": "plundarrgh",
    "name": "Plundarrgh",
    "variant": "Normal",
    "rarity": "Mythic",
    "image": "images/sprite_plundarrgh.png",
    "optionalImage": false
  },
  {
    "key": "plundarrgh",
    "name": "Plundarrgh",
    "variant": "Fortune",
    "rarity": "Mythic",
    "image": "images/sprite_plundarrgh_fortune.png",
    "optionalImage": false
  },
  {
    "key": "plundarrgh",
    "name": "Plundarrgh",
    "variant": "Cursed",
    "rarity": "Mythic",
    "image": "images/sprite_plundarrgh_cursed.png",
    "optionalImage": false
  },
  {
    "key": "transponder_snail",
    "name": "Transponder Snail",
    "variant": "Normal",
    "rarity": "Legendary",
    "image": "images/sprite_transponder_snail.png",
    "optionalImage": false
  },
  {
    "key": "mini_miku",
    "name": "Mini Miku",
    "variant": "Normal",
    "rarity": "Mythic",
    "image": "images/sprite_mini_miku.png",
    "optionalImage": false
  },
  {
    "key": "mini_miku",
    "name": "Mini Miku",
    "variant": "Fortune",
    "rarity": "Mythic",
    "image": "images/sprite_mini_miku_fortune.png",
    "optionalImage": false
  },
  {
    "key": "mini_miku",
    "name": "Mini Miku",
    "variant": "Cursed",
    "rarity": "Mythic",
    "image": "images/sprite_mini_miku_cursed.png",
    "optionalImage": false
  },
  {
    "key": "mini_miku",
    "name": "Mini Miku",
    "variant": "Gold",
    "rarity": "Mythic",
    "image": "images/sprite_mini_miku_gold.png",
    "optionalImage": true
  },
  {
    "key": "squiplash",
    "name": "Squiplash",
    "variant": "Normal",
    "rarity": "Epic",
    "image": "images/sprite_squiplash.png",
    "optionalImage": false
  },
  {
    "key": "squiplash",
    "name": "Squiplash",
    "variant": "Fortune",
    "rarity": "Epic",
    "image": "images/sprite_squiplash_fortune.png",
    "optionalImage": false
  },
  {
    "key": "squiplash",
    "name": "Squiplash",
    "variant": "Cursed",
    "rarity": "Epic",
    "image": "images/sprite_squiplash_cursed.png",
    "optionalImage": false
  },
  {
    "key": "squiplash",
    "name": "Squiplash",
    "variant": "Gold",
    "rarity": "Epic",
    "image": "images/sprite_squiplash_gold.png",
    "optionalImage": true
  },
  {
    "key": "zee",
    "name": "Zee",
    "variant": "Normal",
    "rarity": "Mythic",
    "image": "images/sprite_zee.png",
    "optionalImage": false
  }
];

  const rarityColors = {
    Rare: "#2e7bd7",
    Epic: "#8e4ec6",
    Legendary: "#e28a32",
    Mythic: "#f2c94c"
  };

  const grid = document.getElementById("spriteGrid");
  const message = document.getElementById("message");
  const ownedCount = document.getElementById("ownedCount");
  const missingCount = document.getElementById("missingCount");
  const totalCount = document.getElementById("totalCount");
  const shareStatus = document.getElementById("shareStatus");
  const filterButtons = [...document.querySelectorAll(".filter-button")];

  let rows = [];
  let currentFilter = "all";

  function decodeBase64Url(value) {
    let normalized = value.replace(/-/g, "+").replace(/_/g, "/");
    while (normalized.length % 4) normalized += "=";
    const raw = atob(normalized);
    return Uint8Array.from(raw, ch => ch.charCodeAt(0));
  }

  function readOwnedBit(bytes, index) {
    const byteIndex = Math.floor(index / 8);
    const bitIndex = index % 8;
    if (byteIndex >= bytes.length) return false;
    return (bytes[byteIndex] & (1 << bitIndex)) !== 0;
  }

  function parseShare() {
    const raw = decodeURIComponent(location.hash.replace(/^#/, ""));

    if (!raw) {
      throw new Error("No Sprite Tracker collection was included in this link.");
    }

    const parts = raw.split("|");
    if (parts.length !== 3 || parts[0] !== "ST1") {
      throw new Error("This Sprite Tracker collection link is not recognized.");
    }

    const declaredCount = Number.parseInt(parts[1], 10);
    if (!Number.isInteger(declaredCount) || declaredCount < 0) {
      throw new Error("This collection link contains an invalid Sprite count.");
    }

    const bytes = decodeBase64Url(parts[2]);

    // Older ST1 links remain compatible because newly released variants are
    // appended to the catalog. Only variants that existed for that link are shown.
    const supportedCount = Math.min(declaredCount, CATALOG.length);
    const activeCatalog = CATALOG.slice(0, supportedCount);

    return activeCatalog.map((sprite, index) => ({
      ...sprite,
      index,
      owned: readOwnedBit(bytes, index)
    }));
  }

  function makeCard(row) {
    const card = document.createElement("article");
    card.className = `sprite-card ${row.owned ? "owned" : "missing"}`;
    card.dataset.state = row.owned ? "owned" : "missing";
    card.style.setProperty("--rarity", rarityColors[row.rarity] || "#56616c");

    const imageWrap = document.createElement("div");
    imageWrap.className = "sprite-image-wrap";

    const img = document.createElement("img");
    img.className = "sprite-image";
    img.src = row.image;
    img.alt = `${row.name} — ${row.variant}`;
    img.loading = "lazy";

    const fallback = document.createElement("div");
    fallback.className = "image-fallback";
    fallback.textContent = `${row.name}\n${row.variant}`;

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = row.rarity;

    const state = document.createElement("span");
    state.className = "state";
    state.textContent = row.owned ? "✓" : "—";
    state.title = row.owned ? "Owned" : "Missing";

    img.addEventListener("error", () => {
      // Gold Mini Miku / Squiplash are already reserved in the Android QR
      // ordering, but remain hidden from the web page until their PNG exists.
      if (row.optionalImage) {
        card.hidden = true;
        card.dataset.optionalHidden = "true";
        updateVisibleTotals();
      } else {
        card.classList.add("image-missing");
      }
    });

    imageWrap.append(img, fallback, badge, state);

    const info = document.createElement("div");
    info.className = "sprite-info";

    const name = document.createElement("p");
    name.className = "sprite-name";
    name.textContent = row.name;

    const variant = document.createElement("p");
    variant.className = "sprite-variant";
    variant.textContent = row.variant;

    info.append(name, variant);
    card.append(imageWrap, info);
    return card;
  }

  function updateVisibleTotals() {
    const visibleRows = rows.filter(row => {
      const card = row.card;
      return !card.dataset.optionalHidden;
    });

    const owned = visibleRows.filter(row => row.owned).length;
    const total = visibleRows.length;

    ownedCount.textContent = String(owned);
    missingCount.textContent = String(total - owned);
    totalCount.textContent = String(total);
  }

  function applyFilter() {
    rows.forEach(row => {
      const optionalHidden = row.card.dataset.optionalHidden === "true";
      const matches =
        currentFilter === "all" ||
        (currentFilter === "owned" && row.owned) ||
        (currentFilter === "missing" && !row.owned);

      row.card.hidden = optionalHidden || !matches;
    });
  }

  function render() {
    grid.replaceChildren();

    rows = parseShare().map(row => {
      const card = makeCard(row);
      grid.appendChild(card);
      return { ...row, card };
    });

    updateVisibleTotals();
    applyFilter();

    shareStatus.textContent = "Collection loaded";
  }

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      currentFilter = button.dataset.filter || "all";
      filterButtons.forEach(item => item.classList.toggle("active", item === button));
      applyFilter();
    });
  });

  try {
    render();
  } catch (error) {
    console.error(error);
    shareStatus.textContent = "Unable to load";
    message.hidden = false;
    message.textContent = error instanceof Error ? error.message : "Unable to read this collection link.";
    ownedCount.textContent = "—";
    missingCount.textContent = "—";
    totalCount.textContent = "—";
  }
})();
