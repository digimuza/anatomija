import { Muscle } from "@/_api/interface";

import { musclesImages } from "@/assets/index";

const pavirsiniai_galuniniai: Record<string, Omit<Muscle, "id">> = {
  trapecinis_raumuo: {
    group: "Paviršiniai/Galūniniai",
    name: "Trapecinis raumuo",
    start:
      "Pakauškaulis, sprando raištis, visos krūtinės slankstelių keterinės ataugos",
    finish: "Petinis raktikaulio galas, mentės dyglys ir petinė mentės atauga",
    function:
      "Viršutinė dalis kelia mentę, vidurinė dalis pritraukia, apatinė nuleidžia mentę",
    pictures: musclesImages.trapecinis_raumuo,
  },
  placiajuostis_nugaros_raumuo: {
    group: "Paviršiniai/Galūniniai",
    name: "Plačiausiasis nugaros raumuo",
    start:
      "Apatinių krūtinės ir visų juosmens slankstelių keterinės ataugos, nugarinis kryžkaulio paviršius ir užpakalinis klubakaulio sparno kraštas",
    finish: "Žastikaulio mažasis gumburėlis",
    function:
      "Suka žastikaulį į vidų, nuleidžia pakeltą ranką, priartina liemenį prie fiksuotų rankų",
    pictures: musclesImages.placiajuostis_nugaros_raumuo,
  },
  keliamasis_mentes_raumuo: {
    group: "Paviršiniai/Galūniniai",
    name: "Keliamasis mentės raumuo",
    pictures: musclesImages.keliamasis_mentes_raumuo,
    start: "4 viršutinių kaklo slankstelių skersinės ataugos",
    finish: "Viršutinis mentės kampas ir vidinis kraštas",
    function: "Kelia mentę, esant fiksuotai mentei lenkia galvą į šoną",
  },
  mazasis_rombinis_raumuo: {
    group: "Paviršiniai/Galūniniai",
    name: "Mažasis rombinis raumuo",
    pictures: musclesImages.mazasis_rombinis_raumuo,
    start: "C6-7 keterinės ataugos",
    finish: "Mentės vidinis kraštas",
    function: "Kelia ir pritraukia mentę",
  },
  dydysis_rombinis_raumuo: {
    group: "Paviršiniai/Galūniniai",
    name: "Dydysis rombinis raumuo",
    start: "Th1-4 keterinės ataugos",
    finish: "Vidinis mentės kraštas",
    function: "Kelia ir pritraukia mentę",
    pictures: musclesImages.dydysis_rombinis_raumuo,
  },
};

const pavirsiniai_savieji: Record<string, Omit<Muscle, "id">> = {
  uzpakalinis_apatinis_dantytasis_raumuo: {
    group: "Paviršiniai/Savieji",
    name: "Užpakalinis apatinis dantytasis raumuo",
    start: "Th11-12 ir L1-2 keterinės",
    finish: "X-XII šonkauliai",
    function: "Nuleidžia X-XII šonkaulius",
    pictures: musclesImages.uzpakalinis_apatinis_dantytasis_raumuo,
  },
  uzpakalinis_virsutinis_dantytasis_raumuo: {
    group: "Paviršiniai/Savieji",
    name: "Užpakalinis viršutinis dantytasis raumuo",
    pictures: musclesImages.uzpakalinis_virsutinis_dantytasis_raumuo,
    start: "C6-7 ir Th1-2 keterinės ataugos",
    finish: "II-V šonkauliai",
    function: "Kelia II-V šonkaulius",
  },
};

