// Sprite Tracker shared collection viewer
// Web catalog compatible with QR totals 122, 145, and current 162.

const LEGACY_CATALOG_122=[{"name":"Bush","variant":"Normal","rarity":"Rare","image":"images/sprite_bush.png"},{"name":"Bush","variant":"Gold","rarity":"Rare","image":"images/sprite_bush_gold.png"},{"name":"Bush","variant":"Cheat Master","rarity":"Rare","image":"images/sprite_bush_cheat_master.png"},{"name":"Bush","variant":"Loot Hacker","rarity":"Rare","image":"images/sprite_bush_loot_hacker.png"},{"name":"Bush","variant":"Bounty Hunter","rarity":"Rare","image":"images/sprite_bush_bounty_hunter.png"},{"name":"Adventure","variant":"Normal","rarity":"Rare","image":"images/sprite_adventure.png"},{"name":"Adventure","variant":"Gold","rarity":"Rare","image":"images/sprite_adventure_gold.png"},{"name":"Adventure","variant":"Cheat Master","rarity":"Rare","image":"images/sprite_adventure_cheat_master.png"},{"name":"Adventure","variant":"Loot Hacker","rarity":"Rare","image":"images/sprite_adventure_loot_hacker.png"},{"name":"Adventure","variant":"Bounty Hunter","rarity":"Rare","image":"images/sprite_adventure_bounty_hunter.png"},{"name":"Jonesy","variant":"Normal","rarity":"Rare","image":"images/sprite_jonesy.png"},{"name":"Jonesy","variant":"Gold","rarity":"Rare","image":"images/sprite_jonesy_gold.png"},{"name":"Jonesy","variant":"Cheat Master","rarity":"Rare","image":"images/sprite_jonesy_cheat_master.png"},{"name":"Jonesy","variant":"Loot Hacker","rarity":"Rare","image":"images/sprite_jonesy_loot_hacker.png"},{"name":"Jonesy","variant":"Bounty Hunter","rarity":"Rare","image":"images/sprite_jonesy_bounty_hunter.png"},{"name":"8-Bit","variant":"Normal","rarity":"Rare","image":"images/sprite_8bit.png"},{"name":"8-Bit","variant":"Gold","rarity":"Rare","image":"images/sprite_8bit_gold.png"},{"name":"8-Bit","variant":"Cheat Master","rarity":"Rare","image":"images/sprite_8bit_cheat_master.png"},{"name":"8-Bit","variant":"Loot Hacker","rarity":"Rare","image":"images/sprite_8bit_loot_hacker.png"},{"name":"8-Bit","variant":"Bounty Hunter","rarity":"Rare","image":"images/sprite_8bit_bounty_hunter.png"},{"name":"Storm Scout","variant":"Normal","rarity":"Rare","image":"images/sprite_storm_scout.png"},{"name":"Storm Scout","variant":"Gold","rarity":"Rare","image":"images/sprite_storm_scout_gold.png"},{"name":"Storm Scout","variant":"Cheat Master","rarity":"Rare","image":"images/sprite_storm_scout_cheat_master.png"},{"name":"Storm Scout","variant":"Loot Hacker","rarity":"Rare","image":"images/sprite_storm_scout_loot_hacker.png"},{"name":"Storm Scout","variant":"Bounty Hunter","rarity":"Rare","image":"images/sprite_storm_scout_bounty_hunter.png"},{"name":"Overshield","variant":"Normal","rarity":"Rare","image":"images/sprite_overshield.png"},{"name":"Overshield","variant":"Gold","rarity":"Rare","image":"images/sprite_overshield_gold.png"},{"name":"Overshield","variant":"Cheat Master","rarity":"Rare","image":"images/sprite_overshield_cheat_master.png"},{"name":"Overshield","variant":"Loot Hacker","rarity":"Rare","image":"images/sprite_overshield_loot_hacker.png"},{"name":"Overshield","variant":"Bounty Hunter","rarity":"Rare","image":"images/sprite_overshield_bounty_hunter.png"},{"name":"Mega Man","variant":"Normal","rarity":"Rare","image":"images/sprite_mega_man.png"},{"name":"Onigiri","variant":"Normal","rarity":"Rare","image":"images/sprite_onigiri.png"},{"name":"Onigiri","variant":"Gold","rarity":"Rare","image":"images/sprite_onigiri_gold.png"},{"name":"Onigiri","variant":"Cheat Master","rarity":"Rare","image":"images/sprite_onigiri_cheat_master.png"},{"name":"Onigiri","variant":"Loot Hacker","rarity":"Rare","image":"images/sprite_onigiri_loot_hacker.png"},{"name":"Onigiri","variant":"Bounty Hunter","rarity":"Rare","image":"images/sprite_onigiri_bounty_hunter.png"},{"name":"Birthday","variant":"Normal","rarity":"Rare","image":"images/sprite_birthday.png"},{"name":"Birthday","variant":"Gold","rarity":"Rare","image":"images/sprite_birthday_gold.png"},{"name":"Birthday","variant":"Cheat Master","rarity":"Rare","image":"images/sprite_birthday_cheat_master.png"},{"name":"Birthday","variant":"Loot Hacker","rarity":"Rare","image":"images/sprite_birthday_loot_hacker.png"},{"name":"Birthday","variant":"Bounty Hunter","rarity":"Rare","image":"images/sprite_birthday_bounty_hunter.png"},{"name":"Shadow","variant":"Normal","rarity":"Epic","image":"images/sprite_shadow.png"},{"name":"Shadow","variant":"Gold","rarity":"Epic","image":"images/sprite_shadow_gold.png"},{"name":"Shadow","variant":"Cheat Master","rarity":"Epic","image":"images/sprite_shadow_cheat_master.png"},{"name":"Shadow","variant":"Loot Hacker","rarity":"Epic","image":"images/sprite_shadow_loot_hacker.png"},{"name":"Shadow","variant":"Bounty Hunter","rarity":"Epic","image":"images/sprite_shadow_bounty_hunter.png"},{"name":"Tails","variant":"Normal","rarity":"Epic","image":"images/sprite_tails.png"},{"name":"Tails","variant":"Gold","rarity":"Epic","image":"images/sprite_tails_gold.png"},{"name":"Tails","variant":"Cheat Master","rarity":"Epic","image":"images/sprite_tails_cheat_master.png"},{"name":"Tails","variant":"Loot Hacker","rarity":"Epic","image":"images/sprite_tails_loot_hacker.png"},{"name":"Tails","variant":"Bounty Hunter","rarity":"Epic","image":"images/sprite_tails_bounty_hunter.png"},{"name":"Killswitch","variant":"Normal","rarity":"Epic","image":"images/sprite_killswitch.png"},{"name":"Killswitch","variant":"Gold","rarity":"Epic","image":"images/sprite_killswitch_gold.png"},{"name":"Killswitch","variant":"Cheat Master","rarity":"Epic","image":"images/sprite_killswitch_cheat_master.png"},{"name":"Killswitch","variant":"Loot Hacker","rarity":"Epic","image":"images/sprite_killswitch_loot_hacker.png"},{"name":"Killswitch","variant":"Bounty Hunter","rarity":"Epic","image":"images/sprite_killswitch_bounty_hunter.png"},{"name":"Sonic","variant":"Normal","rarity":"Epic","image":"images/sprite_sonic.png"},{"name":"Sonic","variant":"Gold","rarity":"Epic","image":"images/sprite_sonic_gold.png"},{"name":"Sonic","variant":"Cheat Master","rarity":"Epic","image":"images/sprite_sonic_cheat_master.png"},{"name":"Sonic","variant":"Loot Hacker","rarity":"Epic","image":"images/sprite_sonic_loot_hacker.png"},{"name":"Sonic","variant":"Bounty Hunter","rarity":"Epic","image":"images/sprite_sonic_bounty_hunter.png"},{"name":"Pond","variant":"Normal","rarity":"Epic","image":"images/sprite_pond.png"},{"name":"Pond","variant":"Gold","rarity":"Epic","image":"images/sprite_pond_gold.png"},{"name":"Pond","variant":"Cheat Master","rarity":"Epic","image":"images/sprite_pond_cheat_master.png"},{"name":"Pond","variant":"Loot Hacker","rarity":"Epic","image":"images/sprite_pond_loot_hacker.png"},{"name":"Pond","variant":"Bounty Hunter","rarity":"Epic","image":"images/sprite_pond_bounty_hunter.png"},{"name":"Morgana","variant":"Normal","rarity":"Epic","image":"images/sprite_morgana.png"},{"name":"Morgana","variant":"Gold","rarity":"Epic","image":"images/sprite_morgana_gold.png"},{"name":"Morgana","variant":"Cheat Master","rarity":"Epic","image":"images/sprite_morgana_cheat_master.png"},{"name":"Morgana","variant":"Loot Hacker","rarity":"Epic","image":"images/sprite_morgana_loot_hacker.png"},{"name":"Morgana","variant":"Bounty Hunter","rarity":"Epic","image":"images/sprite_morgana_bounty_hunter.png"},{"name":"Dumpster Dive","variant":"Normal","rarity":"Epic","image":"images/sprite_dumpster_dive.png"},{"name":"Dumpster Dive","variant":"Gold","rarity":"Epic","image":"images/sprite_dumpster_dive_gold.png"},{"name":"Dumpster Dive","variant":"Cheat Master","rarity":"Epic","image":"images/sprite_dumpster_dive_cheat_master.png"},{"name":"Dumpster Dive","variant":"Loot Hacker","rarity":"Epic","image":"images/sprite_dumpster_dive_loot_hacker.png"},{"name":"Dumpster Dive","variant":"Bounty Hunter","rarity":"Epic","image":"images/sprite_dumpster_dive_bounty_hunter.png"},{"name":"Jackrabbit","variant":"Normal","rarity":"Legendary","image":"images/sprite_jackrabbit.png"},{"name":"Jackrabbit","variant":"Gold","rarity":"Legendary","image":"images/sprite_jackrabbit_gold.png"},{"name":"Jackrabbit","variant":"Cheat Master","rarity":"Legendary","image":"images/sprite_jackrabbit_cheat_master.png"},{"name":"Jackrabbit","variant":"Loot Hacker","rarity":"Legendary","image":"images/sprite_jackrabbit_loot_hacker.png"},{"name":"Jackrabbit","variant":"Bounty Hunter","rarity":"Legendary","image":"images/sprite_jackrabbit_bounty_hunter.png"},{"name":"X-Ray","variant":"Normal","rarity":"Legendary","image":"images/sprite_xray.png"},{"name":"X-Ray","variant":"Gold","rarity":"Legendary","image":"images/sprite_xray_gold.png"},{"name":"X-Ray","variant":"Cheat Master","rarity":"Legendary","image":"images/sprite_xray_cheat_master.png"},{"name":"X-Ray","variant":"Loot Hacker","rarity":"Legendary","image":"images/sprite_xray_loot_hacker.png"},{"name":"X-Ray","variant":"Bounty Hunter","rarity":"Legendary","image":"images/sprite_xray_bounty_hunter.png"},{"name":"Blinky","variant":"Normal","rarity":"Legendary","image":"images/sprite_blinky.png"},{"name":"Blinky","variant":"Gold","rarity":"Legendary","image":"images/sprite_blinky_gold.png"},{"name":"Blinky","variant":"Cheat Master","rarity":"Legendary","image":"images/sprite_blinky_cheat_master.png"},{"name":"Blinky","variant":"Loot Hacker","rarity":"Legendary","image":"images/sprite_blinky_loot_hacker.png"},{"name":"Blinky","variant":"Bounty Hunter","rarity":"Legendary","image":"images/sprite_blinky_bounty_hunter.png"},{"name":"Crash Bandicoot","variant":"Normal","rarity":"Legendary","image":"images/sprite_crash_bandicoot.png"},{"name":"Crash Bandicoot","variant":"Gold","rarity":"Legendary","image":"images/sprite_crash_bandicoot_gold.png"},{"name":"Crash Bandicoot","variant":"Cheat Master","rarity":"Legendary","image":"images/sprite_crash_bandicoot_cheat_master.png"},{"name":"Crash Bandicoot","variant":"Loot Hacker","rarity":"Legendary","image":"images/sprite_crash_bandicoot_loot_hacker.png"},{"name":"Crash Bandicoot","variant":"Bounty Hunter","rarity":"Legendary","image":"images/sprite_crash_bandicoot_bounty_hunter.png"},{"name":"Vampire","variant":"Normal","rarity":"Legendary","image":"images/sprite_vampire.png"},{"name":"Vampire","variant":"Gold","rarity":"Legendary","image":"images/sprite_vampire_gold.png"},{"name":"Vampire","variant":"Cheat Master","rarity":"Legendary","image":"images/sprite_vampire_cheat_master.png"},{"name":"Vampire","variant":"Loot Hacker","rarity":"Legendary","image":"images/sprite_vampire_loot_hacker.png"},{"name":"Vampire","variant":"Bounty Hunter","rarity":"Legendary","image":"images/sprite_vampire_bounty_hunter.png"},{"name":"The Deer","variant":"Normal","rarity":"Legendary","image":"images/sprite_the_deer.png"},{"name":"The Deer","variant":"Gold","rarity":"Legendary","image":"images/sprite_the_deer_gold.png"},{"name":"The Deer","variant":"Cheat Master","rarity":"Legendary","image":"images/sprite_the_deer_cheat_master.png"},{"name":"The Deer","variant":"Loot Hacker","rarity":"Legendary","image":"images/sprite_the_deer_loot_hacker.png"},{"name":"The Deer","variant":"Bounty Hunter","rarity":"Legendary","image":"images/sprite_the_deer_bounty_hunter.png"},{"name":"Klombo","variant":"Normal","rarity":"Mythic","image":"images/sprite_klombo.png"},{"name":"Klombo","variant":"Gold","rarity":"Mythic","image":"images/sprite_klombo_gold.png"},{"name":"Klombo","variant":"Cheat Master","rarity":"Mythic","image":"images/sprite_klombo_cheat_master.png"},{"name":"Klombo","variant":"Loot Hacker","rarity":"Mythic","image":"images/sprite_klombo_loot_hacker.png"},{"name":"Klombo","variant":"Bounty Hunter","rarity":"Mythic","image":"images/sprite_klombo_bounty_hunter.png"},{"name":"Crown","variant":"Normal","rarity":"Mythic","image":"images/sprite_crown.png"},{"name":"Crown","variant":"Gold","rarity":"Mythic","image":"images/sprite_crown_gold.png"},{"name":"Crown","variant":"Cheat Master","rarity":"Mythic","image":"images/sprite_crown_cheat_master.png"},{"name":"Crown","variant":"Loot Hacker","rarity":"Mythic","image":"images/sprite_crown_loot_hacker.png"},{"name":"Crown","variant":"Bounty Hunter","rarity":"Mythic","image":"images/sprite_crown_bounty_hunter.png"},{"name":"Crown","variant":"Trick or Treat","rarity":"Mythic","image":"images/sprite_crown_trick_or_treat.png"},{"name":"Spooky Dash","variant":"Normal","rarity":"Mythic","image":"images/sprite_spooky_dash.png"},{"name":"Spooky Dash","variant":"Gold","rarity":"Mythic","image":"images/sprite_spooky_dash_gold.png"},{"name":"Spooky Dash","variant":"Cheat Master","rarity":"Mythic","image":"images/sprite_spooky_dash_cheat_master.png"},{"name":"Spooky Dash","variant":"Loot Hacker","rarity":"Mythic","image":"images/sprite_spooky_dash_loot_hacker.png"},{"name":"Spooky Dash","variant":"Bounty Hunter","rarity":"Mythic","image":"images/sprite_spooky_dash_bounty_hunter.png"}];
const PREVIOUS_CATALOG_145=[{"name":"Bush","variant":"Normal","rarity":"Rare","image":"images/sprite_bush.png"},{"name":"Bush","variant":"Gold","rarity":"Rare","image":"images/sprite_bush_gold.png"},{"name":"Bush","variant":"Cheat Master","rarity":"Rare","image":"images/sprite_bush_cheat_master.png"},{"name":"Bush","variant":"Loot Hacker","rarity":"Rare","image":"images/sprite_bush_loot_hacker.png"},{"name":"Bush","variant":"Bounty Hunter","rarity":"Rare","image":"images/sprite_bush_bounty_hunter.png"},{"name":"Bush","variant":"Trick or Treat","rarity":"Rare","image":"images/sprite_bush_trick_or_treat.png"},{"name":"Adventure","variant":"Normal","rarity":"Rare","image":"images/sprite_adventure.png"},{"name":"Adventure","variant":"Gold","rarity":"Rare","image":"images/sprite_adventure_gold.png"},{"name":"Adventure","variant":"Cheat Master","rarity":"Rare","image":"images/sprite_adventure_cheat_master.png"},{"name":"Adventure","variant":"Loot Hacker","rarity":"Rare","image":"images/sprite_adventure_loot_hacker.png"},{"name":"Adventure","variant":"Bounty Hunter","rarity":"Rare","image":"images/sprite_adventure_bounty_hunter.png"},{"name":"Adventure","variant":"Trick or Treat","rarity":"Rare","image":"images/sprite_adventure_trick_or_treat.png"},{"name":"Jonesy","variant":"Normal","rarity":"Rare","image":"images/sprite_jonesy.png"},{"name":"Jonesy","variant":"Gold","rarity":"Rare","image":"images/sprite_jonesy_gold.png"},{"name":"Jonesy","variant":"Cheat Master","rarity":"Rare","image":"images/sprite_jonesy_cheat_master.png"},{"name":"Jonesy","variant":"Loot Hacker","rarity":"Rare","image":"images/sprite_jonesy_loot_hacker.png"},{"name":"Jonesy","variant":"Bounty Hunter","rarity":"Rare","image":"images/sprite_jonesy_bounty_hunter.png"},{"name":"Jonesy","variant":"Trick or Treat","rarity":"Rare","image":"images/sprite_jonesy_trick_or_treat.png"},{"name":"8-Bit","variant":"Normal","rarity":"Rare","image":"images/sprite_8bit.png"},{"name":"8-Bit","variant":"Gold","rarity":"Rare","image":"images/sprite_8bit_gold.png"},{"name":"8-Bit","variant":"Cheat Master","rarity":"Rare","image":"images/sprite_8bit_cheat_master.png"},{"name":"8-Bit","variant":"Loot Hacker","rarity":"Rare","image":"images/sprite_8bit_loot_hacker.png"},{"name":"8-Bit","variant":"Bounty Hunter","rarity":"Rare","image":"images/sprite_8bit_bounty_hunter.png"},{"name":"8-Bit","variant":"Trick or Treat","rarity":"Rare","image":"images/sprite_8bit_trick_or_treat.png"},{"name":"Storm Scout","variant":"Normal","rarity":"Rare","image":"images/sprite_storm_scout.png"},{"name":"Storm Scout","variant":"Gold","rarity":"Rare","image":"images/sprite_storm_scout_gold.png"},{"name":"Storm Scout","variant":"Cheat Master","rarity":"Rare","image":"images/sprite_storm_scout_cheat_master.png"},{"name":"Storm Scout","variant":"Loot Hacker","rarity":"Rare","image":"images/sprite_storm_scout_loot_hacker.png"},{"name":"Storm Scout","variant":"Bounty Hunter","rarity":"Rare","image":"images/sprite_storm_scout_bounty_hunter.png"},{"name":"Storm Scout","variant":"Trick or Treat","rarity":"Rare","image":"images/sprite_storm_scout_trick_or_treat.png"},{"name":"Overshield","variant":"Normal","rarity":"Rare","image":"images/sprite_overshield.png"},{"name":"Overshield","variant":"Gold","rarity":"Rare","image":"images/sprite_overshield_gold.png"},{"name":"Overshield","variant":"Cheat Master","rarity":"Rare","image":"images/sprite_overshield_cheat_master.png"},{"name":"Overshield","variant":"Loot Hacker","rarity":"Rare","image":"images/sprite_overshield_loot_hacker.png"},{"name":"Overshield","variant":"Bounty Hunter","rarity":"Rare","image":"images/sprite_overshield_bounty_hunter.png"},{"name":"Overshield","variant":"Trick or Treat","rarity":"Rare","image":"images/sprite_overshield_trick_or_treat.png"},{"name":"Mega Man","variant":"Normal","rarity":"Rare","image":"images/sprite_mega_man.png"},{"name":"Onigiri","variant":"Normal","rarity":"Rare","image":"images/sprite_onigiri.png"},{"name":"Onigiri","variant":"Gold","rarity":"Rare","image":"images/sprite_onigiri_gold.png"},{"name":"Onigiri","variant":"Cheat Master","rarity":"Rare","image":"images/sprite_onigiri_cheat_master.png"},{"name":"Onigiri","variant":"Loot Hacker","rarity":"Rare","image":"images/sprite_onigiri_loot_hacker.png"},{"name":"Onigiri","variant":"Bounty Hunter","rarity":"Rare","image":"images/sprite_onigiri_bounty_hunter.png"},{"name":"Onigiri","variant":"Trick or Treat","rarity":"Rare","image":"images/sprite_onigiri_trick_or_treat.png"},{"name":"Birthday","variant":"Normal","rarity":"Rare","image":"images/sprite_birthday.png"},{"name":"Birthday","variant":"Gold","rarity":"Rare","image":"images/sprite_birthday_gold.png"},{"name":"Birthday","variant":"Cheat Master","rarity":"Rare","image":"images/sprite_birthday_cheat_master.png"},{"name":"Birthday","variant":"Loot Hacker","rarity":"Rare","image":"images/sprite_birthday_loot_hacker.png"},{"name":"Birthday","variant":"Bounty Hunter","rarity":"Rare","image":"images/sprite_birthday_bounty_hunter.png"},{"name":"Birthday","variant":"Trick or Treat","rarity":"Rare","image":"images/sprite_birthday_trick_or_treat.png"},{"name":"Shadow","variant":"Normal","rarity":"Epic","image":"images/sprite_shadow.png"},{"name":"Shadow","variant":"Gold","rarity":"Epic","image":"images/sprite_shadow_gold.png"},{"name":"Shadow","variant":"Cheat Master","rarity":"Epic","image":"images/sprite_shadow_cheat_master.png"},{"name":"Shadow","variant":"Loot Hacker","rarity":"Epic","image":"images/sprite_shadow_loot_hacker.png"},{"name":"Shadow","variant":"Bounty Hunter","rarity":"Epic","image":"images/sprite_shadow_bounty_hunter.png"},{"name":"Shadow","variant":"Trick or Treat","rarity":"Epic","image":"images/sprite_shadow_trick_or_treat.png"},{"name":"Tails","variant":"Normal","rarity":"Epic","image":"images/sprite_tails.png"},{"name":"Tails","variant":"Gold","rarity":"Epic","image":"images/sprite_tails_gold.png"},{"name":"Tails","variant":"Cheat Master","rarity":"Epic","image":"images/sprite_tails_cheat_master.png"},{"name":"Tails","variant":"Loot Hacker","rarity":"Epic","image":"images/sprite_tails_loot_hacker.png"},{"name":"Tails","variant":"Bounty Hunter","rarity":"Epic","image":"images/sprite_tails_bounty_hunter.png"},{"name":"Tails","variant":"Trick or Treat","rarity":"Epic","image":"images/sprite_tails_trick_or_treat.png"},{"name":"Killswitch","variant":"Normal","rarity":"Epic","image":"images/sprite_killswitch.png"},{"name":"Killswitch","variant":"Gold","rarity":"Epic","image":"images/sprite_killswitch_gold.png"},{"name":"Killswitch","variant":"Cheat Master","rarity":"Epic","image":"images/sprite_killswitch_cheat_master.png"},{"name":"Killswitch","variant":"Loot Hacker","rarity":"Epic","image":"images/sprite_killswitch_loot_hacker.png"},{"name":"Killswitch","variant":"Bounty Hunter","rarity":"Epic","image":"images/sprite_killswitch_bounty_hunter.png"},{"name":"Killswitch","variant":"Trick or Treat","rarity":"Epic","image":"images/sprite_killswitch_trick_or_treat.png"},{"name":"Sonic","variant":"Normal","rarity":"Epic","image":"images/sprite_sonic.png"},{"name":"Sonic","variant":"Gold","rarity":"Epic","image":"images/sprite_sonic_gold.png"},{"name":"Sonic","variant":"Cheat Master","rarity":"Epic","image":"images/sprite_sonic_cheat_master.png"},{"name":"Sonic","variant":"Loot Hacker","rarity":"Epic","image":"images/sprite_sonic_loot_hacker.png"},{"name":"Sonic","variant":"Bounty Hunter","rarity":"Epic","image":"images/sprite_sonic_bounty_hunter.png"},{"name":"Sonic","variant":"Trick or Treat","rarity":"Epic","image":"images/sprite_sonic_trick_or_treat.png"},{"name":"Pond","variant":"Normal","rarity":"Epic","image":"images/sprite_pond.png"},{"name":"Pond","variant":"Gold","rarity":"Epic","image":"images/sprite_pond_gold.png"},{"name":"Pond","variant":"Cheat Master","rarity":"Epic","image":"images/sprite_pond_cheat_master.png"},{"name":"Pond","variant":"Loot Hacker","rarity":"Epic","image":"images/sprite_pond_loot_hacker.png"},{"name":"Pond","variant":"Bounty Hunter","rarity":"Epic","image":"images/sprite_pond_bounty_hunter.png"},{"name":"Pond","variant":"Trick or Treat","rarity":"Epic","image":"images/sprite_pond_trick_or_treat.png"},{"name":"Morgana","variant":"Normal","rarity":"Epic","image":"images/sprite_morgana.png"},{"name":"Morgana","variant":"Gold","rarity":"Epic","image":"images/sprite_morgana_gold.png"},{"name":"Morgana","variant":"Cheat Master","rarity":"Epic","image":"images/sprite_morgana_cheat_master.png"},{"name":"Morgana","variant":"Loot Hacker","rarity":"Epic","image":"images/sprite_morgana_loot_hacker.png"},{"name":"Morgana","variant":"Bounty Hunter","rarity":"Epic","image":"images/sprite_morgana_bounty_hunter.png"},{"name":"Morgana","variant":"Trick or Treat","rarity":"Epic","image":"images/sprite_morgana_trick_or_treat.png"},{"name":"Dumpster Dive","variant":"Normal","rarity":"Epic","image":"images/sprite_dumpster_dive.png"},{"name":"Dumpster Dive","variant":"Gold","rarity":"Epic","image":"images/sprite_dumpster_dive_gold.png"},{"name":"Dumpster Dive","variant":"Cheat Master","rarity":"Epic","image":"images/sprite_dumpster_dive_cheat_master.png"},{"name":"Dumpster Dive","variant":"Loot Hacker","rarity":"Epic","image":"images/sprite_dumpster_dive_loot_hacker.png"},{"name":"Dumpster Dive","variant":"Bounty Hunter","rarity":"Epic","image":"images/sprite_dumpster_dive_bounty_hunter.png"},{"name":"Dumpster Dive","variant":"Trick or Treat","rarity":"Epic","image":"images/sprite_dumpster_dive_trick_or_treat.png"},{"name":"Jackrabbit","variant":"Normal","rarity":"Legendary","image":"images/sprite_jackrabbit.png"},{"name":"Jackrabbit","variant":"Gold","rarity":"Legendary","image":"images/sprite_jackrabbit_gold.png"},{"name":"Jackrabbit","variant":"Cheat Master","rarity":"Legendary","image":"images/sprite_jackrabbit_cheat_master.png"},{"name":"Jackrabbit","variant":"Loot Hacker","rarity":"Legendary","image":"images/sprite_jackrabbit_loot_hacker.png"},{"name":"Jackrabbit","variant":"Bounty Hunter","rarity":"Legendary","image":"images/sprite_jackrabbit_bounty_hunter.png"},{"name":"Jackrabbit","variant":"Trick or Treat","rarity":"Legendary","image":"images/sprite_jackrabbit_trick_or_treat.png"},{"name":"X-Ray","variant":"Normal","rarity":"Legendary","image":"images/sprite_xray.png"},{"name":"X-Ray","variant":"Gold","rarity":"Legendary","image":"images/sprite_xray_gold.png"},{"name":"X-Ray","variant":"Cheat Master","rarity":"Legendary","image":"images/sprite_xray_cheat_master.png"},{"name":"X-Ray","variant":"Loot Hacker","rarity":"Legendary","image":"images/sprite_xray_loot_hacker.png"},{"name":"X-Ray","variant":"Bounty Hunter","rarity":"Legendary","image":"images/sprite_xray_bounty_hunter.png"},{"name":"X-Ray","variant":"Trick or Treat","rarity":"Legendary","image":"images/sprite_xray_trick_or_treat.png"},{"name":"Blinky","variant":"Normal","rarity":"Legendary","image":"images/sprite_blinky.png"},{"name":"Blinky","variant":"Gold","rarity":"Legendary","image":"images/sprite_blinky_gold.png"},{"name":"Blinky","variant":"Cheat Master","rarity":"Legendary","image":"images/sprite_blinky_cheat_master.png"},{"name":"Blinky","variant":"Loot Hacker","rarity":"Legendary","image":"images/sprite_blinky_loot_hacker.png"},{"name":"Blinky","variant":"Bounty Hunter","rarity":"Legendary","image":"images/sprite_blinky_bounty_hunter.png"},{"name":"Blinky","variant":"Trick or Treat","rarity":"Legendary","image":"images/sprite_blinky_trick_or_treat.png"},{"name":"Crash Bandicoot","variant":"Normal","rarity":"Legendary","image":"images/sprite_crash_bandicoot.png"},{"name":"Crash Bandicoot","variant":"Gold","rarity":"Legendary","image":"images/sprite_crash_bandicoot_gold.png"},{"name":"Crash Bandicoot","variant":"Cheat Master","rarity":"Legendary","image":"images/sprite_crash_bandicoot_cheat_master.png"},{"name":"Crash Bandicoot","variant":"Loot Hacker","rarity":"Legendary","image":"images/sprite_crash_bandicoot_loot_hacker.png"},{"name":"Crash Bandicoot","variant":"Bounty Hunter","rarity":"Legendary","image":"images/sprite_crash_bandicoot_bounty_hunter.png"},{"name":"Crash Bandicoot","variant":"Trick or Treat","rarity":"Legendary","image":"images/sprite_crash_bandicoot_trick_or_treat.png"},{"name":"Vampire","variant":"Normal","rarity":"Legendary","image":"images/sprite_vampire.png"},{"name":"Vampire","variant":"Gold","rarity":"Legendary","image":"images/sprite_vampire_gold.png"},{"name":"Vampire","variant":"Cheat Master","rarity":"Legendary","image":"images/sprite_vampire_cheat_master.png"},{"name":"Vampire","variant":"Loot Hacker","rarity":"Legendary","image":"images/sprite_vampire_loot_hacker.png"},{"name":"Vampire","variant":"Bounty Hunter","rarity":"Legendary","image":"images/sprite_vampire_bounty_hunter.png"},{"name":"Vampire","variant":"Trick or Treat","rarity":"Legendary","image":"images/sprite_vampire_trick_or_treat.png"},{"name":"The Deer","variant":"Normal","rarity":"Legendary","image":"images/sprite_the_deer.png"},{"name":"The Deer","variant":"Gold","rarity":"Legendary","image":"images/sprite_the_deer_gold.png"},{"name":"The Deer","variant":"Cheat Master","rarity":"Legendary","image":"images/sprite_the_deer_cheat_master.png"},{"name":"The Deer","variant":"Loot Hacker","rarity":"Legendary","image":"images/sprite_the_deer_loot_hacker.png"},{"name":"The Deer","variant":"Bounty Hunter","rarity":"Legendary","image":"images/sprite_the_deer_bounty_hunter.png"},{"name":"The Deer","variant":"Trick or Treat","rarity":"Legendary","image":"images/sprite_the_deer_trick_or_treat.png"},{"name":"Klombo","variant":"Normal","rarity":"Mythic","image":"images/sprite_klombo.png"},{"name":"Klombo","variant":"Gold","rarity":"Mythic","image":"images/sprite_klombo_gold.png"},{"name":"Klombo","variant":"Cheat Master","rarity":"Mythic","image":"images/sprite_klombo_cheat_master.png"},{"name":"Klombo","variant":"Loot Hacker","rarity":"Mythic","image":"images/sprite_klombo_loot_hacker.png"},{"name":"Klombo","variant":"Bounty Hunter","rarity":"Mythic","image":"images/sprite_klombo_bounty_hunter.png"},{"name":"Klombo","variant":"Trick or Treat","rarity":"Mythic","image":"images/sprite_klombo_trick_or_treat.png"},{"name":"Crown","variant":"Normal","rarity":"Mythic","image":"images/sprite_crown.png"},{"name":"Crown","variant":"Gold","rarity":"Mythic","image":"images/sprite_crown_gold.png"},{"name":"Crown","variant":"Cheat Master","rarity":"Mythic","image":"images/sprite_crown_cheat_master.png"},{"name":"Crown","variant":"Loot Hacker","rarity":"Mythic","image":"images/sprite_crown_loot_hacker.png"},{"name":"Crown","variant":"Bounty Hunter","rarity":"Mythic","image":"images/sprite_crown_bounty_hunter.png"},{"name":"Crown","variant":"Trick or Treat","rarity":"Mythic","image":"images/sprite_crown_trick_or_treat.png"},{"name":"Spooky Dash","variant":"Normal","rarity":"Mythic","image":"images/sprite_spooky_dash.png"},{"name":"Spooky Dash","variant":"Gold","rarity":"Mythic","image":"images/sprite_spooky_dash_gold.png"},{"name":"Spooky Dash","variant":"Cheat Master","rarity":"Mythic","image":"images/sprite_spooky_dash_cheat_master.png"},{"name":"Spooky Dash","variant":"Loot Hacker","rarity":"Mythic","image":"images/sprite_spooky_dash_loot_hacker.png"},{"name":"Spooky Dash","variant":"Bounty Hunter","rarity":"Mythic","image":"images/sprite_spooky_dash_bounty_hunter.png"},{"name":"Spooky Dash","variant":"Trick or Treat","rarity":"Mythic","image":"images/sprite_spooky_dash_trick_or_treat.png"}];
const CATALOG=[{"name":"Bush","variant":"Normal","rarity":"Rare","image":"images/sprite_bush.png","new":false},{"name":"Bush","variant":"Gold","rarity":"Rare","image":"images/sprite_bush_gold.png","new":false},{"name":"Bush","variant":"Cheat Master","rarity":"Rare","image":"images/sprite_bush_cheat_master.png","new":false},{"name":"Bush","variant":"Loot Hacker","rarity":"Rare","image":"images/sprite_bush_loot_hacker.png","new":false},{"name":"Bush","variant":"Bounty Hunter","rarity":"Rare","image":"images/sprite_bush_bounty_hunter.png","new":false},{"name":"Bush","variant":"Trick or Treat","rarity":"Rare","image":"images/sprite_bush_trick_or_treat.png","new":false},{"name":"Bush","variant":"Quack","rarity":"Rare","image":"images/sprite_bush_quack.png","new":true},{"name":"Adventure","variant":"Normal","rarity":"Rare","image":"images/sprite_adventure.png","new":false},{"name":"Adventure","variant":"Gold","rarity":"Rare","image":"images/sprite_adventure_gold.png","new":false},{"name":"Adventure","variant":"Cheat Master","rarity":"Rare","image":"images/sprite_adventure_cheat_master.png","new":false},{"name":"Adventure","variant":"Loot Hacker","rarity":"Rare","image":"images/sprite_adventure_loot_hacker.png","new":false},{"name":"Adventure","variant":"Bounty Hunter","rarity":"Rare","image":"images/sprite_adventure_bounty_hunter.png","new":false},{"name":"Adventure","variant":"Trick or Treat","rarity":"Rare","image":"images/sprite_adventure_trick_or_treat.png","new":false},{"name":"Adventure","variant":"Quack","rarity":"Rare","image":"images/sprite_adventure_quack.png","new":true},{"name":"Jonesy","variant":"Normal","rarity":"Rare","image":"images/sprite_jonesy.png","new":false},{"name":"Jonesy","variant":"Gold","rarity":"Rare","image":"images/sprite_jonesy_gold.png","new":false},{"name":"Jonesy","variant":"Cheat Master","rarity":"Rare","image":"images/sprite_jonesy_cheat_master.png","new":false},{"name":"Jonesy","variant":"Loot Hacker","rarity":"Rare","image":"images/sprite_jonesy_loot_hacker.png","new":false},{"name":"Jonesy","variant":"Bounty Hunter","rarity":"Rare","image":"images/sprite_jonesy_bounty_hunter.png","new":false},{"name":"Jonesy","variant":"Trick or Treat","rarity":"Rare","image":"images/sprite_jonesy_trick_or_treat.png","new":false},{"name":"Jonesy","variant":"Quack","rarity":"Rare","image":"images/sprite_jonesy_quack.png","new":true},{"name":"8-Bit","variant":"Normal","rarity":"Rare","image":"images/sprite_8bit.png","new":false},{"name":"8-Bit","variant":"Gold","rarity":"Rare","image":"images/sprite_8bit_gold.png","new":false},{"name":"8-Bit","variant":"Cheat Master","rarity":"Rare","image":"images/sprite_8bit_cheat_master.png","new":false},{"name":"8-Bit","variant":"Loot Hacker","rarity":"Rare","image":"images/sprite_8bit_loot_hacker.png","new":false},{"name":"8-Bit","variant":"Bounty Hunter","rarity":"Rare","image":"images/sprite_8bit_bounty_hunter.png","new":false},{"name":"8-Bit","variant":"Trick or Treat","rarity":"Rare","image":"images/sprite_8bit_trick_or_treat.png","new":false},{"name":"Storm Scout","variant":"Normal","rarity":"Rare","image":"images/sprite_storm_scout.png","new":false},{"name":"Storm Scout","variant":"Gold","rarity":"Rare","image":"images/sprite_storm_scout_gold.png","new":false},{"name":"Storm Scout","variant":"Cheat Master","rarity":"Rare","image":"images/sprite_storm_scout_cheat_master.png","new":false},{"name":"Storm Scout","variant":"Loot Hacker","rarity":"Rare","image":"images/sprite_storm_scout_loot_hacker.png","new":false},{"name":"Storm Scout","variant":"Bounty Hunter","rarity":"Rare","image":"images/sprite_storm_scout_bounty_hunter.png","new":false},{"name":"Storm Scout","variant":"Trick or Treat","rarity":"Rare","image":"images/sprite_storm_scout_trick_or_treat.png","new":false},{"name":"Overshield","variant":"Normal","rarity":"Rare","image":"images/sprite_overshield.png","new":false},{"name":"Overshield","variant":"Gold","rarity":"Rare","image":"images/sprite_overshield_gold.png","new":false},{"name":"Overshield","variant":"Cheat Master","rarity":"Rare","image":"images/sprite_overshield_cheat_master.png","new":false},{"name":"Overshield","variant":"Loot Hacker","rarity":"Rare","image":"images/sprite_overshield_loot_hacker.png","new":false},{"name":"Overshield","variant":"Bounty Hunter","rarity":"Rare","image":"images/sprite_overshield_bounty_hunter.png","new":false},{"name":"Overshield","variant":"Trick or Treat","rarity":"Rare","image":"images/sprite_overshield_trick_or_treat.png","new":false},{"name":"Mega Man","variant":"Normal","rarity":"Rare","image":"images/sprite_mega_man.png","new":false},{"name":"Onigiri","variant":"Normal","rarity":"Rare","image":"images/sprite_onigiri.png","new":false},{"name":"Onigiri","variant":"Gold","rarity":"Rare","image":"images/sprite_onigiri_gold.png","new":false},{"name":"Onigiri","variant":"Cheat Master","rarity":"Rare","image":"images/sprite_onigiri_cheat_master.png","new":false},{"name":"Onigiri","variant":"Loot Hacker","rarity":"Rare","image":"images/sprite_onigiri_loot_hacker.png","new":false},{"name":"Onigiri","variant":"Bounty Hunter","rarity":"Rare","image":"images/sprite_onigiri_bounty_hunter.png","new":false},{"name":"Onigiri","variant":"Trick or Treat","rarity":"Rare","image":"images/sprite_onigiri_trick_or_treat.png","new":false},{"name":"Birthday","variant":"Normal","rarity":"Rare","image":"images/sprite_birthday.png","new":false},{"name":"Birthday","variant":"Gold","rarity":"Rare","image":"images/sprite_birthday_gold.png","new":false},{"name":"Birthday","variant":"Cheat Master","rarity":"Rare","image":"images/sprite_birthday_cheat_master.png","new":false},{"name":"Birthday","variant":"Loot Hacker","rarity":"Rare","image":"images/sprite_birthday_loot_hacker.png","new":false},{"name":"Birthday","variant":"Bounty Hunter","rarity":"Rare","image":"images/sprite_birthday_bounty_hunter.png","new":false},{"name":"Birthday","variant":"Trick or Treat","rarity":"Rare","image":"images/sprite_birthday_trick_or_treat.png","new":false},{"name":"Shadow","variant":"Normal","rarity":"Epic","image":"images/sprite_shadow.png","new":false},{"name":"Shadow","variant":"Gold","rarity":"Epic","image":"images/sprite_shadow_gold.png","new":false},{"name":"Shadow","variant":"Cheat Master","rarity":"Epic","image":"images/sprite_shadow_cheat_master.png","new":false},{"name":"Shadow","variant":"Loot Hacker","rarity":"Epic","image":"images/sprite_shadow_loot_hacker.png","new":false},{"name":"Shadow","variant":"Bounty Hunter","rarity":"Epic","image":"images/sprite_shadow_bounty_hunter.png","new":false},{"name":"Shadow","variant":"Trick or Treat","rarity":"Epic","image":"images/sprite_shadow_trick_or_treat.png","new":false},{"name":"Tails","variant":"Normal","rarity":"Epic","image":"images/sprite_tails.png","new":false},{"name":"Tails","variant":"Gold","rarity":"Epic","image":"images/sprite_tails_gold.png","new":false},{"name":"Tails","variant":"Cheat Master","rarity":"Epic","image":"images/sprite_tails_cheat_master.png","new":false},{"name":"Tails","variant":"Loot Hacker","rarity":"Epic","image":"images/sprite_tails_loot_hacker.png","new":false},{"name":"Tails","variant":"Bounty Hunter","rarity":"Epic","image":"images/sprite_tails_bounty_hunter.png","new":false},{"name":"Tails","variant":"Trick or Treat","rarity":"Epic","image":"images/sprite_tails_trick_or_treat.png","new":false},{"name":"Killswitch","variant":"Normal","rarity":"Epic","image":"images/sprite_killswitch.png","new":false},{"name":"Killswitch","variant":"Gold","rarity":"Epic","image":"images/sprite_killswitch_gold.png","new":false},{"name":"Killswitch","variant":"Cheat Master","rarity":"Epic","image":"images/sprite_killswitch_cheat_master.png","new":false},{"name":"Killswitch","variant":"Loot Hacker","rarity":"Epic","image":"images/sprite_killswitch_loot_hacker.png","new":false},{"name":"Killswitch","variant":"Bounty Hunter","rarity":"Epic","image":"images/sprite_killswitch_bounty_hunter.png","new":false},{"name":"Killswitch","variant":"Trick or Treat","rarity":"Epic","image":"images/sprite_killswitch_trick_or_treat.png","new":false},{"name":"Sonic","variant":"Normal","rarity":"Epic","image":"images/sprite_sonic.png","new":false},{"name":"Sonic","variant":"Gold","rarity":"Epic","image":"images/sprite_sonic_gold.png","new":false},{"name":"Sonic","variant":"Cheat Master","rarity":"Epic","image":"images/sprite_sonic_cheat_master.png","new":false},{"name":"Sonic","variant":"Loot Hacker","rarity":"Epic","image":"images/sprite_sonic_loot_hacker.png","new":false},{"name":"Sonic","variant":"Bounty Hunter","rarity":"Epic","image":"images/sprite_sonic_bounty_hunter.png","new":false},{"name":"Sonic","variant":"Trick or Treat","rarity":"Epic","image":"images/sprite_sonic_trick_or_treat.png","new":false},{"name":"Pond","variant":"Normal","rarity":"Epic","image":"images/sprite_pond.png","new":false},{"name":"Pond","variant":"Gold","rarity":"Epic","image":"images/sprite_pond_gold.png","new":false},{"name":"Pond","variant":"Cheat Master","rarity":"Epic","image":"images/sprite_pond_cheat_master.png","new":false},{"name":"Pond","variant":"Loot Hacker","rarity":"Epic","image":"images/sprite_pond_loot_hacker.png","new":false},{"name":"Pond","variant":"Bounty Hunter","rarity":"Epic","image":"images/sprite_pond_bounty_hunter.png","new":false},{"name":"Pond","variant":"Trick or Treat","rarity":"Epic","image":"images/sprite_pond_trick_or_treat.png","new":false},{"name":"Morgana","variant":"Normal","rarity":"Epic","image":"images/sprite_morgana.png","new":false},{"name":"Morgana","variant":"Gold","rarity":"Epic","image":"images/sprite_morgana_gold.png","new":false},{"name":"Morgana","variant":"Cheat Master","rarity":"Epic","image":"images/sprite_morgana_cheat_master.png","new":false},{"name":"Morgana","variant":"Loot Hacker","rarity":"Epic","image":"images/sprite_morgana_loot_hacker.png","new":false},{"name":"Morgana","variant":"Bounty Hunter","rarity":"Epic","image":"images/sprite_morgana_bounty_hunter.png","new":false},{"name":"Morgana","variant":"Trick or Treat","rarity":"Epic","image":"images/sprite_morgana_trick_or_treat.png","new":false},{"name":"Dumpster Dive","variant":"Normal","rarity":"Epic","image":"images/sprite_dumpster_dive.png","new":false},{"name":"Dumpster Dive","variant":"Gold","rarity":"Epic","image":"images/sprite_dumpster_dive_gold.png","new":false},{"name":"Dumpster Dive","variant":"Cheat Master","rarity":"Epic","image":"images/sprite_dumpster_dive_cheat_master.png","new":false},{"name":"Dumpster Dive","variant":"Loot Hacker","rarity":"Epic","image":"images/sprite_dumpster_dive_loot_hacker.png","new":false},{"name":"Dumpster Dive","variant":"Bounty Hunter","rarity":"Epic","image":"images/sprite_dumpster_dive_bounty_hunter.png","new":false},{"name":"Dumpster Dive","variant":"Trick or Treat","rarity":"Epic","image":"images/sprite_dumpster_dive_trick_or_treat.png","new":false},{"name":"Honey","variant":"Normal","rarity":"Epic","image":"images/sprite_honey.png","new":true},{"name":"Honey","variant":"Gold","rarity":"Epic","image":"images/sprite_honey_gold.png","new":true},{"name":"Honey","variant":"Cheat Master","rarity":"Epic","image":"images/sprite_honey_cheat_master.png","new":true},{"name":"Honey","variant":"Loot Hacker","rarity":"Epic","image":"images/sprite_honey_loot_hacker.png","new":true},{"name":"Honey","variant":"Bounty Hunter","rarity":"Epic","image":"images/sprite_honey_bounty_hunter.png","new":true},{"name":"Honey","variant":"Trick or Treat","rarity":"Epic","image":"images/sprite_honey_trick_or_treat.png","new":true},{"name":"One Wish Willow","variant":"Normal","rarity":"Epic","image":"images/sprite_one_wish_willow.png","new":true},{"name":"One Wish Willow","variant":"Gold","rarity":"Epic","image":"images/sprite_one_wish_willow_gold.png","new":true},{"name":"One Wish Willow","variant":"Cheat Master","rarity":"Epic","image":"images/sprite_one_wish_willow_cheat_master.png","new":true},{"name":"One Wish Willow","variant":"Loot Hacker","rarity":"Epic","image":"images/sprite_one_wish_willow_loot_hacker.png","new":true},{"name":"One Wish Willow","variant":"Bounty Hunter","rarity":"Epic","image":"images/sprite_one_wish_willow_bounty_hunter.png","new":true},{"name":"One Wish Willow","variant":"Trick or Treat","rarity":"Epic","image":"images/sprite_one_wish_willow_trick_or_treat.png","new":true},{"name":"Jackrabbit","variant":"Normal","rarity":"Legendary","image":"images/sprite_jackrabbit.png","new":false},{"name":"Jackrabbit","variant":"Gold","rarity":"Legendary","image":"images/sprite_jackrabbit_gold.png","new":false},{"name":"Jackrabbit","variant":"Cheat Master","rarity":"Legendary","image":"images/sprite_jackrabbit_cheat_master.png","new":false},{"name":"Jackrabbit","variant":"Loot Hacker","rarity":"Legendary","image":"images/sprite_jackrabbit_loot_hacker.png","new":false},{"name":"Jackrabbit","variant":"Bounty Hunter","rarity":"Legendary","image":"images/sprite_jackrabbit_bounty_hunter.png","new":false},{"name":"Jackrabbit","variant":"Trick or Treat","rarity":"Legendary","image":"images/sprite_jackrabbit_trick_or_treat.png","new":false},{"name":"X-Ray","variant":"Normal","rarity":"Legendary","image":"images/sprite_xray.png","new":false},{"name":"X-Ray","variant":"Gold","rarity":"Legendary","image":"images/sprite_xray_gold.png","new":false},{"name":"X-Ray","variant":"Cheat Master","rarity":"Legendary","image":"images/sprite_xray_cheat_master.png","new":false},{"name":"X-Ray","variant":"Loot Hacker","rarity":"Legendary","image":"images/sprite_xray_loot_hacker.png","new":false},{"name":"X-Ray","variant":"Bounty Hunter","rarity":"Legendary","image":"images/sprite_xray_bounty_hunter.png","new":false},{"name":"X-Ray","variant":"Trick or Treat","rarity":"Legendary","image":"images/sprite_xray_trick_or_treat.png","new":false},{"name":"Blinky","variant":"Normal","rarity":"Legendary","image":"images/sprite_blinky.png","new":false},{"name":"Blinky","variant":"Gold","rarity":"Legendary","image":"images/sprite_blinky_gold.png","new":false},{"name":"Blinky","variant":"Cheat Master","rarity":"Legendary","image":"images/sprite_blinky_cheat_master.png","new":false},{"name":"Blinky","variant":"Loot Hacker","rarity":"Legendary","image":"images/sprite_blinky_loot_hacker.png","new":false},{"name":"Blinky","variant":"Bounty Hunter","rarity":"Legendary","image":"images/sprite_blinky_bounty_hunter.png","new":false},{"name":"Blinky","variant":"Trick or Treat","rarity":"Legendary","image":"images/sprite_blinky_trick_or_treat.png","new":false},{"name":"Crash Bandicoot","variant":"Normal","rarity":"Legendary","image":"images/sprite_crash_bandicoot.png","new":false},{"name":"Crash Bandicoot","variant":"Gold","rarity":"Legendary","image":"images/sprite_crash_bandicoot_gold.png","new":false},{"name":"Crash Bandicoot","variant":"Cheat Master","rarity":"Legendary","image":"images/sprite_crash_bandicoot_cheat_master.png","new":false},{"name":"Crash Bandicoot","variant":"Loot Hacker","rarity":"Legendary","image":"images/sprite_crash_bandicoot_loot_hacker.png","new":false},{"name":"Crash Bandicoot","variant":"Bounty Hunter","rarity":"Legendary","image":"images/sprite_crash_bandicoot_bounty_hunter.png","new":false},{"name":"Crash Bandicoot","variant":"Trick or Treat","rarity":"Legendary","image":"images/sprite_crash_bandicoot_trick_or_treat.png","new":false},{"name":"Vampire","variant":"Normal","rarity":"Legendary","image":"images/sprite_vampire.png","new":false},{"name":"Vampire","variant":"Gold","rarity":"Legendary","image":"images/sprite_vampire_gold.png","new":false},{"name":"Vampire","variant":"Cheat Master","rarity":"Legendary","image":"images/sprite_vampire_cheat_master.png","new":false},{"name":"Vampire","variant":"Loot Hacker","rarity":"Legendary","image":"images/sprite_vampire_loot_hacker.png","new":false},{"name":"Vampire","variant":"Bounty Hunter","rarity":"Legendary","image":"images/sprite_vampire_bounty_hunter.png","new":false},{"name":"Vampire","variant":"Trick or Treat","rarity":"Legendary","image":"images/sprite_vampire_trick_or_treat.png","new":false},{"name":"The Deer","variant":"Normal","rarity":"Legendary","image":"images/sprite_the_deer.png","new":false},{"name":"The Deer","variant":"Gold","rarity":"Legendary","image":"images/sprite_the_deer_gold.png","new":false},{"name":"The Deer","variant":"Cheat Master","rarity":"Legendary","image":"images/sprite_the_deer_cheat_master.png","new":false},{"name":"The Deer","variant":"Loot Hacker","rarity":"Legendary","image":"images/sprite_the_deer_loot_hacker.png","new":false},{"name":"The Deer","variant":"Bounty Hunter","rarity":"Legendary","image":"images/sprite_the_deer_bounty_hunter.png","new":false},{"name":"The Deer","variant":"Trick or Treat","rarity":"Legendary","image":"images/sprite_the_deer_trick_or_treat.png","new":false},{"name":"Klombo","variant":"Normal","rarity":"Mythic","image":"images/sprite_klombo.png","new":false},{"name":"Klombo","variant":"Gold","rarity":"Mythic","image":"images/sprite_klombo_gold.png","new":false},{"name":"Klombo","variant":"Cheat Master","rarity":"Mythic","image":"images/sprite_klombo_cheat_master.png","new":false},{"name":"Klombo","variant":"Loot Hacker","rarity":"Mythic","image":"images/sprite_klombo_loot_hacker.png","new":false},{"name":"Klombo","variant":"Bounty Hunter","rarity":"Mythic","image":"images/sprite_klombo_bounty_hunter.png","new":false},{"name":"Klombo","variant":"Trick or Treat","rarity":"Mythic","image":"images/sprite_klombo_trick_or_treat.png","new":false},{"name":"Klombo","variant":"Quack","rarity":"Mythic","image":"images/sprite_klombo_quack.png","new":true},{"name":"Crown","variant":"Normal","rarity":"Mythic","image":"images/sprite_crown.png","new":false},{"name":"Crown","variant":"Gold","rarity":"Mythic","image":"images/sprite_crown_gold.png","new":false},{"name":"Crown","variant":"Cheat Master","rarity":"Mythic","image":"images/sprite_crown_cheat_master.png","new":false},{"name":"Crown","variant":"Loot Hacker","rarity":"Mythic","image":"images/sprite_crown_loot_hacker.png","new":false},{"name":"Crown","variant":"Bounty Hunter","rarity":"Mythic","image":"images/sprite_crown_bounty_hunter.png","new":false},{"name":"Crown","variant":"Trick or Treat","rarity":"Mythic","image":"images/sprite_crown_trick_or_treat.png","new":false},{"name":"Spooky Dash","variant":"Normal","rarity":"Mythic","image":"images/sprite_spooky_dash.png","new":false},{"name":"Spooky Dash","variant":"Gold","rarity":"Mythic","image":"images/sprite_spooky_dash_gold.png","new":false},{"name":"Spooky Dash","variant":"Cheat Master","rarity":"Mythic","image":"images/sprite_spooky_dash_cheat_master.png","new":false},{"name":"Spooky Dash","variant":"Loot Hacker","rarity":"Mythic","image":"images/sprite_spooky_dash_loot_hacker.png","new":false},{"name":"Spooky Dash","variant":"Bounty Hunter","rarity":"Mythic","image":"images/sprite_spooky_dash_bounty_hunter.png","new":false},{"name":"Spooky Dash","variant":"Trick or Treat","rarity":"Mythic","image":"images/sprite_spooky_dash_trick_or_treat.png","new":false},{"name":"Spooky Dash","variant":"Quack","rarity":"Mythic","image":"images/sprite_spooky_dash_quack.png","new":true}];

