import { Muscle } from "@/_api/interface";
import { musclesImages } from "@/assets";

export const pilvo_raumenys: Record<string, Omit<Muscle, "id">> = {
  tiesusis_pilvo_raumuo: {
    latin: "Rectus abdominis",
    group: "Pilvo raumenys",
    name: "Tiesusis pilvo raumuo",
    pictures: musclesImages.tiesusis_pilvo_raumuo,
    start: "VI-VII šonkaulių kremzlės ir kardinė krūtinkaulio atauga",
    finish: "Gaktikaulio viršutinis kraštas",
    function: "Lenkia liemenį",
  },
  piramidinis_pilvo_raumuo: {
    latin: "Pyramidalis",
    group: "Pilvo raumenys",
    name: "Piramidinis pilvo raumuo",
    pictures: musclesImages.piramidinis_pilvo_raumuo,
    start: "Pilvo aponeurozė",
    finish: "Gaktikaulio viršutinis kraštas",
    function: "Lenkia liemenį",
  },
  istrizinis_pilvo_raumuo: {
    latin: "Obliquus externus abdominis",
    group: "Pilvo raumenys",
    name: "Įstrižinis pilvo raumuo",
    pictures: musclesImages.istrizinis_pilvo_raumuo,
    start: "8 apatiniai šonkauliai",
    finish:
      "Klubakaulio sparno kraštas (vidinė dalis pereina į aponeurozę, o ši į kirkšnies raištį)",
    function:
      "Nuleidžia šonkaulius, suka liemenį į priešingą pusę, lenkia liemenį",
  },
  vidinis_istrizinis_pilvo_raumuo: {
    latin: "Obliquus internus abdominis",
    group: "Pilvo raumenys",
    name: "Vidinis įstrižinis pilvo raumuo",
    pictures: musclesImages.vidinis_istrizinis_pilvo_raumuo,
    start: "Juosmeninė fascija ir klubakaulio sparno kraštas",
    finish: "X-XII šonkauliai, vidinis kraštas pereina į sausplėvę.",
    function:
      "Suka liemenį į savo pusę, lenkia liemenį ir nuleidžia šonkaulius",
  },
  skersinis_pilvo_raumuo: {
    latin: "Transversus abdominis",
    group: "Pilvo raumenys",
    name: "Skersinis pilvo raumuo",
    pictures: musclesImages.skersinis_pilvo_raumuo,
    start:
      "3 apatinių šonkaulių vidinis paviršius, juosmeninė fascija ir klubakaulio sparno kraštas",
    finish: "aponeurozė pereina į baltąją pilvo liniją",
    function: "Į    sitraukia į pilvo preso darbą",
  },
  kvadratinis_juosmens_raumuo: {
    latin: "Quadratus lumborum",
    group: "Pilvo raumenys",
    name: "Kvadratinis juosmens raumuo",
    pictures: musclesImages.kvadratinis_juosmens_raumuo,
    start:
      "Užpakalinis klubakaulio sparno kraštas ir apatinių juosmens slankstelių skersinės ataugos",
    finish: "XII šonkaulio apatinis kraštas ir XII krūtinės slankstelio kūnas",
    function: "Nuleidžia XII šonkaulį ir lenkia liemenį į šoną",
  },
};
