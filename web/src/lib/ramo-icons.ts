import { Car, FirstAid, Heart, House, PawPrint } from "@phosphor-icons/react/dist/ssr";

export const RAMO_ICONS = {
  auto: Car,
  "gastos-medicos-mayores": FirstAid,
  vida: Heart,
  casa: House,
  mascotas: PawPrint,
} as const;