const PLAY_URL="https://play.google.com/store/apps/details?id=com.broughtvulture.spritetracker";

let snapshot=null;
let activeStatus="All";
const selectedSprites=new Set();
const selectedVariants=new Set();

function base64UrlToBytes(value){
  let s=value.replace(/-/g,"+").replace(/_/g,"/");
  while(s.length%4)s+="=";
  const raw=atob(s);
  return Uint8Array.from(raw,c=>c.charCodeAt(0));
}

function catalogForTotal(total){
  if(total===122)return LEGACY_CATALOG_122;
  if(total===145)return PREVIOUS_CATALOG_145;
  if(total===162)return CATALOG;
  return null;
}

function parseCollection(){
  const raw=decodeURIComponent(location.hash.slice(1));
  const parts=raw.split("|");

  if(parts.length!==3||parts[0]!=="ST1"){
    throw new Error("This link does not contain a valid Sprite Tracker collection.");
  }

  const total=Number(parts[1]);
  const catalog=catalogForTotal(total);

  if(!Number.isInteger(total)||catalog===null){
    throw new Error("This collection was created by an unsupported Sprite Tracker version.");
  }

  const bytes=base64UrlToBytes(parts[2]);
  if(bytes.length<Math.ceil(total/8)){
    throw new Error("This Sprite Tracker collection link is incomplete.");
  }

  const entries=catalog.map((item,index)=>({
    ...item,
    owned:Boolean(bytes[Math.floor(index/8)]&(1<<(index%8)))
  }));

  return {total,entries};
}