const gilieji_ilgieji: Record<string, Omit<Muscle, "id">> = {
  dirzinis_galvos_raumuo: {
    group: "Giliai/Ilgieji",
    name: "Diržinis galvos raumuo",
    pictures: musclesImages.dirzinis_galvos_raumuo,
    start: "Sprando raištis, Th1-6 keterinės ataugos",
    finish: "Smilkinkaulio speninė atauga",
    function: "Suka į savo pusę (viena pusė) ir atlošia galvą",
  },
  dirzinis_kaklo_raumuo: {
    group: "Giliai/Ilgieji",
    name: "Diržinis kaklo raumuo",
    pictures: musclesImages.dirzinis_kaklo_raumuo,
    start: "Sprando raištis, Th1-6 keterinės ataugos",
    finish: "Viršutinių kaklo slankstelių skersinės ataugos",
    function: "Suka į savo pusę (viena pusė) ir atlošia galvą",
  },
  klubinis_sonkauliu_raumuo: {
    group: "Giliai/Ilgieji",
    name: "Klubinis šonkaulių raumuo",
    pictures: musclesImages.klubinis_sonkauliu_raumuo,
    start:
      "Kryžkaulio nugarinis paviršius, klubakaulio skiauterė ir juosmens slankstelių keterinės ataugos",
    finish: "Šonkaulių kampai",
    function: "Tiesia stuburą, atlošia galvą ir laiko liemenį vertikaliai",
  },
  ilgiausiasis_nugaros_raumuo: {
    group: "Giliai/Ilgieji",
    name: "Ilgiausiasis raumuo",
    pictures: musclesImages.ilgiausiasis_nugaros_raumuo,
    start:
      "Kryžkaulio nugarinis paviršius, klubakaulio skiauterė, juosmens slankstelių keterinės ataugos ir C3-Th6 skersinės ataugos",
    finish:
      "Smilkinkaulio speninė atauga, C4-Th12 skersinės ataugos ir II-XII šonkaulių užpakaliniai galai",
    function: "Tiesia stuburą, atlošia galvą ir laiko liemenį vertikaliai",
  },
  keterinis_raumuo: {
    group: "Giliai/Ilgieji",
    name: "Keterinis raumuo",
    pictures: musclesImages.keterinis_raumuo,
    start: "L1-3, Th10-12, C2-4 keterinės ataugos",
    finish: "Pakauškaulis, C2-4 ir Th2-8 keterinės ataugos",
    function: "Tiesia stuburą, atlošia galvą ir laiko liemenį vertikaliai",
  },
};

export const gilieji_trumpieji: Record<string, Omit<Muscle, "id">> = {
  skersinis_keteriniu_ataugu_raumuo: {
    group: "Giliai/Trumpieji",
    name: "Skersinis keterinių ataugų raumuo",
    pictures: [],
    start: "Th1-12 keterinės ataugos",
    finish: "Th1-12 keterinės ataugos",
    function: "Užpildo tarpus tarp slankstelių skersinių ir keterinių ataugų",
  },
  tarpskersiniai_raumenys: {
    group: "Giliai/Trumpieji",
    name: "Tarpskersiniai raumenys",
    pictures: [],
    function:
      "Užpildo tarpus tarp slankstelių skersinių ataugų. Lenkia stuburą į šoną",
    finish: "Apatinės dalies keterinės ataugos",
    start: "Apatinės dalies keterinės ataugos",
  },
  tarpketeriniai_raumenys: {
    group: "Giliai/Trumpieji",
    name: "Tarpketeriniai raumenys",
    pictures: [],
    function: "Tiesia stuburą",
    finish: "",
    start: "",
  },
  sonkauliu_keliamieji_raumenys: {
    group: "Giliai/Trumpieji",
    name: "Šonkaulių keliamieji raumenys",
    start: "Krūtinės slankstelių skersinės ataugos",
    finish: "Šonkaulių kampai",
    function: "Kelia šonkaulius",
    pictures: [],
  },
  dydysis_uzpakalinis_tiesusis_raumuo: {
    group: "Giliai/Trumpieji",
    name: "Dydysis užpakalinis tiesusis raumuo",
    start: "",
    finish: "",
    pictures: [],
    function: "Suka ir atlošia galvą",
  },
  mazasis_uzpakalinis_tiesusis_raumuo: {
    group: "Giliai/Trumpieji",
    name: "Mažasis užpakalinis tiesusis raumuo",
    start: "",
    finish: "",
    pictures: [],
    function: "Suka ir atlošia galvą",
  },
  virsutinis_istrizinis_galvos_raumuo: {
    group: "Giliai/Trumpieji",
    name: "Viršutinis įstrižinis galvos raumuo",
    start: "",
    finish: "",
    pictures: [],
    function: "Suka ir atlošia galvą",
  },
  apatinis_istrizinis_galvos_raumuo: {
    group: "Giliai/Trumpieji",
    name: "Apatinis įstrižinis galvos raumuo",
    start: "",
    finish: "",
    pictures: [],
    function: "Suka ir atlošia galvą",
  },
};

export const backMuscles = {
  ...pavirsiniai_galuniniai,
  ...pavirsiniai_savieji,
  ...gilieji_ilgieji,
};
