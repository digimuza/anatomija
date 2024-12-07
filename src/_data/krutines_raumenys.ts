import { Muscle } from "@/_api/interface";
import { musclesImages } from "@/assets";

export const krutinesRaumenys: Record<string, Omit<Muscle, "id">> = {
  dydysis_krutines_raumuo: {
    latin: "Pectoralis major",
    group: "Krutinės raumenys/Galūniniai",
    name: "Dydysis krūtinės raumuo",
    pictures: musclesImages.dydysis_krutines_raumuo,
    start: "Raktikaulis, krūtinkaulis, tiesiojo pilvo raumens priekinė siena",
    finish: "Žastikaulio didysis gumburėlis",
    function:
      "Traukia žastikaulį į priekį ir suka į vidų, nuleidžia pakeltą ranką",
  },
  mazasis_krutines_raumuo: {
    latin: "Pectoralis minor",
    group: "Krutinės raumenys/Galūniniai",
    name: "Mažasis krūtinės raumuo",
    pictures: musclesImages.mazasis_krutines_raumuo,
    start: "3-5 šonkaulinės ataugos",
    finish: "Snapinė mentės atauga",
    function: "Nuleidžia peties lanką ir traukia jį į priekį",
  },
  porankinis_raumuo: {
    latin: "Serratus anterior",
    group: "Krutinės raumenys/Galūniniai",
    name: "Porankinis raumuo",
    pictures: musclesImages.porankinis_raumuo,
    start: "1 šonkaulio kremzlė",
    finish: "Raktikaulio petinis galas",
    function: "Nuleidžia ir traukia į priekį raktikaulį",
  },
  skersinis_krutines_raumuo: {
    latin: "Transversus thoracis",
    group: "Krutinės raumenys/Galūniniai",
    name: "Skersinis krūtinės raumuo",
    pictures: musclesImages.skersinis_krutines_raumuo,
    start: "Krūtinkaulio kardinė atauga ir kūnas",
    finish: "II-VI šonkaulių priekiniai galai",
    function:
      "Nuleidžia šonkaulius",
  },
  isoriniai_tarpkostiniai_raumenys: {
    latin: "Intercostales externi",
    group: "Krutinės raumenys/Savieji",
    name: "Išoriniai tarpšonkauliniai raumenys",
    pictures: musclesImages.isoriniai_tarpkostiniai_raumenys,
    function: "Kelia šonkaulius",
    finish: "Šonkaulių viršutiniai kraštai toliau stuburo",
    start: "Šonkaulių apatiniai kraštai arčiau stuburo",
  },
  vidiniai_tarpkostiniai_raumenys: {
    latin: "Intercostales interni",
    group: "Krutinės raumenys/Savieji",
    name: "Vidiniai tarpšonkauliniai raumenys",
    pictures: musclesImages.vidiniai_tarpkostiniai_raumenys,
    function: "Nuleidžia šonkaulius",
    finish: "Šonkaulių apatinis kraštas toliau stuburo",
    start: "Šonkaulių viršutinis kraštas arčiau stuburo",
  },
  diafragma: {
    latin: "Diaphragma",
    group: "Krutinės raumenys/Savieji",
    name: "Diafragma",
    pictures: musclesImages.diafragma,
    function: "Susitraukiant raumenims, diafragma plokštėja",
    finish: "Sausgyslinis centras",
    start: "Apatinės krūtinės atvaros kraštai",
  },
};