function makeCard(item){
  const card=document.createElement("article");
  card.className=`card ${item.rarity.toLowerCase()} ${item.owned?"owned":"missing"}`;

  const img=document.createElement("img");
  img.src=item.image;
  img.alt=`${item.name} ${item.variant}`;
  img.loading="lazy";
  img.onerror=()=>{
    const fallback=document.createElement("div");
    fallback.className="fallback";
    fallback.textContent=item.name.charAt(0);
    img.replaceWith(fallback);
  };

  const badge=document.createElement("div");
  badge.className=`status-badge ${item.owned?"owned":"missing"}`;
  badge.textContent=item.owned?"OWNED":"MISSING";

  const meta=document.createElement("div");
  meta.className="meta";
  meta.innerHTML=`<div class="name">${item.name}</div><div class="variant">${item.variant}</div>`;

  card.append(img,badge);

  if(item.new===true){
    const newBadge=document.createElement("div");
    newBadge.className="new-badge";
    newBadge.textContent="NEW";
    card.appendChild(newBadge);
  }

  card.appendChild(meta);
  return card;
}

function renderGrid(){
  const grid=document.getElementById("grid");
  grid.innerHTML="";

  let rows=snapshot.entries;

  if(activeStatus==="New")rows=rows.filter(item=>item.new===true);
  if(activeStatus==="Owned")rows=rows.filter(item=>item.owned);
  if(activeStatus==="Missing")rows=rows.filter(item=>!item.owned);

  if(selectedSprites.size>0){
    rows=rows.filter(item=>selectedSprites.has(item.name));
  }

  if(selectedVariants.size>0){
    rows=rows.filter(item=>selectedVariants.has(item.variant));
  }

  if(rows.length===0){
    grid.innerHTML='<div class="empty">No Sprite variants match these filters.</div>';
    updateFilterSummary();
    return;
  }

  rows.forEach(item=>grid.appendChild(makeCard(item)));
  updateFilterSummary();
}

function syncStatusButtons(){
  document.querySelectorAll("#statusFilters .chip").forEach(button=>{
    button.classList.toggle("active",button.dataset.status===activeStatus);
  });
}

function syncSpriteButtons(){
  document.querySelectorAll("[data-sprite-name]").forEach(button=>{
    button.classList.toggle("active",selectedSprites.has(button.dataset.spriteName));
  });
}

function syncVariantButtons(){
  document.querySelectorAll("[data-variant-name]").forEach(button=>{
    button.classList.toggle("active",selectedVariants.has(button.dataset.variantName));
  });
}

function resetAllFilters(){
  activeStatus="All";
  selectedSprites.clear();
  selectedVariants.clear();
  syncStatusButtons();
  syncSpriteButtons();
  syncVariantButtons();
  renderGrid();
}

function updateFilterSummary(){
  const parts=[];

  if(activeStatus!=="All")parts.push(activeStatus);
  if(selectedSprites.size===1)parts.push([...selectedSprites][0]);
  else if(selectedSprites.size>1)parts.push(`${selectedSprites.size} sprites`);

  if(selectedVariants.size===1)parts.push([...selectedVariants][0]);
  else if(selectedVariants.size>1)parts.push(`${selectedVariants.size} variants`);

  document.getElementById("filterSummary").textContent=
    parts.length?parts.join(" • "):"All Sprites";
}

function createSpriteFilters(){
  const container=document.getElementById("spriteFilters");
  container.innerHTML="";

  const names=[...new Set(snapshot.entries.map(item=>item.name))]
    .sort((a,b)=>a.localeCompare(b));

  names.forEach(name=>{
    const button=document.createElement("button");
    button.type="button";
    button.className="chip";
    button.dataset.spriteName=name;
    button.textContent=name;

    button.addEventListener("click",()=>{
      if(selectedSprites.has(name)){
        selectedSprites.delete(name);
      }else{
        selectedSprites.add(name);
      }

      syncSpriteButtons();
      renderGrid();
    });

    container.appendChild(button);
  });
}

function createVariantFilters(){
  const preferredOrder=[
    "Normal",
    "Gold",
    "Cheat Master",
    "Loot Hacker",
    "Bounty Hunter",
    "Trick or Treat",
    "Quack"
  ];

  const available=new Set(snapshot.entries.map(item=>item.variant));
  const variants=preferredOrder.filter(name=>available.has(name));
  const container=document.getElementById("variantFilters");
  container.innerHTML="";

  variants.forEach(name=>{
    const button=document.createElement("button");
    button.type="button";
    button.className="chip";
    button.dataset.variantName=name;
    button.textContent=name;

    button.addEventListener("click",()=>{
      if(selectedVariants.has(name)){
        selectedVariants.delete(name);
      }else{
        selectedVariants.add(name);
      }

      syncVariantButtons();
      renderGrid();
    });

    container.appendChild(button);
  });
}

function setupStatusFilters(){
  document.getElementById("statusFilters").addEventListener("click",event=>{
    const button=event.target.closest("[data-status]");
    if(!button)return;

    if(button.dataset.status==="All"){
      resetAllFilters();
      return;
    }

    activeStatus=button.dataset.status;
    syncStatusButtons();
    renderGrid();
  });
}

function setupFilterCollapse(){
  const toggle=document.getElementById("filterToggle");
  const panel=document.getElementById("filterPanel");

  toggle.addEventListener("click",()=>{
    const expanded=toggle.getAttribute("aria-expanded")==="true";
    toggle.setAttribute("aria-expanded",String(!expanded));
    panel.hidden=expanded;
  });
}

try{
  snapshot=parseCollection();

  const ownedCount=snapshot.entries.filter(item=>item.owned).length;
  document.getElementById("count").textContent=`${ownedCount} / ${snapshot.total}`;

  document.getElementById("notice").innerHTML=
    `This is a read-only collection snapshot shared from <a href="${PLAY_URL}" target="_blank" rel="noopener">Sprite Tracker</a>.`;

  document.getElementById("filterShell").hidden=false;

  setupFilterCollapse();
  setupStatusFilters();
  createSpriteFilters();
  createVariantFilters();
  syncStatusButtons();
  renderGrid();

}catch(error){
  document.getElementById("count").textContent="Invalid";

  const notice=document.getElementById("notice");
  notice.classList.add("error");
  notice.textContent=error.message;
}
